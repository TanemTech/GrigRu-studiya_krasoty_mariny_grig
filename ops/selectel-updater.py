#!/usr/bin/env python3
"""Pull tested TANEM Marina Grig static releases over HTTPS, without SSH."""
import fnmatch
import io
import json
import os
from pathlib import Path
import re
import shutil
import sys
import tarfile
import tempfile
import urllib.error
import urllib.request

REPO = "TanemTech/GrigRu-studiya_krasoty_mariny_grig"
DOCROOT = Path("/var/www/marina-grig")
STATE_DIR = Path("/home/tanem-deploy/.local/state/tanem-grig-sync")
BASE_API = f"https://api.github.com/repos/{REPO}"
CORE = (
    "index.html", "desktop.css", "desktop.js", "mobile.css",
    "mobile-overrides.css", "mobile.js", "salon-palette.css",
    "site-data.js", "site-regions.js", "site-runtime.js",
    "favicon-source.png", "logo-placeholder.svg", "media-placeholder.svg",
)
MEDIA = ("hero.webp", "profile.webp", "gallery-*.webp", "team-*.webp",
         "logo.webp", "logo.png", "logo.svg")
SHA_RE = re.compile(r"^[0-9a-f]{40}$")
MAX_ARCHIVE_BYTES = 180 * 1024 * 1024
MAX_TOTAL_SITE_BYTES = 150 * 1024 * 1024


def download(url: str, limit: int = MAX_ARCHIVE_BYTES) -> bytes:
    req = urllib.request.Request(url, headers={
        "User-Agent": "tanem-selectel-approved-site-sync/1.0",
        "Accept": "application/vnd.github+json" if "api.github.com" in url else "application/octet-stream",
    })
    with urllib.request.urlopen(req, timeout=45) as response:
        data = response.read(limit + 1)
    if len(data) > limit:
        raise ValueError("Download exceeds size limit")
    return data


def api_json(url: str) -> dict:
    return json.loads(download(url, 5 * 1024 * 1024))


def approved_commit() -> str | None:
    # Deploy only a CURRENT main commit with a successful complete Pages workflow.
    # The workflow already runs the three TANEM production tests.
    head = api_json(f"{BASE_API}/branches/main")["commit"]["sha"]
    if not SHA_RE.fullmatch(head):
        raise ValueError("Invalid head commit hash")
    runs = api_json(
        f"{BASE_API}/actions/workflows/pages.yml/runs?branch=main&per_page=5"
    ).get("workflow_runs", [])
    for run in runs:
        if run.get("head_sha") != head:
            continue
        if run.get("event") not in ("push", "workflow_dispatch"):
            continue
        if run.get("status") == "completed" and run.get("conclusion") == "success":
            return head
        print(f"SKIP: current main CI not successful ({run.get('status')}/{run.get('conclusion')})")
        return None
    print("SKIP: no successful completed production workflow for current main")
    return None


def approved_name(name: str) -> bool:
    return name in CORE or any(fnmatch.fnmatchcase(name, pat) for pat in MEDIA)


def extract_site(archive: bytes) -> dict[str, bytes]:
    files = {}
    total = 0
    with tarfile.open(fileobj=io.BytesIO(archive), mode="r:gz") as tar:
        for member in tar:
            parts = member.name.split("/")
            if len(parts) != 2 or not member.isfile():
                continue
            name = parts[1]
            if not approved_name(name):
                continue
            if member.size > 40 * 1024 * 1024 or member.size < 0:
                raise ValueError(f"Invalid asset size: {name}")
            stream = tar.extractfile(member)
            if stream is None:
                raise ValueError(f"Cannot extract: {name}")
            data = stream.read(member.size + 1)
            if len(data) != member.size:
                raise ValueError(f"Truncated asset: {name}")
            total += len(data)
            if total > MAX_TOTAL_SITE_BYTES or len(files) > 200:
                raise ValueError("Site size or file count limit exceeded")
            files[name] = data
    missing = set(CORE) - set(files)
    if missing:
        raise ValueError(f"Site archive incomplete: {sorted(missing)}")
    if b"<html" not in files["index.html"].lower():
        raise ValueError("Unexpected HTML content")
    if b"production" not in files["site-data.js"]:
        raise ValueError("Production site data missing")
    return files


def deploy(files: dict[str, bytes], sha: str) -> None:
    if not DOCROOT.is_dir() or not (DOCROOT / "index.html").is_file():
        raise RuntimeError("Existing production site not found; refused to deploy")
    STATE_DIR.mkdir(mode=0o700, parents=True, exist_ok=True)
    backup = STATE_DIR / "previous"
    # Back up current production files outside the public web directory.
    with tempfile.TemporaryDirectory(prefix="backup-", dir=STATE_DIR) as backup_tmp:
        snapshot = Path(backup_tmp)
        for name in files:
            current = DOCROOT / name
            if current.is_symlink():
                raise RuntimeError(f"Refusing to overwrite symlink: {name}")
            if current.is_file():
                shutil.copy2(current, snapshot / name)
        replacements = []
        try:
            for name, data in files.items():
                fd, tmp_path = tempfile.mkstemp(prefix=".tanem-next-", dir=DOCROOT)
                tmp = Path(tmp_path)
                try:
                    with os.fdopen(fd, "wb") as output:
                        output.write(data)
                        output.flush()
                        os.fsync(output.fileno())
                    os.chmod(tmp, 0o644)
                    os.replace(tmp, DOCROOT / name)
                    replacements.append(name)
                finally:
                    tmp.unlink(missing_ok=True)
            state_tmp = STATE_DIR / "state.json.tmp"
            state_tmp.write_text(json.dumps({"sha": sha}) + "\n", encoding="utf8")
            os.replace(state_tmp, STATE_DIR / "state.json")
        except BaseException:
            for name in reversed(replacements):
                previous = snapshot / name
                if previous.is_file():
                    shutil.copy2(previous, DOCROOT / name)
                else:
                    (DOCROOT / name).unlink(missing_ok=True)
            raise
        if backup.exists():
            shutil.rmtree(backup)
        shutil.copytree(snapshot, backup)
    print(f"DEPLOYED: {sha} ({len(files)} allowed site files)")


def main() -> int:
    try:
        sha = approved_commit()
        if not sha:
            return 0
        state = STATE_DIR / "state.json"
        if state.is_file():
            try:
                if json.loads(state.read_text(encoding="utf8")).get("sha") == sha:
                    print(f"UNCHANGED: {sha}")
                    return 0
            except (ValueError, OSError):
                pass
        if "--check-only" in sys.argv:
            print(f"READY: validated successful GitHub Actions build {sha}")
            return 0
        archive = download(f"https://codeload.github.com/{REPO}/tar.gz/{sha}")
        files = extract_site(archive)
        deploy(files, sha)
        return 0
    except (OSError, ValueError, RuntimeError, KeyError, urllib.error.URLError, tarfile.TarError) as ex:
        print(f"ERROR: {ex}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
