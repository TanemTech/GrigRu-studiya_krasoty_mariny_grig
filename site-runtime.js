(function(){
  'use strict';

  const data=window.TANEM_SITE_DATA;
  if(!data||data.mode!=='production')return;

  const REGION=window.TANEM_REGION||{locales:data.locales||['ru','en','hy'],fallback:data.defaultLocale||'ru',resolve:lang=>lang};
  const currentLang=()=>{
    const raw=(document.body.dataset.brLang||document.documentElement.lang||REGION.fallback||'ru').toLowerCase();
    return REGION.resolve(raw);
  };
  const text=(value,lang=currentLang())=>{
    if(value==null)return '';
    if(typeof value==='string')return value;
    return value[lang]??value[data.defaultLocale||'ru']??value.ru??value.en??value.hy??'';
  };
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const isExternal=url=>/^(?:https?:|tg:|viber:|whatsapp:)/i.test(String(url||''));
  const phoneHref=()=>data.contacts.phone?'tel:'+String(data.contacts.phone).replace(/[^+\d]/g,''):'';
  const mapActionLabel=lang=>data.country==='RU'
    ?(lang==='en'?'Open in Yandex Maps':lang==='hy'?'Բացել Yandex Maps-ում':'Открыть в Яндекс Картах')
    :(lang==='en'?'Open in Google Maps':lang==='hy'?'Բացել Google Maps-ում':'Открыть в Google Maps');
  const callActionLabel=lang=>lang==='en'?'Call':lang==='hy'?'Զանգահարել':'Позвонить';
  const messageActionLabel=(lang,name)=>lang==='en'?'Message '+name:lang==='hy'?'Գրել '+name:'Написать в '+name;
  const setCardVisible=(node,visible)=>{
    if(!node)return;
    node.hidden=!visible;
    if(visible)node.style.removeProperty('display');
    else node.style.setProperty('display','none','important');
  };

  function setText(selector,value,scope=document){
    scope.querySelectorAll(selector).forEach(node=>{node.textContent=value});
  }
  function setLink(node,url,fallback){
    if(!node)return;
    if(url){
      node.setAttribute('href',url);
      node.removeAttribute('aria-disabled');
      if(isExternal(url)){node.setAttribute('target','_blank');node.setAttribute('rel','noopener noreferrer')}
      else{node.removeAttribute('target');node.removeAttribute('rel')}
    }else{
      node.setAttribute('href',fallback||'#');
      node.setAttribute('aria-disabled','true');
      node.removeAttribute('target');
      node.removeAttribute('rel');
    }
  }
  function replaceBrandTokens(scope,name){
    if(!scope)return;
    const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{if((node.nodeValue||'').includes('SALON NAME'))node.nodeValue=node.nodeValue.replaceAll('SALON NAME',name)});
    scope.querySelectorAll('[aria-label],[alt],[title]').forEach(node=>{
      ['aria-label','alt','title'].forEach(attribute=>{
        const value=node.getAttribute(attribute);
        if(value&&value.includes('SALON NAME'))node.setAttribute(attribute,value.replaceAll('SALON NAME',name));
      });
    });
  }

  function bookingItems(lang){
    const items=(data.contacts.booking||[]).map(item=>({...item}));
    if(data.contacts.phone&&!items.some(item=>item.type==='phone')){
      items.unshift({type:'phone',label:{ru:'Телефон',en:'Phone',hy:'Հեռախոս'},url:phoneHref()});
    }
    if(data.contacts.messengerUrl&&!items.some(item=>item.type==='messenger')){
      items.push({type:'messenger',label:data.contacts.messengerLabel,url:data.contacts.messengerUrl});
    }
    if(data.contacts.mapUrl&&!items.some(item=>item.type==='map')){
      items.push({type:'map',label:{ru:'Карты',en:'Map',hy:'Քարտեզ'},url:data.contacts.mapUrl});
    }
    const seen=new Set();
    return items.filter(item=>{
      const url=String(item.url||'').trim();
      if(!url||seen.has(url))return false;
      seen.add(url);
      item.localizedLabel=text(item.label,lang)||text(item.title,lang)||'Записаться';
      return true;
    });
  }

  function renderDesktopBooking(lang){
    const box=document.querySelector('#stdBookOverlay .std-book-options');
    if(!box)return;
    box.innerHTML=bookingItems(lang).map(item=>
      `<a class="tn50-book-option" href="${esc(item.url)}"><span class="tn50-book-icon ${esc(item.type||'message')}">${mobileBookingIcon(item.type)}</span><span class="std-book-label"><strong>${esc(item.localizedLabel)}</strong></span><span class="tn50-book-arrow" aria-hidden="true">→</span></a>`
    ).join('');
    box.querySelectorAll('a').forEach(link=>setLink(link,link.getAttribute('href'),'#salonDesktopContacts'));
  }

  function mobileBookingIcon(type){
    if(type==='phone')return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h3l1.3 4-2 1.5c1 2 2.6 3.6 4.6 4.6l1.5-2L19 13.5v3c0 1.1-.9 2-2 2C10.4 18.5 5.5 13.6 5.5 7A2 2 0 0 1 7 4Z"/></svg>';
    if(type==='map')return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"/><circle cx="12" cy="10" r="2.2"/></svg>';
    return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5h14v10H9l-4 3v-13Z"/></svg>';
  }
  function renderMobileBooking(lang){
    const box=document.querySelector('#tn13BookSheet .tn50-book-options');
    if(!box)return;
    box.innerHTML=bookingItems(lang).map(item=>
      `<a class="tn50-book-option" href="${esc(item.url)}"><span class="tn50-book-icon ${esc(item.type||'message')}">${mobileBookingIcon(item.type)}</span><span><strong>${esc(item.localizedLabel)}</strong></span><span class="tn50-book-arrow">→</span></a>`
    ).join('');
    box.querySelectorAll('a').forEach(link=>setLink(link,link.getAttribute('href'),'#tn13Visit'));
  }

  function scheduleState(){
    const periods=data.schedule?.periods||[];
    if(!periods.length)return null;
    const parts=new Intl.DateTimeFormat('en-US',{timeZone:data.schedule.timezone||'UTC',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());
    const values=Object.fromEntries(parts.map(part=>[part.type,part.value]));
    const weekday={Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6,Sun:7}[values.weekday];
    const now=(weekday-1)*1440+Number(values.hour)*60+Number(values.minute);
    const minutes=value=>{const match=String(value||'').match(/^(\d{1,2}):(\d{2})$/);return match?Number(match[1])*60+Number(match[2]):null};
    const intervals=[];
    periods.forEach(period=>(period.days||[]).forEach(day=>{
      const open=minutes(period.open),close=minutes(period.close);
      if(open==null||close==null)return;
      const start=(Number(day)-1)*1440+open;
      const end=(Number(day)-1)*1440+close+(close<=open?1440:0);
      [-10080,0,10080].forEach(shift=>intervals.push({start:start+shift,end:end+shift,open:period.open,close:period.close}));
    }));
    const active=intervals.find(interval=>now>=interval.start&&now<interval.end);
    if(active)return {open:true,time:active.close};
    const next=intervals.filter(interval=>interval.start>now).sort((a,b)=>a.start-b.start)[0];
    return {open:false,time:next?.open||''};
  }
  function statusCopy(state,lang){
    if(!state)return {main:lang==='hy'?'Աշխատանքային ժամեր':lang==='en'?'Opening hours':'График',sub:text(data.schedule.fallback,lang),full:text(data.schedule.fallback,lang)};
    const main=state.open?(lang==='hy'?'Բաց է մինչև':lang==='en'?'Open until':'Открыто до'):(lang==='hy'?'Փակ է մինչև':lang==='en'?'Closed until':'Закрыто до');
    return {main,sub:state.time,full:(main+' '+state.time).trim()};
  }
  function applySchedule(lang){
    const state=scheduleState(),copy=statusCopy(state,lang),kind=state?(state.open?'open':'closed'):'';
    const desktopMain=document.querySelector('#stdStatusMain');
    const desktopSub=document.querySelector('#stdStatusSub');
    if(desktopMain){desktopMain.textContent=copy.main;desktopMain.classList.toggle('open',kind==='open');desktopMain.classList.toggle('closed',kind==='closed')}
    if(desktopSub)desktopSub.textContent=copy.sub;
    const sticky=document.querySelector('#stdStickyServiceCard');
    sticky?.classList.remove('is-open','is-closed');
    if(kind)sticky?.classList.add('is-'+kind);
    setText('#stdStickyServiceStatus',copy.main);
    setText('#stdStickyServiceStatusSub',copy.sub);
    const contactStatus=document.querySelector('#stdContactStatus');
    contactStatus?.classList.remove('open','closed');
    if(kind)contactStatus?.classList.add(kind);
    setText('#stdContactStatusText',copy.full);
    setText('#stdContactHoursSub',copy.full);
    const mobileStatus=document.querySelector('#tn22Status');
    mobileStatus?.classList.remove('open','closed');
    if(kind)mobileStatus?.classList.add(kind);
    setText('#tn22Status .tn22-status-text',copy.full);
    const mobileHero=document.querySelector('.tn50-hero-status');
    mobileHero?.classList.remove('open','closed');
    if(kind)mobileHero?.classList.add(kind);
    setText('.tn50-hero-status-main',copy.main);
    setText('.tn50-hero-status-sub',copy.sub);
    const mobileHours=document.querySelector('#tn13Visit .tn22-contact-grid > :last-child span:last-child span');
    if(mobileHours)mobileHours.textContent=copy.full;
  }

  function applyRatingAndReviews(lang){
    const value=Number(data.rating?.value);
    const count=Number(data.rating?.count)||0;
    const hasRating=Number.isFinite(value)&&value>0;
    const countCopy=lang==='hy'?`${count} գնահատական`:lang==='en'?`${count} rating${count===1?'':'s'}`:`${count} оцен${count%10===1&&count%100!==11?'ка':count%10>=2&&count%10<=4&&(count%100<12||count%100>14)?'ки':'ок'}`;
    const missing=lang==='hy'?'վարկանիշը նշված չէ':lang==='en'?'rating not specified':'рейтинг не указан';
    document.querySelectorAll('.dct-about-rating,.tn42-rating').forEach(node=>{
      const strong=node.querySelector('strong'),label=node.querySelector('span:last-child');
      if(strong)strong.textContent=hasRating?String(value).replace('.',','):'—';
      if(label)label.textContent=hasRating?countCopy:missing;
    });
    document.querySelectorAll('.std-reviews-score,.br-score,.tn30-score').forEach(node=>{
      const strong=node.querySelector('strong');
      const label=node.querySelector('.std-reviews-count,.br-count,.tn30-count');
      if(strong)strong.textContent=hasRating?String(value).replace('.',','):'—';
      if(label)label.textContent=hasRating?countCopy:missing;
    });
    document.querySelectorAll('.std-reviews-stars').forEach(node=>node.setAttribute('aria-label',hasRating?`${value} / 5`:missing));

    const reviews=data.reviews||[];
    if(reviews.length)document.querySelectorAll('#salonDesktopReviews .std-review-card').forEach((card,index)=>{
      const review=reviews[index%reviews.length];
      setText('.std-review-name',text(review.author,lang),card);
      setText('.std-review-text',text(review.text,lang),card);
      setText('.std-review-meta',text(review.source,lang),card);
      setLink(card,review.url||data.contacts.reviewsUrl,'#salonDesktopReviews');
    });
    const reviewsAll=document.querySelector('.std-reviews-all');
    if(reviewsAll)setLink(reviewsAll,data.contacts.reviewsUrl,'#salonDesktopReviews');
  }

  function applyDesktop(lang){
    const root=document.getElementById('salon-desktop-v1');
    if(!root)return;
    const salon=data.salon,contacts=data.contacts;
    setText('.std-header-brand-main,.std-logo,.dct-about-brand',text(salon.name,lang),root);
    const desktopBrand=root.querySelector('.std-header-brand-main');
    if(desktopBrand){
      const cleanName=text(salon.name,lang).trim();
      const fitDesktopBrand=()=>{
        if(desktopBrand.textContent.trim()!==cleanName)return;
        desktopBrand.style.removeProperty('font-size');
        const nav=root.querySelector('.std-nav');
        if(!nav)return;
        const brandRect=desktopBrand.getBoundingClientRect(),navRect=nav.getBoundingClientRect();
        const available=Math.max(0,navRect.left-brandRect.left-12);
        const rendered=desktopBrand.scrollWidth;
        const base=parseFloat(getComputedStyle(desktopBrand).fontSize)||31;
        if(available>0&&rendered>available+1){
          const fitted=Math.max(18,Math.floor(base*(available/rendered)*.96));
          desktopBrand.style.setProperty('font-size',fitted+'px','important');
        }
      };
      requestAnimationFrame(fitDesktopBrand);
      if(document.fonts?.ready)document.fonts.ready.then(()=>requestAnimationFrame(fitDesktopBrand)).catch(()=>{});
    }
    setText('.std-tagline',text(salon.heroDescription,lang),root);
    setText('.dct-about-kind',text(salon.kind,lang),root);
    setText('.dct-about-copy',text(salon.about,lang),root);
    const address=root.querySelector('.std-address');
    if(address){address.textContent='';address.append(text(salon.city,lang)+',',document.createElement('br'),text(salon.address,lang))}
    const stickyRoute=root.querySelector('.dct-service-sticky-route');
    if(stickyRoute){setText('b',text(salon.city,lang),stickyRoute);setText('small',text(salon.address,lang),stickyRoute);setLink(stickyRoute,contacts.mapUrl,'#salonDesktopContacts')}
    const addressCard=root.querySelector('#salonDesktopContacts [data-contact-type="address"]');
    const phoneCard=root.querySelector('#salonDesktopContacts [data-contact-type="phone"]');
    const messengerCard=root.querySelector('#salonDesktopContacts [data-contact-type="messenger"]');
    if(addressCard){setText('.std-contact-card-title',text(salon.city,lang)+', '+text(salon.address,lang),addressCard);setText('.std-contact-card-sub',mapActionLabel(lang),addressCard);setLink(addressCard,contacts.mapUrl,'#salonDesktopContacts')}
    setCardVisible(phoneCard,!!contacts.phone);
    if(phoneCard&&contacts.phone){setText('.std-contact-card-title',contacts.phone,phoneCard);setText('.std-contact-card-sub',callActionLabel(lang),phoneCard);setLink(phoneCard,phoneHref(),'#salonDesktopContacts')}
    setCardVisible(messengerCard,!!contacts.messengerUrl);
    if(messengerCard&&contacts.messengerUrl){setText('.std-contact-card-title',text(contacts.messengerLabel,lang),messengerCard);setText('.std-contact-card-sub',messageActionLabel(lang,text(salon.name,lang)),messengerCard);setLink(messengerCard,contacts.messengerUrl,'#salonDesktopContacts')}
    const headerPhone=root.querySelector('.std-phone');
    const contactCall=root.querySelector('.std-contact-call');
    setCardVisible(headerPhone,!!contacts.phone);
    setCardVisible(contactCall,!!contacts.phone);
    root.querySelector('#salonDesktopContacts .std-contact-actions')?.classList.toggle('is-single',!contacts.phone);
    if(headerPhone&&contacts.phone){setLink(headerPhone,phoneHref(),'#salonDesktopContacts');setText('span',contacts.phone,headerPhone)}
    setLink(root.querySelector('.std-meta .std-meta-item[href]'),contacts.mapUrl,'#salonDesktopContacts');
    if(contactCall&&contacts.phone)setLink(contactCall,phoneHref(),'#salonDesktopContacts');
    setLink(root.querySelector('.std-contact-route'),contacts.mapUrl,'#salonDesktopContacts');
    const mapFrame=root.querySelector('.std-contact-map iframe');
    if(mapFrame)mapFrame.src=contacts.mapEmbedUrl||'about:blank';
    const hero=data.media.hero?.[0];
    const heroImage=root.querySelector('#stdHeroMedia');
    if(heroImage&&hero){
      const src=typeof hero==='string'?hero:hero.src;
      const alt=typeof hero==='string'?text(salon.name,lang):text(hero.alt,lang);
      if(src)heroImage.src=src;
      heroImage.alt=alt||text(salon.name,lang);
    }
    const aboutImage=root.querySelector('.mct-about-portrait img');
    if(aboutImage&&data.media.about)aboutImage.src=data.media.about;
    const bookingAmenity=root.querySelector('.dct-about-amenities-grid article:last-child span');
    if(bookingAmenity)bookingAmenity.textContent=lang==='hy'?'Գրանցումը հասանելի է հեռախոսով, մեսենջերով կամ առցանց։':lang==='en'?'Book by phone, messenger, or online.':'Запись доступна по телефону, в мессенджере или онлайн.';
    renderDesktopBooking(lang);
  }

  function applyMobile(lang){
    const root=document.getElementById('salon-mobile');
    if(!root)return;
    const salon=data.salon,contacts=data.contacts;
    setText('.tn22-title,.br-about-brand',text(salon.name,lang),root);
    const mobileTitle=root.querySelector('.tn22-title');
    if(mobileTitle){
      const cleanName=text(salon.name,lang).trim();
      const single=cleanName.length>0&&!/\s/u.test(cleanName);
      mobileTitle.classList.toggle('is-single-line',single);
      const baseMax=cleanName.length<=5?68:cleanName.length<=8?60:cleanName.length<=10?54:49;
      mobileTitle.style.setProperty('--hero-single-max',baseMax+'px');
      if(single){
        const fitSingleTitle=()=>{
          if(mobileTitle.textContent.trim()!==cleanName)return;
          mobileTitle.style.setProperty('--hero-single-max',baseMax+'px');
          const available=mobileTitle.clientWidth,rendered=mobileTitle.scrollWidth;
          if(available>0&&rendered>available+1){
            const fitted=Math.max(34,Math.floor(baseMax*(available/rendered)*.96));
            mobileTitle.style.setProperty('--hero-single-max',fitted+'px');
          }
        };
        requestAnimationFrame(fitSingleTitle);
        if(document.fonts?.ready)document.fonts.ready.then(()=>requestAnimationFrame(fitSingleTitle)).catch(()=>{});
      }
    }
    setText('.tn22-sub,.br-about-kind',text(salon.kind,lang),root);
    setText('#tn38About .tn42-copy',text(salon.about,lang),root);
    const location=root.querySelector('.tn37-location .tn37-info-copy');
    if(location)location.innerHTML='<strong>'+esc(text(salon.city,lang))+',</strong>'+esc(text(salon.address,lang));
    const galleryBrand=root.querySelector('.tn22-gallery-title span');
    if(galleryBrand)galleryBrand.textContent=text(salon.name,lang);
    setText('.tn22-master-brand',text(salon.name,lang),root);
    const topBrand=root.querySelector('.tn22-brand');
    if(topBrand){
      const realLogo=data.mode==='production'&&data.media.logo&&!/logo-placeholder\.svg$/i.test(String(data.media.logo));
      if(realLogo){
        let brandImage=topBrand.querySelector('img');
        if(!brandImage){brandImage=document.createElement('img');topBrand.replaceChildren(brandImage)}
        brandImage.src=data.media.logo;brandImage.alt=text(salon.name,lang);
      }else topBrand.textContent=text(salon.name,lang);
    }
    const heroImage=root.querySelector('.br-hero-video');
    const hero=data.media.hero?.[0];
    if(heroImage&&hero&&heroImage.tagName==='IMG'){heroImage.src=hero.src;heroImage.alt=text(hero.alt,lang)}
    const aboutImage=root.querySelector('#tn38About .tn42-photo img');
    if(aboutImage&&data.media.about){aboutImage.src=data.media.about;aboutImage.alt=text(salon.name,lang)}
    const addressCard=root.querySelector('#tn13Visit [data-contact-type="address"]');
    const phoneCard=root.querySelector('#tn13Visit [data-contact-type="phone"]');
    const messengerCard=root.querySelector('#tn13Visit [data-contact-type="messenger"]');
    if(addressCard){setText('strong',text(salon.city,lang)+', '+text(salon.address,lang),addressCard);const sub=addressCard.querySelector('strong+span');if(sub)sub.textContent=mapActionLabel(lang);setLink(addressCard,contacts.mapUrl,'#tn13Visit')}
    setCardVisible(phoneCard,!!contacts.phone);
    if(phoneCard&&contacts.phone){setText('strong',contacts.phone,phoneCard);const sub=phoneCard.querySelector('strong+span');if(sub)sub.textContent=callActionLabel(lang);setLink(phoneCard,phoneHref(),'#tn13Visit')}
    setCardVisible(messengerCard,!!contacts.messengerUrl);
    if(messengerCard&&contacts.messengerUrl){setText('strong',text(contacts.messengerLabel,lang),messengerCard);const sub=messengerCard.querySelector('strong+span');if(sub)sub.textContent=messageActionLabel(lang,text(salon.name,lang));setLink(messengerCard,contacts.messengerUrl,'#tn13Visit')}
    const mobileCall=root.querySelector('.tn22-call');
    setCardVisible(mobileCall,!!contacts.phone);
    root.querySelector('.tn22-visit-actions')?.classList.toggle('is-single',!contacts.phone);
    if(mobileCall&&contacts.phone)setLink(mobileCall,phoneHref(),'#tn13Visit');
    setLink(root.querySelector('.tn22-route'),contacts.mapUrl,'#tn13Visit');
    const mapFrame=root.querySelector('.tn22-mapwrap iframe');
    if(mapFrame)mapFrame.src=contacts.mapEmbedUrl||'about:blank';
    renderMobileBooking(lang);
  }

  function applyOptionalSections(){
    const hasPortfolio=(data.media.portfolio||[]).length>0;
    const hasGallery=Object.values(data.media.gallery||{}).some(items=>items.length>0);
    ['#salonDesktopPortfolio','#tn13Portfolio'].forEach(selector=>{const node=document.querySelector(selector);if(node)node.hidden=!hasPortfolio});
    // Team and reviews are permanent structural sections. Missing data is rendered as a neutral empty state.
    ['#salonDesktopReviews','#tn13Reviews','#salonDesktopTeam','#tn13Team'].forEach(selector=>{const node=document.querySelector(selector);if(node)node.hidden=false});
    if(!hasGallery)document.querySelectorAll('#stdOpenGallery,#stdStickyGalleryOpen,.tn22-port-all,.tn22-worklink,.tn22-media').forEach(node=>{node.hidden=true});
  }

  function apply(){
    const lang=currentLang();
    const name=text(data.salon.name,lang),city=text(data.salon.city,lang);
    applyDesktop(lang);
    applyMobile(lang);
    applySchedule(lang);
    applyRatingAndReviews(lang);
    applyOptionalSections();
    replaceBrandTokens(document.body,name);
    document.title=city?name+' — '+city:name;
    const description=document.querySelector('meta[name="description"]');
    if(description)description.setAttribute('content',text(data.salon.heroDescription,lang)||text(data.salon.about,lang));
  }

  // Client presentation only: leave the official Sonline titles and booking
  // duration fields in site-data.js intact (they can represent different times).
  function displayDuration(raw,lang=currentLang()){
    const source=String(raw||'').trim();
    const match=source.match(/^(\d+(?:[.,]\d+)?)\s*(мин(?:ут(?:а|ы)?)?|min(?:utes?)?|ч(?:ас(?:а|ов)?)?|h(?:ours?)?)\.?$/i);
    if(!match)return source;
    const number=Number(match[1].replace(',','.'));
    const minutes=/^(?:мин|min)/i.test(match[2])?number:number*60;
    if(minutes<60)return minutes+(lang==='en'?' min':' мин');
    const hours=minutes/60;
    if(Number.isInteger(hours)||Number.isInteger(hours*2))return String(hours).replace('.',lang==='en'?'.':',')+(lang==='en'?' h':' ч');
    const whole=Math.floor(hours),remainder=Math.round(minutes-whole*60);
    return (whole?whole+(lang==='en'?' h ':' ч '):'')+remainder+(lang==='en'?' min':' мин');
  }
  function displayServiceParts(value,hasDuration){
    let name=String(value||'').trim(),note='';
    if(hasDuration)name=name.replace(/\s*(?:[—–-]\s*)?\d+(?:[.,]\d+)?\s*(?:мин(?:ут(?:а|ы)?)?|min(?:utes?)?)\.?\s*$/iu,'').trim();
    const parentheses=name.match(/^(.*?)\s*\(([^()]{9,})\)\s*$/u);
    if(parentheses){name=parentheses[1].trim();note=parentheses[2].trim()}
    else if(name.includes(' — ')){const parts=name.split(' — ');name=parts.shift().trim();note=parts.join(' — ').trim()}
    return {name,note};
  }

  function setupDesktopTeamPaging(){
    const track=document.getElementById('stdTeamTrack');
    if(!track)return;
    const cards=[...track.children].filter(card=>card.classList.contains('std-master'));
    if(cards.length<=4)return;
    track.classList.add('tanem-paged-team');
    let page=0;
    const total=Math.ceil(cards.length/4);
    const controls=document.createElement('div');
    controls.className='tanem-team-controls';
    controls.innerHTML='<button type="button" data-turn="-1" aria-label="Предыдущие мастера">←</button><span aria-live="polite"></span><button type="button" data-turn="1" aria-label="Следующие мастера">→</button>';
    track.after(controls);
    const update=()=>{
      cards.forEach((card,i)=>{
        card.hidden=Math.floor(i/4)!==page;
        card.classList.toggle('tanem-team-solo',page===total-1&&cards.length%4===1&&i===cards.length-1);
      });
      controls.querySelector('span').textContent=(page+1)+' / '+total;
    };
    controls.querySelectorAll('[data-turn]').forEach(button=>button.addEventListener('click',()=>{
      page=(page+Number(button.dataset.turn)+total)%total;
      update();
    }));
    update();
  }

  function alignMobileMasterNames(){
    document.querySelectorAll('#tn13Team .tn22-master-card[data-mid]').forEach(card=>{
      const master=(data.team||[]).find(item=>item.id===card.dataset.mid);
      const label=card.querySelector('.tn22-master-name');
      if(master&&label)label.textContent=text(master.name,currentLang()).trim().split(/\s+/u)[0];
    });
  }

  function setupMasterProfiles(){
    const desktop=window.__BR_DESKTOP_DEVICE__===true;
    const overlay=document.querySelector(desktop?'#stdMasterOverlay':'.tn22-master-page');
    if(!overlay)return;
    let selectedId='';
    const tabs=['about','services','portfolio','reviews'];
    const copy={
      ru:{about:'О мастере',services:'Услуги',portfolio:'Портфолио',reviews:'Отзывы',book:'Записаться',more:'Показать весь прайс',less:'Свернуть прайс',emptyServices:'Услуги уточняются в Sonline.',emptyPortfolio:'Фотографии работ мастера пока не подтверждены.',emptyReviews:'Тексты отзывов этого мастера пока не доступны.',source:'Источник: Sonline',view:'Открыть профиль в Sonline',none:'Длительность уточняется'},
      en:{about:'About',services:'Services',portfolio:'Portfolio',reviews:'Reviews',book:'Book',more:'Show full price list',less:'Collapse price list',emptyServices:'Check services on Sonline.',emptyPortfolio:'Verified photos of this specialist’s work are not available yet.',emptyReviews:'Individual review texts are not available yet.',source:'Source: Sonline',view:'Open Sonline profile',none:'Duration on request'}
    };
    function biography(master,lang){
      const first=text(master.name,lang).trim().split(/\s+/u)[0];
      const role=text(master.role,'ru').toLowerCase();
      if(/ногт|маникюр/.test(role))return lang==='en'
        ?`I’m ${first}, a nail specialist. My approach begins with your needs and preferences: together we choose a service that suits your routine and the result you want. Professional care, comfort and attention to detail matter throughout your visit.`
        :`Я ${first}, мастер ногтевого сервиса. Начинаю с ваших пожеланий и задач: вместе подберём подходящий уход и результат, который соответствует вашему образу жизни. В основе моего подхода — профессионализм, внимание к деталям и ваш комфорт.`;
      if(/парикмах|стилист|волос/.test(role))return lang==='en'
        ?`I’m ${first}, a hair stylist. I help you choose a haircut, color or treatment that fits your hair and your wishes. My approach focuses on thoughtful consultation, professional care and your comfort.`
        :`Я ${first}, парикмахер-стилист. Помогаю подобрать стрижку, окрашивание или уход с учётом особенностей волос и ваших пожеланий. Мой подход — внимательная консультация, профессиональная работа и комфорт на каждом этапе.`;
      return lang==='en'
        ?`I’m ${first}. I start by listening to your wishes and helping you choose the right service. A thoughtful approach, attention to detail and comfort are central to every visit.`
        :`Я ${first}. Начинаю с ваших пожеланий и помогаю подобрать подходящую услугу. Внимание к деталям, профессиональный подход и комфорт — главные ориентиры в работе.`;
    }
    const serviceUrl=service=>/^https:\/\/widget\.sonline\.su\//.test(service.bookingUrl||'')?service.bookingUrl:'';
    function serviceMarkup(service,lang){
      const name=text(service.title,lang);
      const duration=text(service.duration,lang);
      const parts=displayServiceParts(name,!!duration);
      const price=text(service.price,lang);
      const url=serviceUrl(service);
      const tag=url?'a':'button';
      const action=url?'href="'+esc(url)+'" target="_blank" rel="noopener noreferrer"':'type="button" data-master-fallback';
      return '<'+tag+' class="tanem-master-service" '+action+'>'+
        '<span class="tanem-master-service-copy"><strong>'+esc(parts.name)+'</strong>'+
        (parts.note?'<small>'+esc(parts.note)+'</small>':'')+'</span>'+
        '<span class="tanem-master-service-side">'+(duration?'<small>'+esc(displayDuration(duration,lang))+'</small>':'')+
        '<strong>'+esc(price||copy[lang].book)+'</strong></span></'+tag+'>';
    }
    function profileReviews(master,lang){
      const ids=new Set(master.reviewIds||[]);
      return (data.reviews||[]).filter(review=>ids.has(review.id)&&review.rating===5&&/sonline/i.test(text(review.source,'ru'))&&text(review.text,lang));
    }
    function reviewMarkup(review,lang){
      return '<article class="tanem-master-review"><div><span>★★★★★</span><strong>'+esc(text(review.author,lang))+'</strong></div><p>'+esc(text(review.text,lang))+'</p><small>'+esc(text(review.source,lang)||'Sonline')+'</small></article>';
    }
    function render(master){
      const lang=currentLang()==='en'?'en':'ru',words=copy[lang];
      const target=overlay.querySelector(desktop?'#stdMasterPageContent':'.tn22-master-body');
      if(!target)return;
      const items=(data.services||[]).filter(item=>(master.serviceIds||[]).includes(item.id));
      const works=(master.work||[]).map(item=>typeof item==='string'?item:item?.src).filter(Boolean);
      const reviews=profileReviews(master,lang);
      const name=text(master.name,lang),role=text(master.role,lang),avatar=typeof master.photo==='string'?master.photo:master.photo?.src;
      const count=Number(master.reviewCount)||0;
      const profileUrl=/^https:\/\/widget\.sonline\.su\//.test(master.bookingUrl||'')?master.bookingUrl:'';
      const sections=[
        '<section class="tanem-master-section" id="tanem-master-about"><p class="tanem-master-kicker">01 / '+esc(words.about)+'</p><h3>'+esc(words.about)+'</h3><p class="tanem-master-bio">'+esc(biography(master,lang))+'</p></section>',
        '<section class="tanem-master-section" id="tanem-master-services"><p class="tanem-master-kicker">02 / '+esc(words.services)+'</p><h3>'+esc(words.services)+'</h3>'+
          (items.length?'<div class="tanem-master-price-list">'+items.slice(0,6).map(item=>serviceMarkup(item,lang)).join('')+
            (items.length>6?'<div class="tanem-master-extra" hidden>'+items.slice(6).map(item=>serviceMarkup(item,lang)).join('')+'</div>':'')+'</div>':
            '<p class="tanem-master-empty">'+esc(words.emptyServices)+'</p>')+
          (items.length>6?'<button class="tanem-master-more" type="button" aria-expanded="false" data-master-expand>'+esc(words.more)+' <span>↓</span></button>':'')+'</section>',
        '<section class="tanem-master-section" id="tanem-master-portfolio"><p class="tanem-master-kicker">03 / '+esc(words.portfolio)+'</p><h3>'+esc(words.portfolio)+'</h3>'+
          (works.length?'<div class="tanem-master-gallery">'+works.map((src,i)=>'<a href="'+esc(src)+'" target="_blank" rel="noopener noreferrer"><img src="'+esc(src)+'" alt="'+esc(name)+' — '+(i+1)+'" loading="lazy"></a>').join('')+'</div>':
            '<p class="tanem-master-empty">'+esc(words.emptyPortfolio)+'</p>')+'</section>',
        '<section class="tanem-master-section" id="tanem-master-reviews"><p class="tanem-master-kicker">04 / '+esc(words.reviews)+'</p><h3>'+esc(words.reviews)+'</h3><p class="tanem-master-review-source">'+esc(words.source)+(count?' · '+count:'')+'</p>'+
          (reviews.length?'<div class="tanem-master-review-window"><div class="tanem-master-review-track">'+reviews.concat(reviews).map(review=>reviewMarkup(review,lang)).join('')+'</div></div>':
            '<p class="tanem-master-empty">'+esc(words.emptyReviews)+'</p>')+
          (profileUrl?'<a class="tanem-master-source-link" href="'+esc(profileUrl)+'" target="_blank" rel="noopener noreferrer">'+esc(words.view)+' ↗</a>':'')+'</section>'
      ];
      target.innerHTML='<div class="tanem-master-head"><div class="tanem-master-photo">'+(avatar?'<img src="'+esc(avatar)+'" alt="'+esc(name)+'">':'')+'</div><h2>'+esc(name)+'</h2><p>'+esc(role)+'</p></div><div class="tanem-master-sections">'+sections.join('')+'</div>';
      const existing=overlay.querySelector('.tanem-master-jump');
      if(existing)existing.remove();
      const nav=document.createElement('nav');nav.className='tanem-master-jump';nav.setAttribute('aria-label',lang==='en'?'Specialist sections':'Разделы профиля');
      nav.innerHTML=tabs.map((key,i)=>'<button type="button" data-jump="'+key+'" class="'+(i===0?'is-active':'')+'">'+esc(words[key])+'</button>').join('');
      overlay.appendChild(nav);
      const updateNav=()=>{
        const head=target.querySelector('.tanem-master-head');
        const threshold=(head?.offsetHeight||210)-50;
        nav.classList.toggle('is-visible',overlay.scrollTop>threshold);
        const sections=[...target.querySelectorAll('.tanem-master-section')];
        const active=[...sections].reverse().find(section=>section.getBoundingClientRect().top<overlay.getBoundingClientRect().top+overlay.clientHeight*.45)||sections[0];
        nav.querySelectorAll('[data-jump]').forEach((button,i)=>button.classList.toggle('is-active',active===sections[i]));
      };
      overlay.__tanemMasterUpdate=updateNav;
      nav.querySelectorAll('[data-jump]').forEach(button=>button.addEventListener('click',()=>{
        const section=target.querySelector('#tanem-master-'+button.dataset.jump);
        if(!section)return;
        const position=overlay.scrollTop+section.getBoundingClientRect().top-overlay.getBoundingClientRect().top-24;
        overlay.scrollTo({top:position,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
      }));
      target.querySelector('[data-master-expand]')?.addEventListener('click',event=>{
        const button=event.currentTarget,expanded=button.getAttribute('aria-expanded')==='true';
        button.setAttribute('aria-expanded',String(!expanded));
        target.querySelector('.tanem-master-extra').hidden=expanded;
        button.innerHTML=esc(expanded?words.more:words.less)+' <span>'+(expanded?'↓':'↑')+'</span>';
      });
      target.querySelectorAll('[data-master-fallback]').forEach(button=>button.addEventListener('click',()=>{
        if(desktop){document.getElementById('stdMasterPageClose')?.click();document.getElementById('stdHeaderBookBtn')?.click()}
        else {overlay.querySelector('.tn22-back')?.click();document.querySelector('#tn13Top .tn22-cta')?.click()}
      }));
      const track=target.querySelector('.tanem-master-review-track');
      if(track)startMasterReviews(track,overlay);
      const book=overlay.querySelector(desktop?'#stdMasterPageBook':'.tn22-master-book');
      if(book)book.textContent=lang==='en'?'Book online':'Записаться онлайн';
      updateNav();
    }
    function startMasterReviews(track,container){
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
      let offset=0,last=0,dragX=0,dragging=false;
      const move=timestamp=>{
        if(!track.isConnected||!container.classList.contains('open'))return;
        const width=track.scrollWidth/2;
        if(!dragging&&last&&width)offset-=Math.min((timestamp-last)*.024,1.8);
        if(width){offset=((offset%width)-width)%width;track.style.transform='translate3d('+offset+'px,0,0)'}
        last=timestamp;requestAnimationFrame(move);
      };
      track.addEventListener('pointerdown',event=>{dragging=true;dragX=event.clientX;track.setPointerCapture(event.pointerId)});
      track.addEventListener('pointermove',event=>{if(!dragging)return;offset+=event.clientX-dragX;dragX=event.clientX});
      ['pointerup','pointercancel','lostpointercapture'].forEach(type=>track.addEventListener(type,()=>{dragging=false}));
      requestAnimationFrame(move);
    }
    document.addEventListener('click',event=>{
      const trigger=event.target.closest('[data-desktop-master],[data-mid],[data-sheet-mid]');
      if(trigger)selectedId=trigger.dataset.desktopMaster||trigger.dataset.mid||trigger.dataset.sheetMid||'';
    },true);
    new MutationObserver(()=>{
      if(!overlay.classList.contains('open'))return;
      const fallbackName=overlay.querySelector(desktop?'.std-master-profile h2':'.tn22-profile h1')?.textContent;
      const master=(data.team||[]).find(item=>item.id===selectedId)||
        (data.team||[]).find(item=>text(item.name,'ru')===fallbackName);
      if(master)render(master);
    }).observe(overlay,{attributes:true,attributeFilter:['class']});
    overlay.addEventListener('scroll',()=>overlay.__tanemMasterUpdate?.(),{passive:true});
    window.addEventListener('salon-template:languagechange',()=>{
      if(!overlay.classList.contains('open'))return;
      const master=(data.team||[]).find(item=>item.id===selectedId);
      if(master)requestAnimationFrame(()=>render(master));
    });
  }

  // Client-specific Sonline selection is layered on top of the approved service
  // card markup. This deliberately leaves the factory's frozen markup untouched.
  function setupClientInteractions(){
    const desktop=window.__BR_DESKTOP_DEVICE__===true;
    const list=document.querySelector(desktop?'#stdServiceList':'#tn13Services .tn31-service-list');
    if(list){
      const refresh=()=>{
        const category=desktop
          ?document.querySelector('#stdServiceTabs [data-service-category].is-active')?.dataset.serviceCategory||'Все'
          :document.querySelector('#tn13Services [data-scat].active')?.dataset.scat||data.categoryOrder[0];
        const ordered=category==='Все'
          ?data.categoryOrder.flatMap(cat=>data.services.filter(service=>service.category===cat))
          :data.services.filter(service=>service.category===category);
        const rows=list.querySelectorAll(desktop?'.dct-service-card':'.tn31-service-row');
        rows.forEach((row,index)=>{
          const service=ordered[index];
          if(!service)return;
          row.dataset.clientServiceId=service.id;
          row.dataset.clientBookingUrl=service.bookingUrl||'';
          const lang=currentLang();
          const duration=text(service.duration,lang);
          const parts=displayServiceParts(text(service.title,lang),!!duration);
          const title=row.querySelector(desktop?'.dct-service-card-title':'.tn31-service-name');
          const copyKey=lang+'|'+parts.name+'|'+parts.note;
          if(title&&title.dataset.tanemCopyKey!==copyKey){
            title.textContent=parts.name;
            if(desktop){
              if(parts.note){
                const sub=document.createElement('small');sub.className='tanem-service-note';sub.textContent=parts.note;
                title.appendChild(sub);
              }
            }else{
              let sub=row.querySelector('.tn31-service-detail');
              if(parts.note&&!sub){sub=document.createElement('span');sub.className='tn31-service-detail';title.after(sub)}
              if(sub){sub.textContent=parts.note;sub.hidden=!parts.note}
            }
            title.dataset.tanemCopyKey=copyKey;
          }
          row.querySelectorAll('.dct-service-duration[data-duration],.tn31-service-time[data-duration]').forEach(time=>{
            const formatted=displayDuration(time.dataset.duration,lang);
            if(time.textContent!==formatted)time.textContent=formatted;
          });
          if(!desktop){
            const details=row.querySelector('.tn31-service-demo-desc p');
            const more=row.querySelector('[data-service-details]');
            if(details&&more){
              const lineHeight=parseFloat(getComputedStyle(details).lineHeight)||20;
              more.hidden=details.scrollHeight<=lineHeight*2+2;
            }
          }
        });
      };
      let queued=false;
      const schedule=()=>{
        if(queued)return;
        queued=true;
        requestAnimationFrame(()=>{queued=false;refresh()});
      };
      new MutationObserver(schedule).observe(list,{childList:true,subtree:true});
      const tabs=document.querySelector(desktop?'#stdServiceTabs':'#tn13Services .tn31-cats');
      if(tabs)new MutationObserver(schedule).observe(tabs,{childList:true,subtree:true});
      refresh();
      if(document.fonts?.ready)document.fonts.ready.then(schedule).catch(()=>{});
      document.addEventListener('click',event=>{
        const trigger=event.target.closest('[data-service-book],[data-book-service]');
        if(!trigger||!list.contains(trigger))return;
        const row=trigger.closest(desktop?'.dct-service-card':'.tn31-service-row');
        const url=row?.dataset.clientBookingUrl;
        if(!/^https:\/\/widget\.sonline\.su\/ru\/mastersAndDate\/\?/.test(url||''))return;
        event.preventDefault();
        event.stopImmediatePropagation();
        window.open(url,'_blank','noopener,noreferrer');
      },true);
    }

    document.addEventListener('click',event=>{
      const anchor=event.target.closest('.std-nav a[href^="#"],.tn22-navpop a[href^="#"],.std-header-brand[href^="#"]');
      if(!anchor)return;
      const id=anchor.getAttribute('href')?.slice(1);
      const target=id&&document.getElementById(id);
      if(!target)return;
      event.preventDefault();
      const header=desktop?document.querySelector('.std-header'):document.querySelector('.tn22-top');
      const position=header?getComputedStyle(header).position:'';
      const offset=/^(?:fixed|sticky)$/.test(position)?header.getBoundingClientRect().height:0;
      const top=Math.max(0,window.scrollY+target.getBoundingClientRect().top-offset);
      window.scrollTo({top,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
      history.replaceState(null,'','#'+id);
    },true);
  }

  window.addEventListener('salon-template:languagechange',apply);
  window.addEventListener('salon-template:languagechange',alignMobileMasterNames);
  apply();
  setupDesktopTeamPaging();
  alignMobileMasterNames();
  setupMasterProfiles();
  setupClientInteractions();
  [80,260,700].forEach(delay=>window.setTimeout(apply,delay));
  window.setInterval(()=>applySchedule(currentLang()),60000);
})();
