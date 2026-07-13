(() => {
  'use strict';

  const DAY_COLORS = {1:'#1476e5', 2:'#f25725', 3:'#292c2f', 4:'#aa9b67'};
  const DAYS = [
    {
      day:1,
      date:'Friday · 14 August',
      title:'Baekje heritage to Jeonju',
      summary:'From Seoul to the royal history of Gongju and Buyeo, then deeper into the countryside for garden coffee, Yongdamho roads and a quiet hanok arrival.',
      distance:'338.3', drive:'5h 55', depart:'10:00', arrive:'19:20',
      image:'assets/day-1-heritage.jpg', imageAlt:'Traditional Korean temple architecture beneath a clear sky', imageTag:'History · countryside · lake roads',
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
      image:'assets/day-2-water.jpg', imageAlt:'Green hills surrounding a calm Korean reservoir', imageTag:'Bamboo · hairpins · car culture',
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
      image:'assets/hero-road.jpg', imageAlt:'Cars travelling toward mountains at sunset', imageTag:'Mountain Korea · geology · motorsport',
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
      image:'assets/finish-sea.jpg', imageAlt:'Silhouettes walking beside the sea at sunset', imageTag:'Track · valley roads · East Sea finish',
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

  const mapIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/></svg>';
  const escapeHtml = value => String(value || '').replace(/[&<>"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));

  function renderDays() {
    const root = document.getElementById('dayChapters');
    root.innerHTML = DAYS.map(day => `
      <article class="day-chapter" id="day${day.day}" data-day="${day.day}" data-map-view="${day.day}">
        <div class="day-image reveal"><img src="${day.image}" alt="${escapeHtml(day.imageAlt)}" loading="lazy"><span class="day-image-tag">${escapeHtml(day.imageTag)}</span><span class="day-image-number">0${day.day}</span></div>
        <header>
          <span class="day-label">Day 0${day.day} · ${escapeHtml(day.date)}</span>
          <h2 class="reveal">${escapeHtml(day.title)}</h2>
          <p class="day-summary reveal">${escapeHtml(day.summary)}</p>
          <div class="day-stats reveal"><div><small>Distance</small><b>${day.distance} <em>km</em></b></div><div><small>Driving</small><b>${day.drive}</b></div><div><small>Departure</small><b>${day.depart}</b></div><div><small>Arrival</small><b>${day.arrive}</b></div></div>
        </header>
        <ol class="run-sheet">
          ${day.stops.map((stop,index) => `
            <li class="route-stop reveal${stop.pass?' is-pass':''}${stop.end?' is-end':''}" data-day="${day.day}" data-stop="${index}">
              <time class="stop-time">${stop.time}</time>
              <div><span class="stop-type">${escapeHtml(stop.type)}</span><h3 class="stop-name">${escapeHtml(stop.name)}</h3><span class="stop-ko" lang="ko">${escapeHtml(stop.ko)}</span>${stop.note?`<p class="stop-note">${escapeHtml(stop.note)}</p>`:''}</div>
              <a class="stop-map" href="${stop.link}" target="_blank" rel="noopener" aria-label="Open ${escapeHtml(stop.name)} in Kakao Maps">${mapIcon}</a>
            </li>`).join('')}
        </ol>
        <p class="day-note reveal"><b>Day character:</b> ${escapeHtml(day.note)}</p>
      </article>`).join('');
  }

  renderDays();

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
    syncMapDock();
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

  document.querySelectorAll('.manifesto-track span,.kit-marquee span').forEach(item => { item.textContent += ` ${item.textContent}`; });

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
  const journey = document.getElementById('journey');
  const finish = document.querySelector('.finish-interlude');
  const mapTitle = document.getElementById('mapTitle');
  const mapSubtitle = document.getElementById('mapSubtitle');
  const mapMetrics = document.getElementById('mapMetrics');
  const mapActiveStop = document.getElementById('mapActiveStop');
  const mapLoading = document.getElementById('mapLoading');
  const mapControls = [...document.querySelectorAll('.map-controls button')];
  let routeData;
  let kakaoMap;
  let activeDay = 'all';
  let activeStop = null;
  let routeLines = [];
  let markerOverlays = [];
  let routeAnimation = 0;
  let mapResizeTimer;
  let pendingMapRefit = false;
  let mapDockState = 'static';

  function loadKakao() {
    return new Promise((resolve,reject) => {
      if (window.kakao?.maps) { window.kakao.maps.load(resolve); return; }
      const script = document.createElement('script');
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fd286a5032839a83ebfc08e8f5aa69db';
      script.onload = () => window.kakao.maps.load(resolve);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function sampledGeometry(points,max=1500) {
    if (points.length <= max) return points;
    const step = (points.length - 1) / (max - 1);
    return Array.from({length:max},(_,index) => points[Math.round(index * step)]);
  }

  function clearMap() {
    cancelAnimationFrame(routeAnimation);
    routeLines.forEach(line => line.setMap(null));
    markerOverlays.forEach(marker => marker.overlay.setMap(null));
    routeLines = [];
    markerOverlays = [];
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

  function makeMarker(stop,key,index) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'kgt-marker';
    button.style.setProperty('--marker-color',DAY_COLORS[key]);
    button.setAttribute('aria-label',`${index+1}. ${stop.name}`);
    button.innerHTML = `<span><b>${index+1}</b></span><em class="kgt-marker-label">${escapeHtml(stop.name)}</em>`;
    button.addEventListener('click', () => window.open(`https://map.kakao.com/link/map/${encodeURIComponent(stop.nameKo || stop.name)},${stop.lat},${stop.lng}`,'_blank','noopener'));
    const overlay = new kakao.maps.CustomOverlay({position:new kakao.maps.LatLng(stop.lat,stop.lng),content:button,yAnchor:0,zIndex:8});
    overlay.setMap(kakaoMap);
    markerOverlays.push({day:String(key),index,element:button,overlay,stop});
  }

  function fitMap(day) {
    if (!kakaoMap || !routeData) return;
    const bounds = new kakao.maps.LatLngBounds();
    dayKeys(day).forEach(key => routeData.days[key].geometry.forEach(point => bounds.extend(new kakao.maps.LatLng(point[0],point[1]))));
    kakaoMap.setBounds(bounds,70,70,70,70);
  }

  function renderMap(day,animate=true) {
    if (!kakaoMap || !routeData) return;
    activeDay = String(day);
    activeStop = null;
    clearMap();
    const keys = dayKeys(activeDay);
    const animated = [];
    keys.forEach(key => {
      const info = routeData.days[key];
      const geometry = sampledGeometry(info.geometry,activeDay==='all'?900:1700);
      const path = geometry.map(point => new kakao.maps.LatLng(point[0],point[1]));
      const outline = new kakao.maps.Polyline({path,strokeWeight:activeDay==='all'?7:11,strokeColor:'#060606',strokeOpacity:.58,strokeStyle:'solid'});
      outline.setMap(kakaoMap); routeLines.push(outline);
      const line = new kakao.maps.Polyline({path:animate&&!reducedMotion.matches?path.slice(0,2):path,strokeWeight:activeDay==='all'?4:6,strokeColor:DAY_COLORS[key],strokeOpacity:.92,strokeStyle:'solid'});
      line.setMap(kakaoMap); routeLines.push(line);
      if (animate && !reducedMotion.matches) animated.push({line,path});
      info.stops.forEach((stop,index) => makeMarker(stop,key,index));
    });
    mapControls.forEach(control => control.setAttribute('aria-pressed',String(control.dataset.mapDay===activeDay)));
    updateMapCopy(activeDay);
    mapActiveStop.innerHTML = activeDay==='all' ? '<small>Full itinerary</small><strong>28 waypoints across Korea</strong>' : `<small>Day ${activeDay}</small><strong>${DAYS[Number(activeDay)-1].stops.length} route points</strong>`;
    fitMap(activeDay);
    if (animated.length) {
      const started = performance.now();
      const draw = now => {
        const raw = Math.min(1,(now-started)/1050);
        const eased = 1-Math.pow(1-raw,3);
        animated.forEach(({line,path}) => line.setPath(path.slice(0,Math.max(2,Math.round(path.length*eased)))));
        if (raw < 1) routeAnimation = requestAnimationFrame(draw);
      };
      routeAnimation = requestAnimationFrame(draw);
    }
  }

  function activateStop(day,index) {
    const key = String(day);
    document.querySelectorAll('.route-stop').forEach(stop => {
      const active = stop.dataset.day===key && Number(stop.dataset.stop)===index;
      stop.classList.toggle('is-active',active);
      active ? stop.setAttribute('aria-current','step') : stop.removeAttribute('aria-current');
    });
    if (!kakaoMap || !routeData) return;
    if (activeDay !== key) renderMap(key,false);
    activeStop = {day:key,index};
    markerOverlays.forEach(marker => marker.element.classList.toggle('is-active',marker.day===key && marker.index===index));
    const scheduleStop = DAYS[Number(key)-1].stops[index];
    mapActiveStop.innerHTML = `<small>Day ${key} · ${scheduleStop.time}</small><strong>${escapeHtml(scheduleStop.name)}</strong>`;
  }

  mapControls.forEach(control => control.addEventListener('click', () => {
    const day = control.dataset.mapDay;
    renderMap(day,true);
    const target = day==='all' ? document.getElementById('route-map') : document.getElementById(`day${day}`);
    target?.scrollIntoView({behavior:reducedMotion.matches?'auto':'smooth',block:'start'});
  }));

  Promise.all([
    fetch('route-data.json').then(response => { if (!response.ok) throw new Error('Route data unavailable'); return response.json(); }),
    loadKakao()
  ]).then(([data]) => {
    routeData = data;
    kakaoMap = new kakao.maps.Map(document.getElementById('roadbookKakaoMap'),{center:new kakao.maps.LatLng(36.25,127.75),level:12});
    kakaoMap.addControl(new kakao.maps.ZoomControl(),kakao.maps.ControlPosition.RIGHT);
    renderMap('all',true);
    mapLoading.classList.add('is-loaded');
    syncMapDock();
  }).catch(error => {
    console.warn('KGT map unavailable:',error);
    mapLoading.innerHTML = 'Map unavailable · use the Kakao links in the roadbook';
  });

  const stopObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => Math.abs(a.boundingClientRect.top-innerHeight*.45)-Math.abs(b.boundingClientRect.top-innerHeight*.45));
    if (visible[0]) activateStop(visible[0].target.dataset.day,Number(visible[0].target.dataset.stop));
  }, {threshold:.15,rootMargin:'-30% 0px -48%'});
  document.querySelectorAll('.route-stop').forEach(stop => stopObserver.observe(stop));

  const viewObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.dataset.mapView==='all' && activeDay!=='all') renderMap('all',false);
    });
  }, {threshold:.2});
  document.querySelectorAll('[data-map-view="all"]').forEach(item => viewObserver.observe(item));

  function relayoutMap(refit=true) {
    if (!kakaoMap) return;
    pendingMapRefit ||= refit;
    clearTimeout(mapResizeTimer);
    mapResizeTimer = setTimeout(() => {
      kakao.maps.event.trigger(kakaoMap,'resize');
      if (pendingMapRefit) fitMap(activeDay);
      pendingMapRefit = false;
    },110);
  }

  function setMapDockState(next) {
    if (mapDockState === next) return;
    mapDockState = next;
    relayoutMap(true);
  }

  function syncMapDock() {
    if (innerWidth < 1050 || reducedMotion.matches) {
      document.body.classList.remove('map-docked');
      mapShell.classList.remove('is-fixed','is-hidden');
      mapShell.removeAttribute('style');
      setMapDockState('static');
      return;
    }
    const nav = 84;
    const y = scrollY;
    const start = mapPortal.getBoundingClientRect().top+y-nav;
    const dockStart = start+innerHeight*.08;
    const dockEnd = start+innerHeight*.72;
    const end = finish.getBoundingClientRect().top+y-innerHeight*.88;
    if (y < start) {
      document.body.classList.remove('map-docked');
      mapShell.classList.remove('is-fixed','is-hidden');
      mapShell.removeAttribute('style');
      setMapDockState('static');
      return;
    }
    if (y >= end) {
      document.body.classList.remove('map-docked');
      mapShell.classList.add('is-fixed','is-hidden');
      setMapDockState('hidden');
      return;
    }
    const p = Math.max(0,Math.min(1,(y-dockStart)/(dockEnd-dockStart)));
    const gutter = Math.max(22,(innerWidth-1240)/2);
    const startWidth = innerWidth-gutter*2;
    const endWidth = Math.min(innerWidth*.43,600);
    const width = startWidth+(endWidth-startWidth)*p;
    const startHeight = innerHeight-nav-30;
    const endHeight = innerHeight-nav-28;
    const height = startHeight+(endHeight-startHeight)*p;
    mapShell.classList.add('is-fixed');
    mapShell.classList.remove('is-hidden');
    mapShell.style.width = `${width}px`;
    mapShell.style.height = `${height}px`;
    mapShell.style.right = `${gutter}px`;
    mapShell.style.borderRadius = `${22*p}px`;
    document.body.classList.toggle('map-docked',p>.76);
    setMapDockState(p>.98?'docked':'morphing');
    relayoutMap(false);
  }

  addEventListener('resize', () => { syncMapDock(); relayoutMap(true); }, {passive:true});
  reducedMotion.addEventListener?.('change', () => { syncMapDock(); updateScrollEffects(); });
  updateScrollEffects();
})();
