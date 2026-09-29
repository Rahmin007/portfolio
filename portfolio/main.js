/* =========================================================
   RAHMIN.EXE — portfolio script
   1. Content (edit here to update the site)
   2. Rendering (skills, projects, filters)
   3. Effects (boot screen, web canvas, typer, tilt, reveal)
   4. Game layer (achievements, Konami code, HUD)
   ========================================================= */

/* ---------------------------------------------------------
   1. CONTENT
   --------------------------------------------------------- */
const LINKS = {
  github: 'https://github.com/Rahmin007',
  // TODO: paste your LinkedIn profile URL here, e.g. 'https://www.linkedin.com/in/your-name'
  linkedin: '',
  email: 'rahmin.raieef@gmail.com',
};

const ROLES = [
  'Full-Stack Developer',
  'Frontend Engineer',
  'AI / RAG Engineer',
  'Deep Learning Tinkerer',
  'HCI Researcher',
  'Systems Programmer',
];

const SKILLS = [
  {
    title: 'Languages',
    icon: '</>',
    accent: '#00f0ff',
    level: 'Core stats',
    items: ['Python', 'JavaScript', 'C', 'C++', 'Java', 'SQL'],
  },
  {
    title: 'Web Development',
    icon: 'WEB',
    accent: '#ff2a6d',
    level: 'Main class',
    items: ['React', 'Node.js', 'Express', 'FastAPI', 'MongoDB', 'Socket.io', 'Zustand', 'Tailwind CSS', 'Vite', 'JWT auth', 'PHP', 'MySQL'],
  },
  {
    title: 'AI / Machine Learning',
    icon: 'AI',
    accent: '#8b5cf6',
    level: 'Sub class',
    items: ['RAG pipelines', 'LLM APIs (OpenAI, Anthropic)', 'Sentence Transformers', 'TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'OpenCV', 'Pandas', 'Attention U-Net'],
  },
  {
    title: 'CS Fundamentals',
    icon: 'CS',
    accent: '#fcee0a',
    level: 'Passive buffs',
    items: ['Data Structures', 'Algorithms (DP, Greedy, BFS/DFS)', 'Operating Systems', 'Computer Networks', 'Databases & ER', 'OOP & Design Patterns'],
  },
  {
    title: 'HCI & Design',
    icon: 'UX',
    accent: '#39ff14',
    level: 'Special ability',
    items: ['Figma prototyping', 'User research', 'Surveys & interviews', 'Thematic analysis', 'Nudge & behavioural design'],
  },
  {
    title: 'Tools & Cloud',
    icon: 'OPS',
    accent: '#ff9f1c',
    level: 'Inventory',
    items: ['Git & GitHub', 'GitHub Actions', 'Docker', 'AWS', 'Vercel', 'Pytest', 'Vitest', 'Playwright', 'Linux', 'Jupyter'],
  },
];

const CATEGORIES = {
  web: { label: 'Web', accent: '#ff2a6d' },
  ai: { label: 'AI / ML', accent: '#8b5cf6' },
  hci: { label: 'HCI', accent: '#39ff14' },
  systems: { label: 'Systems', accent: '#fcee0a' },
  graphics: { label: 'Graphics', accent: '#00f0ff' },
};

/**
 * Projects, with details taken from each repository's README on GitHub.
 * `context` = course / thesis / personal; `featured` projects span the full width.
 */
const REPO = (name) => `https://github.com/Rahmin007/${name}`;

const PROJECTS = [
  {
    title: 'DocuSense',
    subtitle: 'Grounded RAG question-answering API',
    category: 'ai',
    context: 'Personal project',
    featured: true,
    description:
      'A retrieval-augmented generation (RAG) service that answers questions from internal documentation, and refuses when the documents don’t support an answer. Documents are chunked deterministically (800 characters, 120 overlap), embedded, searched by cosine similarity with a threshold, and answered with citations that are validated against the retrieved evidence.',
    outcome:
      'Pluggable providers: OpenAI, Sentence Transformers or offline TF-IDF embeddings; OpenAI, Anthropic or extractive answers. Guards against instruction injection.',
    stack: ['Python', 'FastAPI', 'NumPy', 'Scikit-learn', 'Pytest', 'Docker', 'GitHub Actions'],
    links: { code: REPO('docusense-rag-service') },
  },
  {
    title: 'SmartPlate',
    subtitle: 'HCI-driven smart menu system · BSc thesis (team of 4)',
    category: 'hci',
    context: 'Thesis · CSE400',
    featured: true,
    description:
      'Can a menu’s design reduce food waste at the moment of choice? We compared three menus (Traditional, Info-Lite, Info-Rich) with 50 survey respondents and 20 interviews at the BRAC University cafeteria, then designed a 15-screen Figma kiosk prototype with waste badges, CO₂ labels and portion nudges.',
    outcome:
      'Info-Rich menu: sustainable choices 22% → 58%, waste intention 3.4 → 2.3 (of 5), usefulness 4.5/5. 73% preferred it to the current menu.',
    stack: ['Figma', 'User research', 'Thematic analysis', 'Nudge theory', 'TAM'],
    links: { code: REPO('smartplate-hci-thesis') },
  },
  {
    title: 'Save Lives',
    subtitle: 'Blood donation platform',
    category: 'web',
    context: 'Full-stack project',
    description:
      'Connects blood donors with people in need: post blood requests, search donors by blood group, location and availability, manage blood bank requests, and chat in real time. Includes notifications and an admin panel.',
    outcome: 'JWT auth with access + refresh tokens in cookies, and real-time messaging over Socket.io',
    stack: ['React', 'Vite', 'Zustand', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    links: { code: REPO('save-lives-blood-donation-platform') },
  },
  {
    title: 'ByteSpace',
    subtitle: 'Online course platform · frontend',
    category: 'web',
    context: 'Frontend build',
    description:
      'A faithful build of a Figma design: landing page, sign in, sign up and 404. Reusable React components, a URL-driven course filter and search, accessible validated forms, responsive from 320px to 1920px.',
    outcome: '62 unit/component tests (Vitest) plus Playwright end-to-end tests on desktop and mobile',
    stack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Vitest', 'Playwright'],
    links: { live: 'https://bytespace-five.vercel.app', code: REPO('bytespace-new') },
  },
  {
    title: 'Brain Tumor Segmentation',
    subtitle: 'Segmentation + classification on MRI',
    category: 'ai',
    context: 'CSE428 · Image Processing',
    description:
      'An Attention U-Net that draws pixel-level tumour masks on brain MRI scans (BRISC2025 dataset), plus a classifier that detects whether a tumour is present. Attention gates on the skip connections help the model focus on small, irregular tumours.',
    outcome: 'Dice Loss instead of cross-entropy, because the tumour is a tiny fraction of each image',
    stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
    links: { code: REPO('brain-tumor-segmentation-unet') },
  },
  {
    title: 'Student Dropout Prediction',
    subtitle: 'Learning analytics on OULAD',
    category: 'ai',
    context: 'CSE437 · Data Science',
    description:
      'Predicts which students will withdraw using the Open University Learning Analytics Dataset (22 courses): demographics, assessment scores and weekly VLE click activity, aggregated into one row per student per course.',
    outcome: 'Five models compared on ROC-AUC and PR-AUC; XGBoost performed best',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Seaborn'],
    links: { code: REPO('student-performance-prediction') },
  },
  {
    title: 'Health Risk Classification',
    subtitle: 'Multi-class risk prediction',
    category: 'ai',
    context: 'CSE422 · Artificial Intelligence',
    description:
      'An end-to-end ML pipeline that predicts a patient’s health risk level: exploratory analysis, Z-score outlier removal, scaling, then XGBoost, Random Forest, Logistic Regression, KNN and SVM trained and compared.',
    outcome: 'Evaluated with accuracy, F1, confusion matrices, ROC-AUC and PR-AUC curves',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'SciPy'],
    links: { code: REPO('health-risk-classification-ml') },
  },
  {
    title: 'Mini Virtual File System',
    subtitle: 'A file system from scratch in C',
    category: 'systems',
    context: 'Operating Systems',
    description:
      'Three command-line tools that format a raw disk image, add files to it and list its root directory. Implements a superblock, inode and data bitmaps, a packed inode table (128-byte inodes) and 4 KB data blocks.',
    outcome: 'CRC32 checksums on the superblock and inodes catch disk corruption',
    stack: ['C17', 'GCC', 'Linux', 'Low-level I/O'],
    links: { code: REPO('mini-virtual-filesystem-c') },
  },
  {
    title: 'OpenGL Endless Runner',
    subtitle: '3D game in Python',
    category: 'graphics',
    context: 'CSE423 · Computer Graphics',
    description:
      'A three-lane runner: jump over ground obstacles, slide under aerial ones, collect three tiers of coins and four power-ups (speed, shield, magnet, extra life). The world changes from trees to statues to rocks as your score climbs, with a day/night sky cycle.',
    outcome: 'Animated 3D character, procedural track and a steady 60 FPS',
    stack: ['Python', 'PyOpenGL', 'GLUT'],
    links: { code: REPO('opengl-endless-runner-game') },
  },
  {
    title: 'Event Planner Dashboard',
    subtitle: 'Collaborative event planning',
    category: 'web',
    context: 'Database project',
    description:
      'Planners create event plans with timetables, budgets, notes and participant lists; participants get read-only dashboards. Role-based sessions decide who sees edit and delete controls.',
    outcome: 'Full CRUD on a MySQL database with two role-based views',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS'],
    links: { code: REPO('event-planner-php-mysql') },
  },
];

const ACHIEVEMENTS = {
  boot: { icon: '01', name: 'Player connected' },
  missions: { icon: '04', name: 'Mission briefing: viewed the projects' },
  quests: { icon: '05', name: 'Lore master: read the quest log' },
  contact: { icon: '06', name: 'Party invite: found the contact panel' },
  konami: { icon: '↑↑', name: 'Cheat code activated' },
};

/* ---------------------------------------------------------
   Helpers
   --------------------------------------------------------- */
const $ = (selector, root = document) => root.querySelector(selector);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

/** Escapes text before putting it into HTML strings. */
const esc = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/* ---------------------------------------------------------
   2. RENDERING
   --------------------------------------------------------- */
function renderSkills() {
  $('#skill-tree').innerHTML = SKILLS.map(
    (skill) => `
    <article class="skill card reveal" style="--accent:${skill.accent}">
      <div class="skill__head">
        <span class="skill__icon" aria-hidden="true">${esc(skill.icon)}</span>
        <div>
          <h3>${esc(skill.title)}</h3>
          <p class="skill__lvl">${esc(skill.level)}</p>
        </div>
      </div>
      <ul class="chips">${skill.items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
    </article>`,
  ).join('');
}

function renderProjects() {
  $('#mission-list').innerHTML = PROJECTS.map((project) => {
    const cat = CATEGORIES[project.category];
    const links = [
      project.links.live && `<a href="${esc(project.links.live)}" target="_blank" rel="noopener">Live site</a>`,
      project.links.code && `<a href="${esc(project.links.code)}" target="_blank" rel="noopener">Source code</a>`,
    ]
      .filter(Boolean)
      .join('');
    return `
    <li class="mission card reveal${project.featured ? ' is-featured' : ''}" data-category="${project.category}" style="--accent:${cat.accent}">
      <p class="mission__top">
        <span class="mission__type">${esc(cat.label)}</span>
        <span class="mission__year">${esc(project.context)}</span>
        ${project.featured ? '<span class="mission__badge">★ Featured</span>' : ''}
      </p>
      <h3>${esc(project.title)}</h3>
      <p class="mission__sub">${esc(project.subtitle)}</p>
      <p class="mission__desc">${esc(project.description)}</p>
      <p class="mission__loot"><b>OUTCOME</b>${esc(project.outcome)}</p>
      <ul class="chips" aria-label="Tech stack">${project.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
      ${links ? `<div class="mission__links">${links}</div>` : ''}
    </li>`;
  }).join('');
}

function renderFilters() {
  const used = [...new Set(PROJECTS.map((p) => p.category))];
  const buttons = [{ key: 'all', label: 'All' }, ...used.map((key) => ({ key, label: CATEGORIES[key].label }))];
  const container = $('#filters');
  container.innerHTML = buttons
    .map(
      (b) =>
        `<button type="button" class="filter" data-filter="${b.key}" aria-pressed="${b.key === 'all'}">${esc(b.label)}</button>`,
    )
    .join('');

  container.addEventListener('click', (event) => {
    const button = event.target.closest('.filter');
    if (!button) return;
    const filter = button.dataset.filter;
    container.querySelectorAll('.filter').forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    document.querySelectorAll('.mission').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
      card.classList.add('is-visible');
    });
  });
}

function applyLinks() {
  const linkedin = $('#linkedin-link');
  if (LINKS.linkedin) linkedin.href = LINKS.linkedin;
  else linkedin.closest('li').remove(); // hide until a URL is added
  $('#github-link').href = LINKS.github;
  $('#year').textContent = new Date().getFullYear();
  document.querySelectorAll('[data-count="projects"]').forEach((el) => {
    el.textContent = PROJECTS.length;
  });
}

/* ---------------------------------------------------------
   3. EFFECTS
   --------------------------------------------------------- */

/** Boot screen: a short terminal intro, once per browser session. */
function runBoot() {
  const boot = $('#boot');
  const seen = sessionStorage.getItem('rz-booted');
  if (reducedMotion || seen) {
    boot.remove();
    return Promise.resolve();
  }

  const lines = [
    'Loading player profile',
    'Mounting skill tree',
    `Syncing ${PROJECTS.length} projects`,
    'Calibrating neon',
    'Welcome, visitor',
  ];
  const log = $('#boot-log');
  const bar = $('#boot-bar');

  return new Promise((resolve) => {
    let i = 0;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      clearInterval(timer);
      sessionStorage.setItem('rz-booted', '1');
      boot.classList.add('is-done');
      window.removeEventListener('keydown', finish);
      boot.removeEventListener('click', finish);
      setTimeout(() => boot.remove(), 500);
      resolve();
    };
    const timer = setInterval(() => {
      if (i > 0) log.lastElementChild.classList.add('ok');
      if (i === lines.length) {
        setTimeout(finish, 350);
        clearInterval(timer);
        return;
      }
      const li = document.createElement('li');
      li.textContent = lines[i];
      log.append(li);
      i += 1;
      bar.style.width = `${(i / lines.length) * 100}%`;
    }, 260);
    window.addEventListener('keydown', finish);
    boot.addEventListener('click', finish);
  });
}

/** Animated "web" of connected nodes that reaches toward the pointer. */
function startWebCanvas() {
  const canvas = $('#web-canvas');
  const ctx = canvas.getContext('2d');
  const pointer = { x: -9999, y: -9999 };
  let nodes = [];
  let width = 0;
  let height = 0;
  let raf = 0;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(90, (width * height) / 16000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6,
    }));
  };

  const style = getComputedStyle(document.body);
  const colour = (name) => style.getPropertyValue(name).trim();

  const draw = () => {
    const cyan = colour('--cyan') || '#00f0ff';
    const red = colour('--red') || '#ff2a6d';
    ctx.clearRect(0, 0, width, height);
    const linkDist = 130;

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    }

    for (let a = 0; a < nodes.length; a += 1) {
      for (let b = a + 1; b < nodes.length; b += 1) {
        const dx = nodes[a].x - nodes[b].x;
        const dy = nodes[a].y - nodes[b].y;
        const d = Math.hypot(dx, dy);
        if (d < linkDist) {
          ctx.globalAlpha = (1 - d / linkDist) * 0.35;
          ctx.strokeStyle = cyan;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(nodes[a].x, nodes[a].y);
          ctx.lineTo(nodes[b].x, nodes[b].y);
          ctx.stroke();
        }
      }
      // web strands shoot toward the pointer
      const pd = Math.hypot(nodes[a].x - pointer.x, nodes[a].y - pointer.y);
      if (pd < 190) {
        ctx.globalAlpha = (1 - pd / 190) * 0.8;
        ctx.strokeStyle = red;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(pointer.x, pointer.y);
        ctx.stroke();
      }
    }

    ctx.globalAlpha = 0.9;
    for (const n of nodes) {
      ctx.fillStyle = cyan;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  };

  const loop = () => {
    draw();
    raf = requestAnimationFrame(loop);
  };

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
  });
  window.addEventListener('pointerleave', () => {
    pointer.x = -9999;
    pointer.y = -9999;
  });
  // pause when the tab is hidden to save battery
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else if (!reducedMotion) loop();
  });

  if (reducedMotion) draw();
  else loop();
}

/** Types and deletes each role in turn. */
function startTyper() {
  const el = $('#typer');
  if (reducedMotion) return;
  let role = 0;
  let chars = ROLES[0].length;
  let deleting = true;

  const tick = () => {
    const word = ROLES[role];
    chars += deleting ? -1 : 1;
    el.textContent = word.slice(0, chars);
    let delay = deleting ? 40 : 75;
    if (!deleting && chars === word.length) {
      deleting = true;
      delay = 1800;
    } else if (deleting && chars === 0) {
      deleting = false;
      role = (role + 1) % ROLES.length;
      delay = 300;
    }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 2200);
}

/** 3D tilt + holographic highlight on project cards (mouse only). */
function enableTilt() {
  if (reducedMotion || !finePointer) return;
  document.querySelectorAll('.mission').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
      card.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 6}deg) rotateY(${(px - 0.5) * 8}deg)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}

/** Fades sections in as they scroll into view. */
function enableReveal() {
  const items = document.querySelectorAll('.reveal, .section__head, .terminal, .timeline__item, .trophy, .contact');
  items.forEach((el) => el.classList.add('reveal'));
  if (reducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );
  items.forEach((el) => io.observe(el));
}

/* ---------------------------------------------------------
   4. GAME LAYER
   --------------------------------------------------------- */
const unlocked = new Set();

function toast(icon, label, name) {
  const wrap = $('#toasts');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="toast__icon" aria-hidden="true">${esc(icon)}</span>
    <div><p class="toast__label">${esc(label)}</p><p class="toast__name">${esc(name)}</p></div>`;
  wrap.append(el);
  setTimeout(() => el.classList.add('is-leaving'), 3200);
  setTimeout(() => el.remove(), 3600);
}

function unlock(key) {
  if (unlocked.has(key)) return;
  unlocked.add(key);
  $('#ach-count').textContent = unlocked.size;
  const a = ACHIEVEMENTS[key];
  toast(a.icon, 'Achievement unlocked', a.name);
}

function watchAchievements() {
  $('#ach-total').textContent = Object.keys(ACHIEVEMENTS).length;
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting && ACHIEVEMENTS[entry.target.id]) {
          unlock(entry.target.id);
          io.unobserve(entry.target);
        }
      }),
    // fires when the section crosses the middle of the screen (works for very tall sections too)
    { rootMargin: '-30% 0px -30% 0px' },
  );
  ['missions', 'quests', 'contact'].forEach((id) => io.observe(document.getElementById(id)));
}

function enableKonami() {
  const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let pos = 0;
  window.addEventListener('keydown', (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = key === code[pos] ? pos + 1 : key === code[0] ? 1 : 0;
    if (pos === code.length) {
      pos = 0;
      document.body.classList.toggle('cheat');
      unlock('konami');
    }
  });
}

/** Scroll progress ("HP bar") + highlight the nav link of the section in view. */
function enableHud() {
  const fill = $('#hp-fill');
  const links = [...document.querySelectorAll('.hud__links a')];
  const sections = links.map((a) => document.querySelector(a.getAttribute('href')));

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    let current = 0;
    sections.forEach((s, i) => {
      if (s && s.getBoundingClientRect().top < window.innerHeight * 0.4) current = i;
    });
    links.forEach((a, i) => {
      a.classList.toggle('is-active', i === current);
      if (i === current) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu
  const toggle = $('#menu-toggle');
  const menu = $('#nav-links');
  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  });
  menu.addEventListener('click', (e) => e.target.closest('a') && close());
  window.addEventListener('keydown', (e) => e.key === 'Escape' && close());
}

function enableCopyEmail() {
  $('#copy-email').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
      toast('@', 'Copied to clipboard', LINKS.email);
    } catch {
      toast('!', 'Copy failed', `Email me at ${LINKS.email}`);
    }
  });
}

/* ---------------------------------------------------------
   Start
   --------------------------------------------------------- */
renderSkills();
renderFilters();
renderProjects();
applyLinks();
enableHud();
enableCopyEmail();
enableKonami();
startWebCanvas();
runBoot().then(() => {
  enableReveal();
  enableTilt();
  startTyper();
  watchAchievements();
  setTimeout(() => unlock('boot'), 400);
});
