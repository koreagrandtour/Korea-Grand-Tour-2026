(() => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-count]").forEach((element) => {
    const target = Number(element.dataset.count || 0);
    if (prefersReduced) {
      element.textContent = String(target);
      return;
    }
    const start = performance.now();
    const duration = 1200;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = String(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });

  const revealNodes = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  }

  const routeRoot = document.querySelector("[data-route-map]");
  if (!routeRoot) return;

  const stops = [
    {
      city: "Seoul",
      km: 0,
      role: "Starting grid",
      description: "The meeting point: registration, briefing, first photos, and the moment the weekend becomes real.",
      activities: "Check-in, drivers briefing, convoy roll-out.",
      progress: 0
    },
    {
      city: "Inje",
      km: 120,
      role: "Performance chapter",
      description: "Mountain roads, track energy, crisp air, and the performance heartbeat of Phase One.",
      activities: "Mountain warm-up, track-side gathering, group photo roll-out.",
      progress: 22
    },
    {
      city: "Cheongdo",
      km: 330,
      role: "Countryside checkpoint",
      description: "Orchard roads and open scenery turn the first long transfer into a warm Korea chapter.",
      activities: "Checkpoint stamp, local snack stop, rolling photo set.",
      progress: 45
    },
    {
      city: "Ulsan",
      km: 390,
      role: "Coastal drive chapter",
      description: "The route turns toward the coast with blue air, wide roads, and a sharper visual rhythm.",
      activities: "Coastal regroup, car walkaround, evening arrival.",
      progress: 55
    },
    {
      city: "Damyang",
      km: 650,
      role: "Scenic reset",
      description: "Bamboo roads and slower scenery give the tour its green, cinematic middle breath.",
      activities: "Bamboo-road cruise, food stop, team photos.",
      progress: 78
    },
    {
      city: "Jeonju",
      km: 720,
      role: "Cultural headliner",
      description: "The finish shifts from road energy to food, old streets, and the shared memory of arriving together.",
      activities: "Food night, closing photos, final Phase One gathering.",
      progress: 100
    }
  ];

  const path = routeRoot.querySelector(".kgt-map-road-live");
  const car = routeRoot.querySelector(".kgt-map-car");
  const city = routeRoot.querySelector("[data-route-city]");
  const description = routeRoot.querySelector("[data-route-description]");
  const km = routeRoot.querySelector("[data-route-km]");
  const role = routeRoot.querySelector("[data-route-role]");
  const activities = routeRoot.querySelector("[data-route-activities]");
  const progress = routeRoot.querySelector(".kgt-route-progress span");
  const stopButtons = routeRoot.querySelector(".kgt-stop-buttons");
  const routeCount = routeRoot.querySelector("[data-route-count]");
  const stepNodes = document.querySelectorAll("[data-route-step]");
  const svgStops = routeRoot.querySelectorAll(".kgt-stop");
  const playButton = routeRoot.querySelector("[data-route-play]");
  const pathLength = path.getTotalLength();
  let activeIndex = -1;
  let targetProgress = 0;
  let currentProgress = 0;
  let rafId = null;

  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

  const setCarAt = (percent) => {
    const safePercent = clamp(percent / 100);
    const point = path.getPointAtLength(pathLength * safePercent);
    const nextPoint = path.getPointAtLength(pathLength * clamp(safePercent + 0.01));
    const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180 / Math.PI;
    car.setAttribute("transform", `translate(${point.x - 34} ${point.y - 18}) rotate(${angle})`);
  };

  const updateStopContent = (index) => {
    if (index === activeIndex) return;
    activeIndex = index;
    const stop = stops[index];
    city.textContent = stop.city;
    description.textContent = stop.description;
    km.textContent = `${stop.km} km`;
    role.textContent = stop.role;
    activities.textContent = stop.activities;
    if (routeCount) routeCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(stops.length).padStart(2, "0")}`;
    svgStops.forEach((node, nodeIndex) => node.classList.toggle("is-active", nodeIndex === index));
    stepNodes.forEach((node, nodeIndex) => node.classList.toggle("is-active", nodeIndex === index));
    if (stopButtons) {
      stopButtons.querySelectorAll("button").forEach((node, nodeIndex) => node.classList.toggle("is-active", nodeIndex === index));
    }
  };

  const nearestStopIndex = (percent) => stops.reduce((nearest, stop, index) => {
    const nearestDistance = Math.abs(stops[nearest].progress - percent);
    const distance = Math.abs(stop.progress - percent);
    return distance < nearestDistance ? index : nearest;
  }, 0);

  const renderProgress = (percent) => {
    const bounded = clamp(percent, 0, 100);
    path.style.strokeDashoffset = pathLength - (pathLength * bounded / 100);
    progress.style.width = `${bounded}%`;
    setCarAt(bounded);
    updateStopContent(nearestStopIndex(bounded));
  };

  const setStop = (index) => {
    targetProgress = stops[index].progress;
    renderProgress(targetProgress);
  };

  if (stopButtons) {
    stops.forEach((stop, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = stop.city;
      button.addEventListener("click", () => {
        setStop(index);
      });
      stopButtons.appendChild(button);
    });
  }

  svgStops.forEach((node, index) => {
    node.addEventListener("click", () => {
      setStop(index);
    });
  });

  const updateTargetFromScroll = () => {
    const rect = routeRoot.getBoundingClientRect();
    const total = Math.max(routeRoot.offsetHeight - window.innerHeight, 1);
    targetProgress = clamp((-rect.top) / total) * 100;
  };

  const animateRoute = () => {
    updateTargetFromScroll();
    if (prefersReduced) {
      currentProgress = targetProgress;
    } else {
      currentProgress += (targetProgress - currentProgress) * 0.13;
      if (Math.abs(targetProgress - currentProgress) < 0.06) currentProgress = targetProgress;
    }
    renderProgress(currentProgress);
    rafId = requestAnimationFrame(animateRoute);
  };

  window.addEventListener("scroll", updateTargetFromScroll, { passive: true });
  window.addEventListener("resize", updateTargetFromScroll);
  updateTargetFromScroll();
  renderProgress(0);
  rafId = requestAnimationFrame(animateRoute);

  if (playButton) playButton.addEventListener("click", () => setStop(Math.min(activeIndex + 1, stops.length - 1)));
})();
