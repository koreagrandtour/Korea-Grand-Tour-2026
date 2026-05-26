(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const canvas = document.getElementById("motion-field");
  const context = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let particles = [];
  let pointerX = 0;
  let pointerY = 0;

  const resizeCanvas = () => {
    width = canvas.width = Math.floor(window.innerWidth * window.devicePixelRatio);
    height = canvas.height = Math.floor(window.innerHeight * window.devicePixelRatio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    particles = Array.from({ length: Math.min(82, Math.floor(window.innerWidth / 18)) }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.18 + Math.random() * 0.52,
      radius: 1 + Math.random() * 2.4,
      hue: index % 3
    }));
  };

  const drawField = () => {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.x += particle.speed * window.devicePixelRatio;
      particle.y += Math.sin((particle.x + pointerX * 0.12) * 0.003) * 0.32;
      if (particle.x > width + 30) particle.x = -30;
      const colors = ["rgba(255,59,35,.34)", "rgba(6,60,157,.26)", "rgba(246,173,22,.28)"];
      context.beginPath();
      context.fillStyle = colors[particle.hue];
      context.arc(particle.x, particle.y + pointerY * 0.012, particle.radius * window.devicePixelRatio, 0, Math.PI * 2);
      context.fill();
    });
    if (!reducedMotion) requestAnimationFrame(drawField);
  };

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
  }, { passive: true });
  resizeCanvas();
  drawField();

  let audioContext = null;

  const getAudioContext = () => {
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") audioContext.resume();
    return audioContext;
  };

  const playEngineProfile = (profile = "turbo-four", duration = 1.8) => {
    const audio = getAudioContext();
    const now = audio.currentTime;
    const master = audio.createGain();
    const filter = audio.createBiquadFilter();
    const compressor = audio.createDynamicsCompressor();
    const profiles = {
      "turbo-four": { base: 82, peak: 178, pulse: 42, grit: 0.055, label: "Inline-four turbo" },
      "flat-six": { base: 96, peak: 232, pulse: 64, grit: 0.035, label: "Flat-six" },
      "v8": { base: 58, peak: 148, pulse: 31, grit: 0.075, label: "V8" },
      "luxury-six": { base: 70, peak: 166, pulse: 38, grit: 0.026, label: "Smooth six" },
      "compact-n": { base: 88, peak: 206, pulse: 56, grit: 0.062, label: "Hot hatch" }
    };
    const sound = profiles[profile] || profiles["turbo-four"];

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(520, now);
    filter.frequency.exponentialRampToValueAtTime(2300, now + duration * 0.38);
    filter.frequency.exponentialRampToValueAtTime(760, now + duration);
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.26, now + 0.08);
    master.gain.exponentialRampToValueAtTime(0.34, now + duration * 0.38);
    master.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    [1, 2, 3, 4].forEach((multiple, index) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      oscillator.type = index % 2 ? "sawtooth" : "square";
      oscillator.frequency.setValueAtTime(sound.base * multiple, now);
      oscillator.frequency.exponentialRampToValueAtTime(sound.peak * multiple, now + duration * 0.42);
      oscillator.frequency.exponentialRampToValueAtTime(sound.base * multiple * 0.85, now + duration);
      gain.gain.setValueAtTime(0.16 / multiple, now);
      oscillator.connect(gain).connect(filter);
      oscillator.start(now);
      oscillator.stop(now + duration + 0.02);
    });

    const pulse = audio.createOscillator();
    const pulseGain = audio.createGain();
    pulse.type = "triangle";
    pulse.frequency.setValueAtTime(sound.pulse, now);
    pulse.frequency.exponentialRampToValueAtTime(sound.pulse * 2.4, now + duration * 0.36);
    pulseGain.gain.setValueAtTime(0.08, now);
    pulseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    pulse.connect(pulseGain).connect(filter);
    pulse.start(now);
    pulse.stop(now + duration + 0.02);

    const noiseBuffer = audio.createBuffer(1, audio.sampleRate * duration, audio.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let index = 0; index < data.length; index += 1) {
      data[index] = (Math.random() * 2 - 1) * sound.grit;
    }
    const noise = audio.createBufferSource();
    const noiseGain = audio.createGain();
    noise.buffer = noiseBuffer;
    noiseGain.gain.setValueAtTime(0.28, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    noise.connect(noiseGain).connect(filter);
    noise.start(now);

    filter.connect(compressor).connect(master).connect(audio.destination);
    return sound.label;
  };

  const startEngineButton = document.querySelector("[data-start-engine]");
  const rpmLabel = document.querySelector("[data-rpm]");
  const tach = document.querySelector("[data-tach]");
  startEngineButton?.addEventListener("click", () => {
    const heroVideo = document.querySelector(".hero-video");
    if (heroVideo) {
      heroVideo.muted = false;
      heroVideo.volume = 1;
      heroVideo.play?.().catch(() => {});
    }
    const label = playEngineProfile("compact-n", 2.4);
    startEngineButton.textContent = "Rev again";
    if (rpmLabel) rpmLabel.textContent = label;
    tach?.classList.add("is-revving");
    window.setTimeout(() => tach?.classList.remove("is-revving"), 2300);
  });

  const route = document.querySelector("[data-route]");
  const path = route?.querySelector(".route-live");
  if (route && path) {
    const car = route.querySelector(".route-car");
    const count = route.querySelector("[data-route-count]");
    const city = route.querySelector("[data-route-city]");
    const km = route.querySelector("[data-route-km]");
    const dots = Array.from(route.querySelectorAll(".route-dot"));
    const steps = Array.from(route.querySelectorAll("[data-route-step]"));
    const stops = [
      { city: "Seoul", km: "0 km", progress: 0 },
      { city: "Inje", km: "120 km", progress: 25 },
      { city: "Cheongdo", km: "330 km", progress: 46 },
      { city: "Ulsan", km: "390 km", progress: 58 },
      { city: "Damyang", km: "650 km", progress: 79 },
      { city: "Jeonju", km: "720 km", progress: 100 }
    ];
    const length = path.getTotalLength();
    let activeIndex = -1;
    let target = 0;
    let current = 0;

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
    const nearestStop = (percent) => stops.reduce((nearest, stop, index) => {
      const currentDistance = Math.abs(stop.progress - percent);
      const nearestDistance = Math.abs(stops[nearest].progress - percent);
      return currentDistance < nearestDistance ? index : nearest;
    }, 0);

    const setActive = (index) => {
      if (index === activeIndex) return;
      activeIndex = index;
      const stop = stops[index];
      count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(stops.length).padStart(2, "0")}`;
      city.textContent = stop.city;
      km.textContent = stop.km;
      dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
      steps.forEach((step, stepIndex) => step.classList.toggle("is-active", stepIndex === index));
    };

    const render = (percent) => {
      const bounded = clamp(percent, 0, 100);
      path.style.strokeDashoffset = length - length * bounded / 100;
      const point = path.getPointAtLength(length * bounded / 100);
      const next = path.getPointAtLength(length * clamp(bounded / 100 + 0.01));
      const angle = Math.atan2(next.y - point.y, next.x - point.x) * 180 / Math.PI;
      car.setAttribute("transform", `translate(${point.x - 34} ${point.y - 18}) rotate(${angle})`);
      setActive(nearestStop(bounded));
    };

    const updateTarget = () => {
      const rect = route.getBoundingClientRect();
      const total = Math.max(route.offsetHeight - window.innerHeight, 1);
      target = clamp(-rect.top / total) * 100;
    };

    const animate = () => {
      updateTarget();
      current = reducedMotion ? target : current + (target - current) * 0.12;
      if (Math.abs(target - current) < 0.05) current = target;
      render(current);
      requestAnimationFrame(animate);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        const step = steps[index];
        if (step) step.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
      });
    });

    updateTarget();
    render(0);
    animate();
  }

  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = lightbox?.querySelector("img");
  document.querySelectorAll("[data-image]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = button.dataset.image;
      lightboxImage.alt = button.querySelector("img")?.alt || "";
      lightbox.hidden = false;
    });
  });
  lightbox?.querySelector("[data-close]")?.addEventListener("click", () => {
    lightbox.hidden = true;
  });
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.hidden = true;
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox) lightbox.hidden = true;
  });

  const game = document.querySelector("[data-engine-game]");
  if (game) {
    const samples = [
      { answer: "Hot hatch turbo four", profile: "compact-n", options: ["Hot hatch turbo four", "Big lazy V8", "Quiet EV motor"] },
      { answer: "Flat-six sports car", profile: "flat-six", options: ["Diesel SUV", "Flat-six sports car", "Luxury hybrid"] },
      { answer: "Big lazy V8", profile: "v8", options: ["Big lazy V8", "Small city car", "Rotary buzz"] },
      { answer: "Smooth grand tourer six", profile: "luxury-six", options: ["Smooth grand tourer six", "Two-stroke bike", "EV spaceship"] },
      { answer: "Inline-four turbo", profile: "turbo-four", options: ["Inline-four turbo", "Air-cooled Beetle", "V12 hypercar"] }
    ];
    let round = 0;
    let score = 0;
    let answered = false;
    const optionsNode = game.querySelector("[data-options]");
    const roundNode = game.querySelector("[data-round]");
    const scoreNode = game.querySelector("[data-score]");
    const feedback = game.querySelector("[data-feedback]");
    const playButton = game.querySelector("[data-play-sample]");
    const nextButton = game.querySelector("[data-next-sample]");

    const renderRound = () => {
      const sample = samples[round];
      answered = false;
      if (roundNode) roundNode.textContent = String(round + 1);
      if (scoreNode) scoreNode.textContent = `${score} correct`;
      if (feedback) feedback.textContent = "Listen first. Then trust your ear.";
      if (!optionsNode) return;
      optionsNode.innerHTML = "";
      sample.options.forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = option;
        button.addEventListener("click", () => {
          if (answered) return;
          answered = true;
          const correct = option === sample.answer;
          if (correct) score += 1;
          button.classList.add(correct ? "is-correct" : "is-wrong");
          optionsNode.querySelectorAll("button").forEach((node) => {
            if (node.textContent === sample.answer) node.classList.add("is-correct");
            node.disabled = true;
          });
          if (scoreNode) scoreNode.textContent = `${score} correct`;
          if (feedback) feedback.textContent = correct ? "Correct. You heard the character." : `Not this time. It was ${sample.answer}.`;
        });
        optionsNode.appendChild(button);
      });
    };

    playButton?.addEventListener("click", () => {
      playEngineProfile(samples[round].profile, 2.2);
      playButton.textContent = "Play it again";
    });
    nextButton?.addEventListener("click", () => {
      round = (round + 1) % samples.length;
      if (round === 0) score = 0;
      if (playButton) playButton.textContent = "Play engine sound";
      renderRound();
    });
    renderRound();
  }
})();
