#!/usr/bin/env bash
# One-time setup for Marina Grig: no inbound SSH, no DNS/Nginx changes.
set -Eeuo pipefail

USER_NAME=tanem-deploy
SITE=/var/www/marina-grig
BIN=/home/tanem-deploy/.local/bin/tanem-grig-updater.py
UPDATER_URL="https://raw.githubusercontent.com/TanemTech/GrigRu-studiya_krasoty_mariny_grig/04a2665f51b1687bddc15fdb15d3730900bd22cb/ops/selectel-updater.py"

if [[ "$(id -u)" != 0 ]]; then echo 'ERROR: use Selectel root web console'; exit 1; fi
if ! id "$USER_NAME" >/dev/null 2>&1; then echo 'ERROR: tanem-deploy does not exist'; exit 1; fi
if [[ ! -f "$SITE/index.html" ]]; then echo 'ERROR: existing Marina Grig site not found; no changes made'; exit 1; fi
for exe in curl python3 runuser systemctl install; do
  if ! command -v "$exe" >/dev/null 2>&1; then echo "ERROR: missing $exe"; exit 1; fi
done
if ! runuser -u "$USER_NAME" -- test -w "$SITE"; then
  echo "ERROR: tanem-deploy cannot write to $SITE; no changes made"; exit 1
fi
if [[ -e /etc/systemd/system/tanem-grig-sync.service || -e /etc/systemd/system/tanem-grig-sync.timer ]]; then
  echo 'ERROR: an existing tanem-grig-sync setup exists; refusing to overwrite'; exit 1
fi

TMP="$(mktemp)"
trap 'rm -f "$TMP"' EXIT
curl -fsSL --retry 2 --connect-timeout 10 --max-time 60 "$UPDATER_URL" -o "$TMP"
python3 -m py_compile "$TMP"

install -d -m 0750 -o "$USER_NAME" -g "$USER_NAME" /home/tanem-deploy/.local/bin
install -d -m 0700 -o "$USER_NAME" -g "$USER_NAME" /home/tanem-deploy/.local/state/tanem-grig-sync
install -m 0750 -o "$USER_NAME" -g "$USER_NAME" "$TMP" "$BIN"

cat > /etc/systemd/system/tanem-grig-sync.service <<'UNIT'
[Unit]
Description=TANEM Marina Grig deploy verified GitHub main over outbound HTTPS
Wants=network-online.target
After=network-online.target
[Service]
Type=oneshot
User=tanem-deploy
Group=tanem-deploy
UMask=0077
NoNewPrivileges=true
ExecStart=/usr/bin/python3 /home/tanem-deploy/.local/bin/tanem-grig-updater.py
UNIT

cat > /etc/systemd/system/tanem-grig-sync.timer <<'UNIT'
[Unit]
Description=Check validated TANEM Marina Grig updates every 5 minutes
[Timer]
OnBootSec=2min
OnUnitActiveSec=5min
AccuracySec=30s
Unit=tanem-grig-sync.service
[Install]
WantedBy=timers.target
UNIT

systemctl daemon-reload
systemctl enable --now tanem-grig-sync.timer
if systemctl start tanem-grig-sync.service; then
  echo 'OK: auto-updates are enabled; initial sync succeeded or safely skipped pending tests.'
else
  echo 'WARNING: timer enabled, but first sync failed; existing site not intentionally removed.'
  echo 'See: journalctl -u tanem-grig-sync.service -n 20 --no-pager'
fi
echo 'Next checks run automatically about every 5 minutes. No SSH from Mac required.'
