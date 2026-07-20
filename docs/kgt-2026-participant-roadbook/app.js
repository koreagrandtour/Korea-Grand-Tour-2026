(() => {
  'use strict';

  const DAY_COLORS = {1:'#1476e5', 2:'#f25725', 3:'#2f7d5a', 4:'#aa9b67'};
  const KAKAO_ROUTE_NAMES = {
    1:['서울특별시청','공주 무령왕릉과 왕릉원','솔내음','정림사지박물관','아빠의대지엄마의정원','K-water 용담댐 물문화관','왕의지밀'],
    2:['왕의지밀','죽녹원','남도예담','지안재','카페모토라드 합천점','덤덤커피바','청도농원','스포원파크 주차장','롯데시티호텔 울산'],
    3:['롯데시티호텔 울산','불로촌식당','구문소','태백스피드웨이','화암동굴','인제스피디움 호텔'],
    4:['인제스피디움 호텔','옛날원대막국수','인제스피디움 호텔','내린천래프팅협동조합','조침령 새터','서피비치']
  };
  const DAYS = [
    {
      day:1,
      date:'Friday · 14 August',
      title:'Baekje heritage to Jeonju',
      summary:'From Seoul to the royal history of Gongju and Buyeo, then deeper into the countryside for garden coffee, Yongdamho roads and a quiet hanok arrival.',
      distance:'338.3', drive:'5h 55', depart:'10:00', arrive:'19:20',
      image:'assets/day-1-culture.webp', imageAlt:'Traditional Korean temple architecture beneath a clear sky', imageTag:'Heritage · countryside · lake roads',
      note:'An easy cultural opening followed by the first long countryside transfer. Keep energy in reserve for Day 2.',
      stops:[
        {time:'10:00',type:'Departure',name:'Seoul Departure',ko:'서울 출발',note:'Final assembly point will be confirmed by the team. Kakao routing allows approximately 2h 20 to Gongju.',link:'https://place.map.kakao.com/8430129'},
        {time:'12:20',type:'Heritage · 40 min',name:'Muryeong Royal Tomb',ko:'공주 무령왕릉과 왕릉원',note:'Departure 13:00.',link:'https://place.map.kakao.com/2056894818'},
        {time:'13:35',type:'Lunch · 1h 15',name:'Solnaeum',ko:'솔내음 · 연잎밥 / 연잎떡갈비정식',note:'Lunch before the Buyeo visit. Departure 14:50.',link:'https://place.map.kakao.com/7962042'},
        {time:'14:55',type:'Heritage · 40 min',name:'Jeongnimsaji',ko:'부여 정림사지',note:'Departure 15:35.',link:'https://place.map.kakao.com/10720129'},
        {time:'17:25',type:'Coffee · 30 min',name:'Garden Coffee Stop',ko:'아빠의대지 엄마의정원',note:'Countryside garden and open views. Departure 17:55.',link:'https://place.map.kakao.com/14297484'},
        {time:'18:10',type:'Viewpoint · 15 min',name:'Yongdamho Viewpoint',ko:'용담댐 물문화관',note:'Short regroup before the final run to Jeonju. Departure 18:25.',link:'https://place.map.kakao.com/26520060'},
        {time:'19:20',type:'Overnight',name:'Wangyijimil',ko:'왕의지밀 · 전주',note:'Day 2 departure: 09:30.',link:'https://place.map.kakao.com/945236571',end:true}
      ]
    },
    {
      day:2,
      date:'Saturday · 15 August',
      title:'Bamboo, bends and car culture',
      summary:'Damyang bamboo, Jianjae hairpins, Cafe Motorade and a Daegu car meet—then Cheongdo peaches, a private Busan surprise and a late arrival in Ulsan.',
      distance:'499.8', drive:'7h 42', depart:'09:30', arrive:'21:30',
      image:'assets/day-2-cars.webp', imageAlt:'Korea Grand Tour cars assembled together', imageTag:'Bamboo · hairpins · car culture',
      note:'The longest activity day. Every dwell is intentionally tight to protect the 21:30 Ulsan arrival. Jianjae is a route moment, never a timed section.',
      stops:[
        {time:'09:30',type:'Departure',name:'Jeonju Departure',ko:'왕의지밀 출발',link:'https://place.map.kakao.com/945236571'},
        {time:'10:35',type:'Visit · 45 min',name:'Juknokwon Bamboo Forest',ko:'죽녹원',note:'Departure 11:20.',link:'https://place.map.kakao.com/8070994'},
        {time:'11:30',type:'Lunch · 45 min',name:'Namdo Yedam',ko:'남도예담 · 한우떡갈비 / 대통밥 정식',note:'Departure 12:15. Please be ready for the longest driving day.',link:'https://place.map.kakao.com/26602406'},
        {time:'13:25',type:'Drive-through',name:'Jianjae',ko:'지안재',note:'Hairpin-road anchor. No activity stop unless directed.',link:'https://place.map.kakao.com/25681449',pass:true},
        {time:'14:40',type:'Coffee regroup · 10 min',name:'Cafe Motorade Hapcheon',ko:'카페모토라드 합천',note:'Short regroup before Daegu. Departure 14:50.',link:'https://place.map.kakao.com/1523461898'},
        {time:'16:05',type:'Car meet · 45 min',name:'Daegu Car Meet',ko:'덤덤커피바',note:'Departure 16:50.',link:'https://place.map.kakao.com/2103541567'},
        {time:'17:55',type:'Farm · 15 min',name:'Cheongdo Farm',ko:'청도농원',note:'Short peach stop with a large parking area nearby. Departure 18:10.',link:'https://place.map.kakao.com/804049929'},
        {time:'19:20',type:'Private event · 1h 30',name:'Busan Surprise',ko:'부산 서프라이즈 이벤트',note:'Follow live team instructions. Departure 20:50.',link:'https://place.map.kakao.com/17572978'},
        {time:'21:30',type:'Overnight',name:'Lotte City Hotel Ulsan',ko:'롯데시티호텔 울산',note:'Day 3 departure: 09:30.',link:'https://place.map.kakao.com/26632548',end:true}
      ]
    },
    {
      day:3,
      date:'Sunday · 16 August',
      title:'Deep mountain Korea',
      summary:'A long inland climb from Ulsan through Cheongsong, Taebaek and Jeongseon—local food, geological scenery, motorsport heritage and Inje Speedium.',
      distance:'474.4', drive:'7h 30', depart:'09:30', arrive:'19:35',
      image:'assets/day-3-community.webp', imageAlt:'Korea Grand Tour participants on a forest bridge', imageTag:'Mountain Korea · community · motorsport',
      note:'The highest-fatigue road day. Tell the team early if you are tired. Mountain weather or road conditions may require a live route change.',
      stops:[
        {time:'09:30',type:'Departure',name:'Ulsan Departure',ko:'롯데시티호텔 울산 출발',link:'https://place.map.kakao.com/26632548'},
        {time:'11:20',type:'Lunch · 1h 10',name:'Bullochon',ko:'불로촌식당 · 닭불고기 / 닭백숙',note:'Lunch service from around 11:30. Departure 12:30.',link:'https://place.map.kakao.com/8398981'},
        {time:'14:15',type:'Geology · 20 min',name:'Gumunso Limestone Gate',ko:'구문소',note:'Departure 14:35.',link:'https://place.map.kakao.com/8214139'},
        {time:'14:40',type:'Motorsport stop · 25 min',name:'Taebaek Speedway',ko:'태백스피드웨이',note:'Departure 15:05.',link:'https://place.map.kakao.com/1138992184'},
        {time:'16:25',type:'Visit · 45 min',name:'Hwaam Cave',ko:'화암동굴',note:'Departure 17:10.',link:'https://place.map.kakao.com/15171645'},
        {time:'19:35',type:'Overnight',name:'Inje Speedium Hotel',ko:'인제스피디움 호텔',note:'Track program begins Day 4 at 09:00.',link:'https://place.map.kakao.com/25617734',end:true}
      ]
    },
    {
      day:4,
      date:'Monday · 17 August',
      title:'Track to the sea',
      summary:'A controlled morning at Inje Speedium, a hidden local lunch, then Naerincheon and Jochimryeong roads leading to the final gathering at Surfyy Beach.',
      distance:'114.7', drive:'2h 20', depart:'09:00', arrive:'16:50',
      image:'assets/day-4-landscape.webp', imageAlt:'A lake surrounded by green Korean mountains', imageTag:'Track · valley roads · East Sea finish',
      note:'Public roads after the circuit are never an extension of the track. Reset, drive calmly and leave the adrenaline at Speedium.',
      stops:[
        {time:'09:00',type:'Track program',name:'Inje Speedium',ko:'인제스피디움 트랙데이',note:'Follow the track briefing and marshal instructions. Lunch departure 13:40.',link:'https://place.map.kakao.com/25617734'},
        {time:'13:55',type:'Lunch · 45 min',name:'Old Wondae Makguksu',ko:'옛날원대막국수 · 막국수 / 감자전',note:'Departure 14:40, then return to Speedium to regroup.',link:'https://place.map.kakao.com/10692233'},
        {time:'14:55',type:'Regroup',name:'Inje Speedium Regroup',ko:'인제스피디움 재집결',note:'Final convoy departure toward Yangyang at 15:00.',link:'https://place.map.kakao.com/25617734'},
        {time:'15:20',type:'Drive-through',name:'Naerincheon Valley Roads',ko:'내린천 계곡길',note:'Pass-through route anchor.',link:'https://place.map.kakao.com/1953984795',pass:true},
        {time:'16:00',type:'Drive-through',name:'Jochimryeong Approach',ko:'조침령 새터',note:'Winding approach road toward Yangyang.',link:'https://map.kakao.com/link/map/JochimryeongSaeteo,37.962009,128.401267',pass:true},
        {time:'16:50',type:'Finish',name:'Surfyy Beach',ko:'서피비치 · 양양',note:'Korea Grand Tour 2026 finish gathering.',link:'https://place.map.kakao.com/26911134',end:true}
      ]
    }
  ];

  const PARTNERS = [
    {name:'Porsche Korea',logo:'assets/partners/porsche-wordmark.svg',alt:'Porsche'},
    {name:'Porsche Studio Cheongdam',logo:'assets/partners/porsche-wordmark.svg',alt:'Porsche'},
    {name:'Ulanzi',logo:'assets/partners/ulanzi-logo.svg',alt:'Ulanzi',dark:true},
    {name:'BRANDYCLASSIC',logo:'assets/partners/brandyclassic-mark.webp',alt:'BRANDYCLASSIC monogram',photo:true},
    {name:'Simcar Cafe',wordmark:'SIMCAR<small>CAFE</small>'},
    {name:'Lotte City Hotel Ulsan',logo:'assets/partners/lotte-city-hotels-logo.svg',alt:'Lotte City Hotels'},
    {name:'FORTEC',logo:'assets/partners/fortec-korea-logo.png',alt:'FORTEC Motor Sports Oil',dark:true},
    {name:'liveyourroute · Key ring',logo:'assets/partners/liveyourroute-logo.jpg',alt:'LYR Live Your Route',photo:true},
    {name:'AllimMall · Phone number plate',wordmark:'<span lang="ko">알림몰</span><small>ALLIMMALL</small>'},
    {name:'Tinybot',logo:'assets/partners/tinybot-logo.svg',alt:'Tinybot'}
  ];

  const destinationIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20 4-7 16-4-5-5-4 16-7Z"/><path d="m9 15 4-4"/></svg>';
  const routeIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5"/><path d="M9 5h10v10"/></svg>';
  const escapeHtml = value => String(value || '').replace(/[&<>"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));
  const kakaoDestinationUrl = (link,placeName) => {
    const value = String(link || '');
    const placeId = value.match(/place\.map\.kakao\.com\/(\d+)/)?.[1];
    if (placeId) return `https://map.kakao.com/link/to/${placeId}`;
    const coordinate = value.match(/\/link\/(?:map|to)\/[^,]*,(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);
    if (coordinate) return `https://map.kakao.com/link/to/${encodeURIComponent(placeName)},${coordinate[1]},${coordinate[2]}`;
    return value.replace('/link/map/','/link/to/');
  };

  function renderDays() {
    const root = document.getElementById('dayChapters');
    root.innerHTML = DAYS.map(day => `
      <article class="day-chapter" id="day${day.day}" data-day="${day.day}" data-map-view="${day.day}">
        <div class="day-image reveal"><img src="${day.image}" alt="${escapeHtml(day.imageAlt)}" loading="lazy"><span class="day-image-tag">${escapeHtml(day.imageTag)}</span><span class="day-image-number">0${day.day}</span></div>
        <div class="day-route-launch reveal is-loading" data-day-route="${day.day}">
          <div class="day-route-copy">
            <small>Kakao Map · named places</small>
            <strong>Day 0${day.day} route</strong>
            <span data-day-route-summary>Preparing the complete day route…</span>
          </div>
          <div class="day-route-actions" data-day-route-actions="${day.day}" aria-live="polite">
            <span class="day-route-preparing">Preparing route…</span>
          </div>
        </div>
        <header>
          <span class="day-label">Day 0${day.day} · ${escapeHtml(day.date)}</span>
          <h2 class="reveal">${escapeHtml(day.title)}</h2>
          <p class="day-summary reveal">${escapeHtml(day.summary)}</p>
          <div class="day-stats reveal"><div><small>Distance</small><b>${day.distance} <em>km</em></b></div><div><small>Driving</small><b>${day.drive}</b></div><div><small>Departure</small><b>${day.depart}</b></div><div><small>Arrival</small><b>${day.arrive}</b></div></div>
        </header>
        <ol class="run-sheet">
          ${day.stops.map((stop,index) => `
            <li class="route-stop reveal${stop.pass?' is-pass':''}${stop.end?' is-end':''}" data-day="${day.day}" data-stop="${index}">
              <button class="stop-route" type="button" aria-label="Show route progress to ${escapeHtml(stop.name)}">
                <time class="stop-time">${stop.time}</time>
                <span class="stop-copy"><span class="stop-type">${escapeHtml(stop.type)}</span><span class="stop-name">${escapeHtml(stop.name)}</span><span class="stop-ko" lang="ko">${escapeHtml(stop.ko)}</span>${stop.note?`<span class="stop-note">${escapeHtml(stop.note)}</span>`:''}</span>
              </button>
              <a class="stop-map" href="${kakaoDestinationUrl(stop.link,KAKAO_ROUTE_NAMES[day.day][index])}" target="_blank" rel="noopener" title="Set as destination" aria-label="Set ${escapeHtml(KAKAO_ROUTE_NAMES[day.day][index])} as destination in Kakao Map">${destinationIcon}</a>
            </li>`).join('')}
        </ol>
        <p class="day-note reveal"><b>Day character:</b> ${escapeHtml(day.note)}</p>
      </article>`).join('');
  }

  function renderPartners() {
    const wall = document.getElementById('partnerWall');
    wall.innerHTML = PARTNERS.map(partner => `
      <article class="partner-card${partner.dark?' is-dark':''}${partner.photo?' has-photo':''}">
        <div class="partner-logo">${partner.logo?`<img src="${partner.logo}" alt="${escapeHtml(partner.alt)}" loading="lazy">`:`<span class="partner-wordmark">${partner.wordmark}</span>`}</div>
        <h3>${escapeHtml(partner.name)}</h3>
      </article>`).join('');
  }

  renderDays();
  renderPartners();

  function setupCalendarLinks() {
    const title = 'Korea Grand Tour 2026 — Official Participant Briefing';
    const location = 'Porsche Studio Cheongdam, Cheongdam Square G 1F, 420 Dosan-daero, Gangnam-gu, Seoul';
    const details = 'Official participant briefing and welcome kit handover for Korea Grand Tour 2026.';
    const google = new URL('https://calendar.google.com/calendar/render');
    google.search = new URLSearchParams({action:'TEMPLATE',text:title,dates:'20260801T150000/20260801T160000',details,location,ctz:'Asia/Seoul'});
    const outlook = new URL('https://outlook.live.com/calendar/0/deeplink/compose');
    outlook.search = new URLSearchParams({path:'/calendar/action/compose',rru:'addevent',subject:title,startdt:'2026-08-01T15:00:00+09:00',enddt:'2026-08-01T16:00:00+09:00',body:details,location});
    document.querySelector('[data-calendar="google"]')?.setAttribute('href',google.href);
    document.querySelector('[data-calendar="outlook"]')?.setAttribute('href',outlook.href);
  }

  setupCalendarLinks();

  function kakaoNamedRouteUrl(stops,names) {
    const points = stops.map((stop,index) => `${encodeURIComponent(names[index])},${Number(stop.lat)},${Number(stop.lng)}`);
    return `https://map.kakao.com/link/by/car/${points.join('/')}`;
  }

  function buildDayRouteParts(stops,names) {
    if (stops.length <= 7) return [{start:0,end:stops.length-1,stops,names}];
    const split = Math.ceil((stops.length-1)/2);
    const parts = [
      {start:0,end:split,stops:stops.slice(0,split+1),names:names.slice(0,split+1)},
      {start:split,end:stops.length-1,stops:stops.slice(split),names:names.slice(split)}
    ];
    if (parts.some(part => part.stops.length > 7)) throw new Error('Kakao route exceeds the five-waypoint limit');
    return parts;
  }

  function hydrateDayRouteLinks(data) {
    Object.entries(data.days || {}).forEach(([dayKey,info]) => {
      const dayCopy = DAYS[Number(dayKey)-1];
      const panel = document.querySelector(`[data-day-route="${dayKey}"]`);
      const actions = panel?.querySelector('[data-day-route-actions]');
      const summary = panel?.querySelector('[data-day-route-summary]');
      if (!panel || !actions || !dayCopy || !Array.isArray(info.stops)) return;
      if (dayCopy.stops.length !== info.stops.length) throw new Error(`Day ${dayKey} route copy and coordinates do not match`);
      const placeNames = KAKAO_ROUTE_NAMES[dayKey];
      if (!placeNames || placeNames.length !== info.stops.length) throw new Error(`Day ${dayKey} Kakao place names do not match`);
      const parts = buildDayRouteParts(info.stops,placeNames);
      actions.innerHTML = parts.map((part,index) => {
        const href = kakaoNamedRouteUrl(part.stops,part.names);
        const label = parts.length === 1 ? 'Open full day route' : `Open route ${String.fromCharCode(65+index)}`;
        const from = dayCopy.stops[part.start].name;
        const to = dayCopy.stops[part.end].name;
        const waypointCount = Math.max(0,part.stops.length-2);
        return `<a class="day-route-action" href="${href}" target="_blank" rel="noopener" data-route-part="${index+1}" data-route-points="${part.stops.length}" data-route-waypoints="${waypointCount}" data-route-start="${escapeHtml(part.names[0])}" data-route-end="${escapeHtml(part.names.at(-1))}" aria-label="${escapeHtml(label)}, ${escapeHtml(from)} to ${escapeHtml(to)}, in Kakao Map"><span class="day-route-leg">${escapeHtml(label)}</span><strong>${escapeHtml(from)} <i>→</i> ${escapeHtml(to)}</strong><small>${part.stops.length} named places · ${waypointCount} waypoint${waypointCount===1?'':'s'}</small>${routeIcon}</a>`;
      }).join('');
      summary.textContent = parts.length === 1
        ? `All ${info.stops.length} places in one Kakao route.`
        : `All ${info.stops.length} places in routes A + B, split at ${dayCopy.stops[parts[0].end].name}.`;
      panel.classList.remove('is-loading');
    });
  }

  function markDayRoutesUnavailable() {
    document.querySelectorAll('[data-day-route]').forEach(panel => {
      const summary = panel.querySelector('[data-day-route-summary]');
      const actions = panel.querySelector('[data-day-route-actions]');
      if (summary) summary.textContent = 'Use the individual destination buttons below.';
      if (actions) actions.innerHTML = '<span class="day-route-preparing">Route unavailable</span>';
      panel.classList.remove('is-loading');
    });
  }

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const siteNav = document.getElementById('siteNav');
  const progress = document.getElementById('scrollProgress');
  const heroImage = document.getElementById('heroImage');
  const finishImage = document.querySelector('.finish-interlude>img');
  let scrollTicking = false;

  function updateScrollEffects() {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    siteNav.classList.toggle('is-solid', scrollY > 60);
    if (!reducedMotion.matches) {
      heroImage.style.transform = `scale(1.04) translateY(${Math.min(scrollY * .08, 70)}px)`;
      if (finishImage) {
        const rect = finishImage.parentElement.getBoundingClientRect();
        const offset = Math.max(-1, Math.min(1, (innerHeight / 2 - (rect.top + rect.height / 2)) / innerHeight));
        finishImage.style.transform = `translateY(${offset * 28}px) scale(1.04)`;
      }
    }
    syncRouteStory();
    scrollTicking = false;
  }

  addEventListener('scroll', () => {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(updateScrollEffects);
    }
  }, {passive:true});

  document.getElementById('printRoadbook').addEventListener('click', () => print());
  document.querySelector('[data-scroll-top]').addEventListener('click', () => scrollTo({top:0,behavior:reducedMotion.matches?'auto':'smooth'}));

  document.querySelectorAll('.manifesto-track span').forEach(item => { item.textContent += ` ${item.textContent}`; });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:.08,rootMargin:'0px 0px -8%'});
  document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));

  const PACK_KEY = 'kgt-2026-roadbook-pack-v1';
  const packItems = [...document.querySelectorAll('.pack-item')];
  let packed = new Set();
  try { packed = new Set(JSON.parse(localStorage.getItem(PACK_KEY) || '[]')); } catch (_) {}
  function updatePack() {
    packItems.forEach(item => {
      const done = packed.has(item.dataset.pack);
      item.classList.toggle('is-packed', done);
      item.setAttribute('aria-pressed', String(done));
    });
    document.getElementById('packCount').textContent = `${packed.size} / ${packItems.length}`;
    try { localStorage.setItem(PACK_KEY, JSON.stringify([...packed])); } catch (_) {}
  }
  packItems.forEach(item => item.addEventListener('click', () => {
    packed.has(item.dataset.pack) ? packed.delete(item.dataset.pack) : packed.add(item.dataset.pack);
    updatePack();
  }));
  document.getElementById('resetPack').addEventListener('click', () => { packed.clear(); updatePack(); });
  updatePack();

  const mapShell = document.getElementById('mapShell');
  const mapPortal = document.getElementById('mapPortal');
  const routeExperience = document.getElementById('route-map');
  const mapTitle = document.getElementById('mapTitle');
  const mapSubtitle = document.getElementById('mapSubtitle');
  const mapMetrics = document.getElementById('mapMetrics');
  const mapActiveStop = document.getElementById('mapActiveStop');
  const mapLoading = document.getElementById('mapLoading');
  const mapControls = [...document.querySelectorAll('.map-controls button')];
  const routeCanvas = document.getElementById('routeCanvas');
  const routeContext = routeCanvas.getContext('2d');
  const routeCar = document.getElementById('routeCar');
  let routeData;
  let kakaoMap;
  let routeModels = {};
  let activeDay = 'all';
  let activeStop = null;
  let routeProgress = 1;
  let routeAnimation = 0;
  let mapResizeTimer;
  let pendingTappedProgress = null;
  let mapReady = false;
  let routeIntroPlayed = false;
  let routeIntroTimer;
  let routeStoryUnlockTimer;
  let routeStoryLocked = false;

  function unlockRouteStory({sync=true}={}) {
    clearTimeout(routeStoryUnlockTimer);
    routeStoryLocked = false;
    if (sync) syncRouteStory();
  }

  function playRouteIntro() {
    if (!mapReady || activeDay !== 'all' || routeIntroPlayed || !routeModels['1']?.screen.length) return;
    routeIntroPlayed = true;
    routeStoryLocked = true;
    if (reducedMotion.matches) {
      routeProgress = 1;
      drawRouteScene();
      routeStoryUnlockTimer = setTimeout(unlockRouteStory,800);
      return;
    }
    routeProgress = 0;
    drawRouteScene();
    clearTimeout(routeIntroTimer);
    routeIntroTimer = setTimeout(() => {
      if (activeDay === 'all') animateRouteTo(1,1500);
      routeStoryUnlockTimer = setTimeout(unlockRouteStory,1550);
    },620);
  }

  function introduceRoute() {
    if (routeExperience.classList.contains('is-introduced')) return;
    routeExperience.classList.add('is-introduced');
    routeIntroObserver.disconnect();
    removeEventListener('scroll',maybeIntroduceRoute);
    playRouteIntro();
  }

  function maybeIntroduceRoute() {
    const mapRect = mapPortal.getBoundingClientRect();
    const routeRect = routeExperience.getBoundingClientRect();
    const mapIsEntering = mapRect.top < innerHeight*.88 && mapRect.bottom > 0;
    const mapWasPassed = mapRect.bottom <= 0 && routeRect.bottom > 0;
    if (mapIsEntering || mapWasPassed) introduceRoute();
  }

  const routeIntroObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) introduceRoute();
  },{threshold:0,rootMargin:'0px 0px -12% 0px'});
  routeIntroObserver.observe(mapPortal);
  addEventListener('scroll',maybeIntroduceRoute,{passive:true});
  requestAnimationFrame(maybeIntroduceRoute);

  function loadKakao() {
    return new Promise((resolve,reject) => {
      if (window.kakao?.maps) { window.kakao.maps.load(resolve); return; }
      const script = document.createElement('script');
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fd286a5032839a83ebfc08e8f5aa69db';
      const timeout = setTimeout(() => reject(new Error('Kakao Maps timed out')),12000);
      script.onload = () => {
        if (!window.kakao?.maps?.load) {
          clearTimeout(timeout);
          reject(new Error('Kakao Maps failed to initialize'));
          return;
        }
        window.kakao.maps.load(() => { clearTimeout(timeout); resolve(); });
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function sampledGeometry(points,max=1400) {
    const count = Math.min(points.length,max);
    if (count < 2) return [];
    const step = (points.length - 1) / (count - 1);
    return Array.from({length:count},(_,index) => {
      const sourceIndex = Math.round(index * step);
      return {lat:points[sourceIndex][0],lng:points[sourceIndex][1],t:sourceIndex/(points.length-1)};
    });
  }

  function buildRouteModels() {
    routeModels = {};
    Object.entries(routeData.days).forEach(([key,info]) => {
      let cursor = 0;
      const stopProgress = info.stops.map(stop => {
        let bestIndex = cursor;
        let bestDistance = Infinity;
        for (let index=cursor; index<info.geometry.length; index+=1) {
          const point = info.geometry[index];
          const latDistance = point[0]-stop.lat;
          const lngDistance = (point[1]-stop.lng)*Math.cos(stop.lat*Math.PI/180);
          const distance = latDistance*latDistance+lngDistance*lngDistance;
          if (distance < bestDistance) { bestDistance = distance; bestIndex = index; }
        }
        cursor = bestIndex;
        return bestIndex/Math.max(1,info.geometry.length-1);
      });
      routeModels[key] = {
        samples:sampledGeometry(info.geometry,1200),
        stops:info.stops,
        stopProgress,
        screen:[],
        stopScreen:[]
      };
    });
  }

  function dayKeys(day) { return day === 'all' ? ['1','2','3','4'] : [String(day)]; }

  function updateMapCopy(day) {
    if (day === 'all') {
      mapTitle.textContent = 'The full journey';
      mapSubtitle.textContent = 'Seoul → Gongju → Jeonju → Damyang → Busan → Ulsan → Inje → Yangyang';
      mapMetrics.innerHTML = '<span>1,427 km</span><span>4 days</span>';
      if (!activeStop) mapActiveStop.innerHTML = '<small>Full itinerary</small><strong>28 waypoints across Korea</strong>';
      return;
    }
    const dayCopy = DAYS[Number(day)-1];
    mapTitle.textContent = `Day ${dayCopy.day} · ${dayCopy.title}`;
    mapSubtitle.textContent = dayCopy.summary;
    mapMetrics.innerHTML = `<span>${dayCopy.distance} km</span><span>${dayCopy.drive}</span>`;
  }

  function fitMap(day) {
    if (!kakaoMap || !routeData) return;
    const bounds = new kakao.maps.LatLngBounds();
    dayKeys(day).forEach(key => routeData.days[key].geometry.forEach(point => bounds.extend(new kakao.maps.LatLng(point[0],point[1]))));
    const side = innerWidth < 720 ? 28 : 54;
    kakaoMap.setBounds(bounds,116,side,88,side);
  }

  function resizeRouteCanvas() {
    const rect = routeCanvas.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1,2);
    const width = Math.max(1,Math.round(rect.width*dpr));
    const height = Math.max(1,Math.round(rect.height*dpr));
    if (routeCanvas.width !== width || routeCanvas.height !== height) {
      routeCanvas.width = width;
      routeCanvas.height = height;
    }
    routeContext.setTransform(dpr,0,0,dpr,0,0);
    return rect;
  }

  function refreshRouteProjection() {
    if (!kakaoMap || !mapReady) return;
    const projection = kakaoMap.getProjection();
    dayKeys(activeDay).forEach(key => {
      const model = routeModels[key];
      model.screen = model.samples.map(point => {
        const screen = projection.containerPointFromCoords(new kakao.maps.LatLng(point.lat,point.lng));
        return {x:screen.x,y:screen.y,t:point.t};
      });
      model.stopScreen = model.stops.map(stop => {
        const screen = projection.containerPointFromCoords(new kakao.maps.LatLng(stop.lat,stop.lng));
        return {x:screen.x,y:screen.y};
      });
    });
    drawRouteScene();
    if (routeExperience.classList.contains('is-introduced')) playRouteIntro();
  }

  function traceRoute(points,progress=1) {
    if (!points.length) return;
    routeContext.beginPath();
    routeContext.moveTo(points[0].x,points[0].y);
    for (let index=1; index<points.length; index+=1) {
      const previous = points[index-1];
      const point = points[index];
      if (point.t <= progress) {
        routeContext.lineTo(point.x,point.y);
        continue;
      }
      if (progress > previous.t) {
        const span = Math.max(.000001,point.t-previous.t);
        const ratio = Math.max(0,Math.min(1,(progress-previous.t)/span));
        routeContext.lineTo(previous.x+(point.x-previous.x)*ratio,previous.y+(point.y-previous.y)*ratio);
      }
      break;
    }
  }

  function pointOnRoute(points,progress) {
    if (!points.length) return null;
    for (let index=1; index<points.length; index+=1) {
      const previous = points[index-1];
      const point = points[index];
      if (point.t < progress) continue;
      const span = Math.max(.000001,point.t-previous.t);
      const ratio = Math.max(0,Math.min(1,(progress-previous.t)/span));
      const x = previous.x+(point.x-previous.x)*ratio;
      const y = previous.y+(point.y-previous.y)*ratio;
      return {x,y,angle:Math.atan2(point.y-previous.y,point.x-previous.x)*180/Math.PI+90};
    }
    const last = points.at(-1);
    const previous = points.at(-2) || last;
    return {x:last.x,y:last.y,angle:Math.atan2(last.y-previous.y,last.x-previous.x)*180/Math.PI+90};
  }

  function sixDirectionAngle(angle) {
    const step = 360/6;
    return Math.round(angle/step)*step;
  }

  function strokeRoute(points,progress,color,overview) {
    if (points.length < 2) return;
    routeContext.lineJoin = 'round';
    routeContext.lineCap = 'round';
    routeContext.setLineDash(overview ? [2,7] : [3,8]);
    routeContext.lineWidth = overview ? 3 : 4;
    routeContext.strokeStyle = overview ? 'rgba(18,19,19,.48)' : 'rgba(18,19,19,.42)';
    traceRoute(points,1);
    routeContext.stroke();
    routeContext.setLineDash([]);
    routeContext.lineWidth = overview ? 8 : 11;
    routeContext.strokeStyle = 'rgba(6,6,6,.72)';
    traceRoute(points,progress);
    routeContext.stroke();
    routeContext.lineWidth = overview ? 4 : 6;
    routeContext.strokeStyle = color;
    traceRoute(points,progress);
    routeContext.stroke();
  }

  function drawRouteScene() {
    if (!mapReady) return;
    const rect = resizeRouteCanvas();
    routeContext.clearRect(0,0,rect.width,rect.height);
    const overview = activeDay === 'all';
    dayKeys(activeDay).forEach(key => {
      const model = routeModels[key];
      if (!model.screen.length) return;
      const progressValue = routeProgress;
      strokeRoute(model.screen,progressValue,DAY_COLORS[key],overview);
      model.stopScreen.forEach((point,index) => {
        const completed = model.stopProgress[index] <= progressValue+.001;
        const selected = !overview && activeStop?.day===key && activeStop.index===index;
        routeContext.beginPath();
        routeContext.arc(point.x,point.y,selected?8:overview?5:6,0,Math.PI*2);
        routeContext.fillStyle = completed ? DAY_COLORS[key] : '#f7f5ef';
        routeContext.fill();
        routeContext.lineWidth = selected?4:2;
        routeContext.strokeStyle = selected?'#fff':'#171818';
        routeContext.stroke();
      });
    });
    if (!overview) {
      const carPosition = pointOnRoute(routeModels[activeDay].screen,routeProgress);
      if (carPosition) {
        routeCar.hidden = false;
        routeCar.style.transform = `translate3d(${carPosition.x-14}px,${carPosition.y-24}px,0) rotate(${sixDirectionAngle(carPosition.angle)}deg)`;
      }
    } else {
      routeCar.hidden = true;
    }
    routeExperience.dataset.activeDay = activeDay;
    routeExperience.dataset.activeStop = activeStop ? String(activeStop.index) : '';
    routeExperience.dataset.routeProgress = routeProgress.toFixed(3);
  }

  function setActiveDay(day,{progressValue,fit=true}={}) {
    if (!kakaoMap || !routeData) return;
    cancelAnimationFrame(routeAnimation);
    activeDay = String(day);
    activeStop = null;
    routeProgress = progressValue ?? (activeDay==='all'?1:0);
    mapControls.forEach(control => control.setAttribute('aria-pressed',String(control.dataset.mapDay===activeDay)));
    updateMapCopy(activeDay);
    mapActiveStop.innerHTML = activeDay==='all' ? '<small>Full itinerary</small><strong>28 waypoints across Korea</strong>' : `<small>Day ${activeDay}</small><strong>${DAYS[Number(activeDay)-1].stops.length} route points</strong>`;
    routeContext.clearRect(0,0,routeCanvas.width,routeCanvas.height);
    if (fit) fitMap(activeDay); else refreshRouteProjection();
  }

  function animateRouteTo(target,duration=780) {
    cancelAnimationFrame(routeAnimation);
    const safeTarget = Math.max(0,Math.min(1,target));
    if (reducedMotion.matches) {
      routeProgress = safeTarget;
      drawRouteScene();
      return;
    }
    const start = routeProgress;
    const started = performance.now();
    const frame = now => {
      const raw = Math.min(1,(now-started)/duration);
      const eased = 1-Math.pow(1-raw,3);
      routeProgress = start+(safeTarget-start)*eased;
      drawRouteScene();
      if (raw < 1) routeAnimation = requestAnimationFrame(frame);
    };
    routeAnimation = requestAnimationFrame(frame);
  }

  function setStopSelection(day,index) {
    const key = String(day);
    if (activeStop?.day===key && activeStop.index===index) return;
    document.querySelectorAll('.route-stop').forEach(stop => {
      const active = stop.dataset.day===key && Number(stop.dataset.stop)===index;
      stop.classList.toggle('is-active',active);
      active ? stop.setAttribute('aria-current','step') : stop.removeAttribute('aria-current');
    });
    activeStop = {day:key,index};
    const scheduleStop = DAYS[Number(key)-1].stops[index];
    mapActiveStop.innerHTML = `<small>Day ${key} · ${scheduleStop.time}</small><strong>${escapeHtml(scheduleStop.name)}</strong>`;
  }

  function activateStop(day,index,{animate=true}={}) {
    const key = String(day);
    if (!kakaoMap || !routeData) return;
    unlockRouteStory({sync:false});
    const target = routeModels[key].stopProgress[index];
    if (activeDay !== key) {
      setActiveDay(key,{progressValue:0,fit:false});
      pendingTappedProgress = {target,animate};
    } else {
      animate ? animateRouteTo(target) : (routeProgress=target,drawRouteScene());
    }
    setStopSelection(key,index);
  }

  function clearScheduleStopSelection() {
    document.querySelectorAll('.route-stop.is-active,[aria-current="step"]').forEach(stop => {
      stop.classList.remove('is-active');
      stop.removeAttribute('aria-current');
    });
  }

  mapControls.forEach(control => control.addEventListener('click', () => {
    const day = control.dataset.mapDay;
    unlockRouteStory({sync:false});
    clearScheduleStopSelection();
    setActiveDay(day,{progressValue:1,fit:false});
    const target = day==='all' ? document.getElementById('route-map') : document.getElementById(`day${day}`);
    target?.scrollIntoView({behavior:reducedMotion.matches?'auto':'smooth',block:'start'});
  }));

  document.querySelectorAll('.stop-route').forEach(button => button.addEventListener('click', () => {
    const stop = button.closest('.route-stop');
    activateStop(stop.dataset.day,Number(stop.dataset.stop),{animate:true});
  }));

  const routeDataPromise = fetch('route-data.json')
    .then(response => { if (!response.ok) throw new Error('Route data unavailable'); return response.json(); })
    .then(data => {
      routeData = data;
      hydrateDayRouteLinks(data);
      return data;
    })
    .catch(error => {
      markDayRoutesUnavailable();
      throw error;
    });

  Promise.all([
    routeDataPromise,
    loadKakao()
  ]).then(([data]) => {
    routeData = data;
    buildRouteModels();
    kakaoMap = new kakao.maps.Map(document.getElementById('roadbookKakaoMap'),{center:new kakao.maps.LatLng(36.25,127.75),level:12,draggable:false,scrollwheel:false,disableDoubleClickZoom:true});
    kakaoMap.setDraggable(false);
    kakaoMap.setZoomable(false);
    kakaoMap.setKeyboardShortcuts(false);
    kakao.maps.event.addListener(kakaoMap,'idle',() => {
      refreshRouteProjection();
      if (pendingTappedProgress) {
        const pending = pendingTappedProgress;
        pendingTappedProgress = null;
        pending.animate ? animateRouteTo(pending.target) : (routeProgress=pending.target,drawRouteScene());
      } else drawRouteScene();
    });
    mapReady = true;
    setActiveDay('all',{progressValue:1,fit:true});
    mapLoading.classList.add('is-loaded');
    if (routeExperience.classList.contains('is-introduced')) playRouteIntro();
    else syncRouteStory();
  }).catch(error => {
    console.warn('KGT map unavailable:',error);
    mapLoading.innerHTML = 'Map unavailable · use the Kakao links in the roadbook';
  });

  function syncRouteStory() {
    if (!mapReady || !routeData || routeStoryLocked) return;
    const routeRect = routeExperience.getBoundingClientRect();
    if (routeRect.top > innerHeight*.72 || routeRect.bottom < innerHeight*.18) return;
    const anchor = innerHeight*(innerWidth < 1050 ? .78 : .5);
    const chapters = [...document.querySelectorAll('.day-chapter')];
    const chapter = chapters.find(item => {
      const rect = item.getBoundingClientRect();
      return rect.top <= anchor && rect.bottom > anchor;
    });
    if (!chapter) {
      const first = chapters[0]?.getBoundingClientRect();
      if (first && first.top > anchor && activeDay !== 'all') {
        clearScheduleStopSelection();
        setActiveDay('all',{progressValue:1,fit:false});
      }
      return;
    }
    const key = chapter.dataset.day;
    if (activeDay !== key) {
      clearScheduleStopSelection();
      setActiveDay(key,{progressValue:0,fit:false});
    }
    const stops = [...chapter.querySelectorAll('.route-stop')];
    if (!stops.length) return;
    const centers = stops.map(stop => {
      const rect = stop.getBoundingClientRect();
      return rect.top+rect.height/2;
    });
    const model = routeModels[key];
    let target = 0;
    if (anchor >= centers.at(-1)) {
      target = 1;
    } else if (anchor > centers[0]) {
      for (let index=1; index<centers.length; index+=1) {
        if (anchor > centers[index]) continue;
        const ratio = (anchor-centers[index-1])/Math.max(1,centers[index]-centers[index-1]);
        target = model.stopProgress[index-1]+(model.stopProgress[index]-model.stopProgress[index-1])*ratio;
        break;
      }
    }
    cancelAnimationFrame(routeAnimation);
    routeProgress = Math.max(0,Math.min(1,target));
    const nearest = centers.reduce((best,center,index) => Math.abs(center-anchor)<best.distance?{index,distance:Math.abs(center-anchor)}:best,{index:0,distance:Infinity});
    if (nearest.distance < innerHeight*.24) setStopSelection(key,nearest.index);
    else {
      activeStop = null;
      clearScheduleStopSelection();
      mapActiveStop.innerHTML = `<small>Day ${key}</small><strong>${DAYS[Number(key)-1].stops.length} route points</strong>`;
    }
    drawRouteScene();
  }

  const mapResizeObserver = new ResizeObserver(() => {
    if (!kakaoMap) return;
    clearTimeout(mapResizeTimer);
    mapResizeTimer = setTimeout(() => {
      kakaoMap.relayout();
      fitMap('all');
    },100);
  });
  mapResizeObserver.observe(mapShell);

  reducedMotion.addEventListener?.('change', () => { updateScrollEffects(); drawRouteScene(); });
  updateScrollEffects();
})();
