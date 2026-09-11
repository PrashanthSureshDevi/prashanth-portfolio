/* =====================================================================
   CONFIG — edit this block to update content across the whole site
   ===================================================================== */
const CONFIG = {
  name: "Prashanth S",
  role: "AI / ML Engineer",
  social: {
    github: "#",     // TODO: replace with your GitHub profile URL
    linkedin: "#",   // TODO: replace with your LinkedIn profile URL
    leetcode: "#"    // TODO: replace with your LeetCode profile URL
  },
  projects: [
    { num: "01", title: "AI Chat Assistant", desc: "LLM-powered conversational assistant.", tech: ["Python","LLM","Prompt Engineering"] },
    { num: "02", title: "RAG Knowledge System", desc: "Retrieval-Augmented Generation system for answering questions from custom documents.", tech: ["RAG","Embeddings","Vector DB"] },
    { num: "03", title: "NLP Intelligence", desc: "Natural Language Processing project for analyzing and understanding text.", tech: ["NLP","Python","Text Processing"] },
    { num: "04", title: "Machine Learning System", desc: "Machine Learning model solving a real-world prediction/classification problem.", tech: ["Machine Learning","Python","Data Science"] }
  ],
  learning: ["Large Language Models","Natural Language Processing","Retrieval-Augmented Generation","Generative AI","AI Agents","Machine Learning"],
  stack: [
    { name: "Languages", skills: ["Python"] },
    { name: "AI / ML", skills: ["Machine Learning","Deep Learning","Artificial Intelligence"] },
    { name: "Generative AI", skills: ["LLMs","Generative AI","AI Agents"] },
    { name: "NLP", skills: ["Natural Language Processing","Text Processing"] },
    { name: "LLM Systems", skills: ["RAG","Embeddings","Vector Search","Prompt Engineering"] },
    { name: "Tools", skills: ["Git","GitHub","Jupyter","VS Code"] },
    { name: "Fundamentals", skills: ["DSA","Data Structures","Algorithms"] }
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

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- NAV SCROLL ---------- */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

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
    document.querySelectorAll('.project-card, .portrait-card, .learn-card').forEach(el => {
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

  /* ---------- FEATURED PROJECT MINI VISUAL (RAG diagram) ---------- */
  (function ragCanvas(){
    const canvas = document.getElementById('rag-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    function resize(){
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive:true });
    const docs = Array.from({length:5}, (_,i) => ({ x: 60, y: 60 + i*((canvas.clientHeight-120)/4) }));
    let t = 0;
    function draw(){
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0,0,w,h);
      const hub = { x: w*0.52, y: h*0.5 };
      const out = { x: w*0.86, y: h*0.5 };
      docs.forEach((d,i) => {
        ctx.strokeStyle = 'rgba(69,216,242,0.18)';
        ctx.beginPath(); ctx.moveTo(d.x,d.y); ctx.lineTo(hub.x,hub.y); ctx.stroke();
        ctx.fillStyle = '#10151d';
        ctx.strokeStyle = 'rgba(255,255,255,0.16)';
        ctx.beginPath(); ctx.roundRect ? ctx.roundRect(d.x-22,d.y-14,44,28,6) : ctx.rect(d.x-22,d.y-14,44,28);
        ctx.fill(); ctx.stroke();
      });
      ctx.strokeStyle = 'rgba(69,216,242,0.3)';
      ctx.beginPath(); ctx.moveTo(hub.x,hub.y); ctx.lineTo(out.x,out.y); ctx.stroke();
      const pulse = 6 + Math.sin(t/28)*2;
      ctx.fillStyle = '#45d8f2';
      ctx.shadowColor = '#45d8f2'; ctx.shadowBlur = 16;
      ctx.beginPath(); ctx.arc(hub.x,hub.y,pulse+8,0,Math.PI*2); ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#0d1117'; ctx.strokeStyle = '#45d8f2'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(out.x,out.y,16,0,Math.PI*2); ctx.fill(); ctx.stroke();
      t++;
      if (!reduceMotion) requestAnimationFrame(draw); else ctx.getContextAttributes && null;
    }
    draw();
  })();

  /* ---------- PROJECTS RENDER ---------- */
  const grid = document.getElementById('projectGrid');
  CONFIG.projects.forEach(p => {
    const el = document.createElement('div');
    el.className = 'project-card';
    el.innerHTML = `
      <div class="project-num">${p.num}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tech-row">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
      <div class="project-links">
        <a href="${CONFIG.social.github}" data-magnetic>${ICONS.github} GitHub</a>
        <a href="#" data-magnetic>${ICONS.arrow} Live demo</a>
      </div>`;
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX-r.left)+'px');
      el.style.setProperty('--my', (e.clientY-r.top)+'px');
    });
    grid.appendChild(el);
  });

  /* ---------- LEARNING CARDS ---------- */
  const learnScroll = document.getElementById('learnScroll');
  CONFIG.learning.forEach((l,i) => {
    const el = document.createElement('div');
    el.className = 'learn-card';
    el.innerHTML = `<div class="stat-num">${String(i+1).padStart(2,'0')}</div><h4>${l}</h4>`;
    learnScroll.appendChild(el);
  });

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
    CONFIG.stack.forEach((cat, i) => {
      const row = document.createElement('div');
      row.className = 'stack-row' + (i % 2 === 1 ? ' reverse' : '');

      const label = document.createElement('span');
      label.className = 'stack-row-label';
      label.textContent = cat.name;
      row.appendChild(label);

      const track = document.createElement('div');
      track.className = 'stack-track';
      track.style.animationDuration = (speeds[i % speeds.length]) + 's';

      // duplicate the skill list so the loop is seamless
      const chipsHTML = cat.skills.map(s => `<span class="skill-chip"><span class="chip-dot"></span>${s}</span>`).join('');
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

  /* ---------- MOBILE NAV FALLBACK: smooth scroll already via CSS ---------- */
});
