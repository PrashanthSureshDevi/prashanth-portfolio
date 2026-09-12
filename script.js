/* =====================================================================
   CONFIG — edit this block to update content across the whole site
   ===================================================================== */
const CONFIG = {
  name: "Prashanth S",
  role: "AI / ML Engineer",
  social: {
    github: "https://github.com/PrashanthSureshDevi",
    linkedin: "https://www.linkedin.com/in/prashanth-s-665268422",
    leetcode: "https://leetcode.com/u/prashanthaiml/"
  },
  stack: [
    { name: "Programming Languages", skills: [
      { name: "C" }, { name: "Python" }, { name: "SQL" }
    ]},
    { name: "AI / ML", skills: [
      { name: "Machine Learning", level: "Basic" },
      { name: "NLP", level: "Basic" },
      { name: "Generative AI" },
      { name: "Deep Learning", level: "Basic" },
      { name: "RAG", level: "Basic" },
      { name: "LLM", level: "Basic" }
    ]},
    { name: "Fundamentals", skills: [
      { name: "Data Structures & Algorithms" }, { name: "ML Fundamentals" }
    ]},
    { name: "Tools", skills: [
      { name: "GitHub" }, { name: "VS Code" }, { name: "Git" }
    ]},
    { name: "Soft Skills", skills: [
      { name: "Communication" }, { name: "Leadership" }, { name: "Team Collaboration" }, { name: "Problem Solving" }
    ]},
    { name: "Web Development", skills: [
      { name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }
    ]},
    { name: "Data & Visualization", skills: [
      { name: "NumPy" }, { name: "Pandas" }, { name: "Matplotlib" }, { name: "Tkinter" }
    ]}
  ],
  terminalLines: [
    "initializing neural systems...",
    "loading machine learning modules...",
    "connecting LLM knowledge...",
    "initializing RAG pipeline...",
    "loading generative intelligence...",
    "system ready."
  ]
};

const isTouch = matchMedia('(hover: none), (pointer: coarse)').matches;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (isTouch) document.body.classList.add('no-custom-cursor');

const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.17c-3.16.69-3.83-1.34-3.83-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.5-1.46.11-3.04 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.58.23 2.75.11 3.04.73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.3-5.19 5.58.41.35.77 1.04.77 2.1v3.11c0 .3.2.66.79.55A11.03 11.03 0 0 0 23 11.52C23 5.24 18.27.5 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
  leetcode: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2.3 6.3 9.5c-1 1-1 2.6 0 3.6l5.2 5.2c1 1 2.6 1 3.6 0l2-2c.5-.5.5-1.3 0-1.8-.5-.5-1.3-.5-1.8 0l-2 2-5.2-5.2 7.2-7.2c.5-.5.5-1.3 0-1.8-.5-.5-1.3-.5-1.8 0zM9 15.5h9.5c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3H9c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>'
};

/* ---------- PAGE-LOAD SWIPE INTRO: remove once everything has loaded ---------- */
window.addEventListener('load', () => {
  document.body.classList.remove('intro-lock');
  const intro = document.getElementById('pageIntro');
  if (intro) setTimeout(() => intro.remove(), 1200);
});

/* ---------- COLORFUL TRAILING CURSOR (canvas particle trail) ---------- */
(function colorfulCursorTrail(){
  if (isTouch) return;
  const canvas = document.getElementById('cursorTrail');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let dpr;

  function resize(){
    dpr = window.devicePixelRatio || 1;
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  let particles = [];
  let hue = 190;
  window.addEventListener('mousemove', (e) => {
    hue = (hue + 3) % 360;
    for (let i = 0; i < 2; i++){
      particles.push({
        x: e.clientX, y: e.clientY,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        life: 1, hue, r: Math.random() * 2.5 + 1.5
      });
    }
    if (particles.length > 160) particles.splice(0, particles.length - 160);
  }, { passive: true });

  function loop(){
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.globalCompositeOperation = 'lighter';
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.life -= 0.02;
      if (p.life > 0){
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, ${p.life * 0.55})`;
        ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    particles = particles.filter(p => p.life > 0);
    ctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(loop);
  }
  if (!reduceMotion) loop();
})();

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- NAV SCROLL ---------- */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ---------- SCROLL PROGRESS BAR ---------- */
  (function scrollProgress(){
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    function update(){
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  })();

  /* ---------- REVEAL ON SCROLL ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.14 });
  revealEls.forEach(el => io.observe(el));

  /* ---------- CUSTOM CURSOR ---------- */
  if (!isTouch) {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = innerWidth/2, my = innerHeight/2, rx = mx, ry = my;
    window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
    function loop(){
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    }
    loop();
    document.querySelectorAll('a, button, [data-magnetic]').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('is-active'));
      el.addEventListener('mouseleave', () => ring.classList.remove('is-active'));
    });
    document.querySelectorAll('.portrait-card, .about-portrait-frame, .glass-card, .timeline-card, .coming-soon').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('is-card'));
      el.addEventListener('mouseleave', () => ring.classList.remove('is-card'));
    });
    /* magnetic buttons */
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const relX = e.clientX - r.left - r.width/2;
        const relY = e.clientY - r.top - r.height/2;
        el.style.transform = `translate(${relX*0.18}px, ${relY*0.3}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- PORTRAIT 3D TILT ---------- */
  const stage = document.querySelector('.portrait-stage');
  const card = document.getElementById('portraitCard');
  if (stage && card && !reduceMotion) {
    stage.addEventListener('mousemove', (e) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${px*14}deg) rotateX(${-py*14}deg)`;
    });
    stage.addEventListener('mouseleave', () => { card.style.transform = 'rotateY(0) rotateX(0)'; });
  }

  /* ---------- BACKGROUND NEURAL PARTICLE NETWORK ---------- */
  (function bgNetwork(){
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    const COUNT = isTouch ? 28 : 62;
    function resize(){
      w = canvas.width = innerWidth;
      h = canvas.height = document.documentElement.scrollHeight;
    }
    function init(){
      resize();
      particles = Array.from({length: COUNT}, () => ({
        x: Math.random()*w, y: Math.random()*h,
        vx: (Math.random()-0.5)*0.18, vy: (Math.random()-0.5)*0.18,
        r: Math.random()*1.4+0.6
      }));
    }
    function step(){
      ctx.clearRect(0,0,w,h);
      const vh = innerHeight, sy = window.scrollY;
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i=0;i<particles.length;i++){
        const p = particles[i];
        if (p.y < sy - 100 || p.y > sy + vh + 100) continue;
        for (let j=i+1;j<particles.length;j++){
          const q = particles[j];
          const dx = p.x-q.x, dy = p.y-q.y;
          const d = Math.sqrt(dx*dx+dy*dy);
          if (d < 140) {
            ctx.strokeStyle = `rgba(69,216,242,${0.09*(1-d/140)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y); ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(69,216,242,0.5)';
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
      }
      if (!reduceMotion) requestAnimationFrame(step);
    }
    init();
    window.addEventListener('resize', () => { resize(); }, { passive:true });
    step();
  })();

  /* ---------- CONTACT LINKS ---------- */
  const contactLinks = document.getElementById('contactLinks');
  [['github','GitHub'],['linkedin','LinkedIn'],['leetcode','LeetCode']].forEach(([key,label]) => {
    const a = document.createElement('a');
    a.href = CONFIG.social[key]; a.className = 'contact-link'; a.setAttribute('data-magnetic','');
    a.innerHTML = `${ICONS[key]} ${label}`;
    contactLinks.appendChild(a);
  });

  /* ---------- SOCIAL BAR ICONS ---------- */
  const socialIcons = document.getElementById('socialIcons');
  [['github','GitHub'],['linkedin','LinkedIn'],['leetcode','LeetCode']].forEach(([key,label]) => {
    const a = document.createElement('a');
    a.href = CONFIG.social[key]; a.setAttribute('aria-label', label); a.setAttribute('data-magnetic','');
    a.innerHTML = ICONS[key];
    socialIcons.appendChild(a);
  });

  /* ---------- AI STACK — MARQUEE ROWS ---------- */
  (function stackMarquee(){
    const shell = document.getElementById('stackShell');
    if (!shell) return;
    const speeds = [34, 40, 30, 44, 26, 38, 32]; // seconds per loop, varied per row
    const rowHues = ['#45d8f2', '#8b7cf0', '#f97fd1', '#34d399', '#fbbf24', '#f2705c', '#6fa8f2']; // per-row accent color
    CONFIG.stack.forEach((cat, i) => {
      const row = document.createElement('div');
      row.className = 'stack-row' + (i % 2 === 1 ? ' reverse' : '');
      row.style.setProperty('--row-accent', rowHues[i % rowHues.length]);

      const label = document.createElement('span');
      label.className = 'stack-row-label';
      label.textContent = cat.name;
      row.appendChild(label);

      const track = document.createElement('div');
      track.className = 'stack-track';
      track.style.animationDuration = (speeds[i % speeds.length]) + 's';

      // duplicate the skill list so the loop is seamless
      const chipsHTML = cat.skills.map(s => {
        const level = s.level ? `<span class="chip-level">${s.level}</span>` : '';
        const delay = (Math.random() * 3).toFixed(2);
        return `<span class="skill-chip" style="animation-delay:${delay}s"><span class="chip-dot"></span>${s.name}${level}</span>`;
      }).join('');
      track.innerHTML = chipsHTML + chipsHTML;

      row.appendChild(track);
      shell.appendChild(row);
    });
  })();

  /* ---------- TERMINAL TYPING ---------- */
  (function terminal(){
    const body = document.getElementById('terminalBody');
    const section = document.getElementById('terminal');
    let started = false;
    const tio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          runTerminal();
          tio.disconnect();
        }
      });
    }, { threshold: 0.3 });
    tio.observe(section);

    function runTerminal(){
      let i = 0;
      function nextLine(){
        if (i >= CONFIG.terminalLines.length) { showStatus(); return; }
        const div = document.createElement('div');
        div.className = 'term-line';
        div.style.opacity = 1;
        const prompt = document.createElement('span');
        prompt.className = 'prompt';
        prompt.textContent = '> ';
        div.appendChild(prompt);
        const textSpan = document.createElement('span');
        div.appendChild(textSpan);
        const cursorSpan = document.createElement('span');
        cursorSpan.className = 'term-cursor';
        div.appendChild(cursorSpan);
        body.appendChild(div);
        const line = CONFIG.terminalLines[i];
        let c = 0;
        const speed = reduceMotion ? 0 : 22;
        function typeChar(){
          if (c <= line.length) {
            textSpan.textContent = line.slice(0,c);
            c++;
            setTimeout(typeChar, speed);
          } else {
            cursorSpan.remove();
            i++;
            setTimeout(nextLine, 260);
          }
        }
        typeChar();
      }
      function showStatus(){
        const div = document.createElement('div');
        div.className = 'term-status';
        div.innerHTML = `<div class="ts-name">${CONFIG.name}</div><div class="ts-role">${CONFIG.role.toUpperCase()}</div><div class="ts-status">STATUS: BUILDING</div>`;
        body.appendChild(div);
        requestAnimationFrame(() => { div.style.transition = 'opacity .6s ease'; div.style.opacity = 1; });
      }
      nextLine();
    }
  })();

  /* ---------- ABOUT: neural particle canvas around the portrait ---------- */
  (function aboutNetwork(){
    const stageEl = document.querySelector('.about-portrait-stage');
    const canvas = document.getElementById('aboutCanvas');
    if (!stageEl || !canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, dpr, nodes = [];
    const COUNT = isTouch ? 14 : 22;

    function resize(){
      dpr = window.devicePixelRatio || 1;
      w = stageEl.clientWidth; h = stageEl.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    function makeNodes(){
      nodes = Array.from({length: COUNT}, () => ({
        x: Math.random()*w, y: Math.random()*h,
        vx: (Math.random()-0.5)*0.16, vy: (Math.random()-0.5)*0.16,
        r: Math.random()*1.3+0.6
      }));
    }
    function draw(){
      ctx.clearRect(0,0,w,h);
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });
      for (let a=0;a<nodes.length;a++){
        for (let b=a+1;b<nodes.length;b++){
          const dx = nodes[a].x-nodes[b].x, dy = nodes[a].y-nodes[b].y;
          const d = Math.sqrt(dx*dx+dy*dy);
          if (d < 90){
            ctx.strokeStyle = `rgba(69,216,242,${(1-d/90)*0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(nodes[a].x,nodes[a].y); ctx.lineTo(nodes[b].x,nodes[b].y); ctx.stroke();
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
        ctx.fillStyle = 'rgba(180,240,255,0.85)'; ctx.fill();
      });
      if (!reduceMotion) requestAnimationFrame(draw);
    }
    resize(); makeNodes();
    if (reduceMotion) { draw(); } else { draw(); }
    window.addEventListener('resize', () => { resize(); makeNodes(); }, { passive:true });
  })();

  /* ---------- ABOUT: portrait tilt + mouse-follow glow ---------- */
  (function aboutTilt(){
    const stageEl = document.querySelector('.about-portrait-stage');
    const frame = document.getElementById('aboutPortraitFrame');
    if (!stageEl || !frame || reduceMotion) return;
    stageEl.addEventListener('mousemove', (e) => {
      const r = stageEl.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      frame.style.transform = `rotateY(${px*10}deg) rotateX(${-py*10}deg)`;
    });
    stageEl.addEventListener('mouseleave', () => { frame.style.transform = ''; });
  })();

  /* ---------- PROJECTS: coming-soon terminal type loop ---------- */
  (function comingSoonType(){
    const el = document.getElementById('csType');
    const section = document.getElementById('projects');
    if (!el || !section) return;
    const lines = ['building_next_project.py', 'status: in_development', 'check_back_soon()'];
    let li = 0, ci = 0, deleting = false, started = false;

    function tick(){
      const line = lines[li];
      if (!deleting){
        ci++;
        el.textContent = line.slice(0, ci);
        if (ci === line.length){ deleting = true; setTimeout(tick, 1400); return; }
      } else {
        ci--;
        el.textContent = line.slice(0, ci);
        if (ci === 0){ deleting = false; li = (li+1) % lines.length; }
      }
      setTimeout(tick, deleting ? 28 : 55);
    }
    if (reduceMotion){ el.textContent = lines[0]; return; }
    const tio = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting && !started){ started = true; tick(); tio.disconnect(); } });
    }, { threshold: 0.3 });
    tio.observe(section);
  })();

  /* ---------- JOURNEY: animate the timeline fill on reveal ---------- */
  (function timelineFill(){
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    const tio = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting){ timeline.classList.add('is-active'); tio.disconnect(); } });
    }, { threshold: 0.25 });
    tio.observe(timeline);
  })();

  /* ---------- RESUME: detect whether resume.pdf actually exists ---------- */
  (function resumeCheck(){
    const status = document.getElementById('resumeStatus');
    const viewBtn = document.getElementById('viewResumeBtn');
    const downloadBtn = document.getElementById('downloadResumeBtn');
    if (!status || !viewBtn || !downloadBtn) return;
    fetch('resume.pdf', { method: 'HEAD' }).then(res => {
      if (!res.ok) throw new Error('missing');
      status.textContent = 'View or download my latest resume below.';
    }).catch(() => {
      status.textContent = 'Resume coming soon. Add resume.pdf to the project root to activate these buttons.';
      [viewBtn, downloadBtn].forEach(btn => {
        btn.setAttribute('aria-disabled', 'true');
        btn.classList.add('is-disabled');
        btn.addEventListener('click', (e) => e.preventDefault());
      });
    });
  })();

  /* ---------- CONTACT FORM: AJAX submit (no page redirect) ---------- */
  (function contactForm(){
    const form = document.getElementById('contactForm');
    if (!form) return;
    const fields = {
      name: { input: document.getElementById('cfName'), error: document.getElementById('cfNameError') },
      email: { input: document.getElementById('cfEmail'), error: document.getElementById('cfEmailError') },
      message: { input: document.getElementById('cfMessage'), error: document.getElementById('cfMessageError') }
    };
    const status = document.getElementById('cfStatus');
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validate(){
      let ok = true;
      if (!fields.name.input.value.trim()){
        fields.name.error.textContent = 'Please enter your name.'; ok = false;
      } else fields.name.error.textContent = '';

      if (!emailRe.test(fields.email.input.value.trim())){
        fields.email.error.textContent = 'Please enter a valid email.'; ok = false;
      } else fields.email.error.textContent = '';

      if (fields.message.input.value.trim().length < 10){
        fields.message.error.textContent = 'Message should be at least 10 characters.'; ok = false;
      } else fields.message.error.textContent = '';

      return ok;
    }

    Object.values(fields).forEach(f => {
      f.input.addEventListener('blur', validate);
      f.input.addEventListener('input', () => { if (f.error.textContent) validate(); });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validate()){
        status.textContent = 'Please fix the highlighted fields.';
        status.classList.remove('is-success');
        status.classList.add('is-error');
        return;
      }

      status.textContent = 'Sending...';
      status.classList.remove('is-error', 'is-success');

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          status.textContent = 'Message sent — thank you!';
          status.classList.add('is-success');
          form.reset();
        } else {
          return response.json().then(data => {
            throw new Error(data?.errors?.map(e => e.message).join(', ') || 'Submission failed.');
          });
        }
      })
      .catch(err => {
        status.textContent = err.message || 'Something went wrong. Please try again.';
        status.classList.add('is-error');
      });
    });
  })();

  /* ---------- MOBILE NAV FALLBACK: smooth scroll already via CSS ---------- */
});
