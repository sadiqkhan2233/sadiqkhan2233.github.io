# Muhammad Sadiq – Portfolio Website (Complete Code)

This guide gives you **every file** for your portfolio website. You only need a web browser and a GitHub account. Nothing to install.

---

## PART 1 – How to upload (step by step)

### Step 1: Create a repository
1. Log in to GitHub → click the **+** (top right) → **New repository**.
2. Repository name: `YOUR-USERNAME.github.io` (replace with your real GitHub username).
   *(Example: if your username is `msadiq`, name it `msadiq.github.io`. Your website will then be `https://msadiq.github.io`.)*
3. Choose **Public** → tick **Add a README file** → click **Create repository**.

### Step 2: Create each file
For each file below:
1. In your repository click **Add file → Create new file**.
2. In the name box type the file name **exactly** as shown (example: `index.html`).
3. Paste the code from this guide.
4. Click **Commit changes** (green button) → **Commit changes** again.

Create these files:

| File name to type | Code is in |
|---|---|
| `index.html` | File 1 |
| `style.css` | File 2 |
| `script.js` | File 3 |
| `robots.txt` | File 4 |
| `sitemap.xml` | File 5 |
| `assets/icons/favicon.svg` | File 6 |
| `README.md` | File 7 (it already exists – click it, then the pencil icon to edit) |

> **Tip:** When you type `assets/icons/favicon.svg` in the name box, GitHub automatically creates the folders. Type the `/` slash and the folder appears.

### Step 3: Add the extra folders and your CV
- Click **Add file → Upload files**, drag your CV PDF, and before committing make sure the file is named **`Muhammad-Sadiq-CV.pdf`**. Then upload it into `assets/cv/`. (Easiest way: first create a file named `assets/cv/README.txt` with any text, then open the `cv` folder and use **Add file → Upload files** there.)
- Do the same with `assets/images/` if you want to add project screenshots later.

### Step 4: Turn on GitHub Pages
1. Repository → **Settings** → **Pages** (left menu).
2. Under **Build and deployment** → Source: **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. Wait 1–3 minutes. Refresh the Pages screen – it shows your website link.

### Step 5: Put in your real information
Open `script.js` → click the **pencil icon**. At the top is a section called `CONFIG`. This is the **only place** you need to edit: your email, GitHub link, LinkedIn link, project links, certificates, CGPA, etc.

Also replace `YOUR-USERNAME` in **`index.html`**, **`robots.txt`** and **`sitemap.xml`** with your real GitHub username (use the pencil icon, then `Ctrl+F` to find it).

---

## PART 2 – The code

---

## File 1: `index.html`

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO -->
  <title>Muhammad Sadiq | Generative AI Application & AI Agent Developer | Accounting & Finance</title>
  <meta name="description" content="Muhammad Sadiq is an Accounting & Finance student and Generative AI application developer building AI agents, financial research tools and multi-agent systems.">
  <meta name="keywords" content="Muhammad Sadiq AI Developer, Generative AI Application Developer, AI Agent Developer, Accounting and Finance Professional, AI Financial Research">
  <meta name="author" content="Muhammad Sadiq">
  <meta name="robots" content="index, follow">
  <!-- Replace YOUR-USERNAME with your GitHub username -->
  <link rel="canonical" href="https://YOUR-USERNAME.github.io/">

  <!-- Open Graph (link previews on LinkedIn, WhatsApp, etc.) -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Muhammad Sadiq | AI & Finance Developer">
  <meta property="og:description" content="Bridging Finance and Artificial Intelligence to Build Intelligent Solutions.">
  <meta property="og:url" content="https://YOUR-USERNAME.github.io/">
  <meta name="twitter:card" content="summary">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="assets/icons/favicon.svg">

  <!-- Fonts (free Google Fonts, with safe fallbacks) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css">

  <!-- Schema.org structured data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Sadiq",
    "jobTitle": "Generative AI Application Developer & Accounting and Finance Student",
    "url": "https://YOUR-USERNAME.github.io/",
    "alumniOf": "Kohat University of Science & Technology",
    "knowsAbout": ["Generative AI", "AI Agents", "Multi-Agent Systems", "Financial Analysis", "Investment Research", "Pakistan Stock Exchange"],
    "sameAs": [
      "https://github.com/YOUR-USERNAME",
      "https://www.linkedin.com/in/YOUR-PROFILE"
    ]
  }
  </script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>

  <!-- ========== HEADER / NAVIGATION ========== -->
  <header class="site-header">
    <nav class="nav container" aria-label="Main navigation">
      <a href="#home" class="logo" aria-label="Muhammad Sadiq – Home">MS<span>.</span></a>

      <ul class="nav-links" id="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#learning">Learning</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div class="nav-actions">
        <button class="icon-btn" id="theme-toggle" aria-label="Switch between dark and light mode">🌙</button>
        <button class="icon-btn menu-btn" id="menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">☰</button>
      </div>
    </nav>
  </header>

  <main id="main">

    <!-- ========== HERO ========== -->
    <section class="hero" id="home">
      <div class="container hero-grid">
        <div class="hero-text">
          <p class="eyebrow">Accounting & Finance | AI Application Developer</p>
          <h1>Muhammad <span class="gradient-text">Sadiq</span></h1>
          <p class="hero-title">Accounting & Finance | Generative AI Application Developer | AI Agent Developer</p>
          <p class="tagline">“Bridging Finance and Artificial Intelligence to Build Intelligent Solutions.”</p>
          <p class="hero-intro">
            I am an Accounting & Finance student with a strong interest in financial research, investment analysis, and Generative AI.
            I develop AI-powered applications and multi-agent systems using modern AI frameworks, APIs, and vibe coding techniques.
            My goal is to combine financial expertise with artificial intelligence to solve real-world business and financial problems.
          </p>
          <div class="btn-row">
            <a href="#projects" class="btn btn-primary">Explore Projects</a>
            <a href="assets/cv/Muhammad-Sadiq-CV.pdf" class="btn btn-outline" download>Download CV</a>
            <a href="#" class="btn btn-ghost" data-link="github" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" class="btn btn-ghost" data-link="linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <!-- Finance + AI inspired visual (pure SVG, no image files needed) -->
        <div class="hero-visual glass" aria-hidden="true">
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img">
            <defs>
              <linearGradient id="lg" x1="0" x2="1">
                <stop offset="0" stop-color="#38bdf8"/>
                <stop offset="1" stop-color="#a78bfa"/>
              </linearGradient>
            </defs>
            <g stroke="currentColor" stroke-opacity=".12">
              <line x1="20" y1="60" x2="380" y2="60"/><line x1="20" y1="120" x2="380" y2="120"/>
              <line x1="20" y1="180" x2="380" y2="180"/><line x1="20" y1="240" x2="380" y2="240"/>
            </g>
            <g fill="url(#lg)" opacity=".55">
              <rect x="40" y="190" width="28" height="50" rx="4"/>
              <rect x="95" y="160" width="28" height="80" rx="4"/>
              <rect x="150" y="175" width="28" height="65" rx="4"/>
              <rect x="205" y="130" width="28" height="110" rx="4"/>
              <rect x="260" y="105" width="28" height="135" rx="4"/>
              <rect x="315" y="70" width="28" height="170" rx="4"/>
            </g>
            <polyline class="chart-line" points="54,175 109,140 164,155 219,105 274,85 329,45"
              fill="none" stroke="url(#lg)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <g fill="#fff" stroke="url(#lg)" stroke-width="3">
              <circle cx="54" cy="175" r="6"/><circle cx="109" cy="140" r="6"/>
              <circle cx="164" cy="155" r="6"/><circle cx="219" cy="105" r="6"/>
              <circle cx="274" cy="85" r="6"/><circle cx="329" cy="45" r="6"/>
            </g>
            <text x="30" y="285" fill="currentColor" fill-opacity=".6" font-size="14" font-family="sans-serif">Finance  ×  AI Agents</text>
          </svg>
        </div>
      </div>
    </section>

    <!-- ========== ABOUT ========== -->
    <section class="section" id="about">
      <div class="container">
        <h2 class="section-title reveal">About Me</h2>
        <div class="about-grid">
          <div class="reveal">
            <p>
              I come from an <strong>Accounting & Finance</strong> academic background and I am deeply interested in financial markets and investment research.
              Alongside my studies, I am learning and building <strong>Generative AI applications</strong>.
            </p>
            <p>
              Through vibe coding, I have practically built AI-powered applications, including single-agent and multi-agent systems.
              My focus is on combining financial knowledge with AI technology, for example, using AI agents to support stock research, financial auditing and learning tools.
            </p>
            <p>
              I am an emerging professional who values learning by building, and I am open to internships, collaborations and projects at the intersection of finance and AI.
            </p>
          </div>
          <ul class="about-points reveal" id="about-points"></ul>
        </div>
      </div>
    </section>

    <!-- ========== SKILLS ========== -->
    <section class="section alt" id="skills">
      <div class="container">
        <h2 class="section-title reveal">Technical Skills</h2>
        <p class="section-sub reveal">
          Honest view of my skills: <strong>Practical</strong> means I have used it in my own work or projects,
          <strong>Familiar</strong> means I have studied it or used it at a basic level.
        </p>
        <div class="filter-row reveal" id="skill-filters" role="group" aria-label="Filter skills by experience level">
          <button class="chip active" data-level="all">All</button>
          <button class="chip" data-level="practical">Practical</button>
          <button class="chip" data-level="familiar">Familiar</button>
        </div>
        <div class="skills-grid" id="skills-grid"></div>
      </div>
    </section>

    <!-- ========== PROJECTS ========== -->
    <section class="section" id="projects">
      <div class="container">
        <h2 class="section-title reveal">Featured Projects</h2>
        <div class="filter-row reveal" id="project-filters" role="group" aria-label="Filter projects by category"></div>
        <div class="projects-grid" id="projects-grid"></div>
      </div>
    </section>

    <!-- ========== CERTIFICATIONS & LEARNING ========== -->
    <section class="section alt" id="learning">
      <div class="container">
        <h2 class="section-title reveal">Certifications & Learning</h2>
        <div class="cert-grid" id="cert-grid"></div>
      </div>
    </section>

    <!-- ========== EDUCATION ========== -->
    <section class="section" id="education">
      <div class="container">
        <h2 class="section-title reveal">Education</h2>
        <div class="edu-card glass reveal" id="edu-card"></div>
      </div>
    </section>

    <!-- ========== EXPERIENCE & ACTIVITIES ========== -->
    <section class="section alt" id="experience">
      <div class="container">
        <h2 class="section-title reveal">Experience & Activities</h2>
        <div class="timeline" id="activities"></div>
      </div>
    </section>

    <!-- ========== CONTACT ========== -->
    <section class="section" id="contact">
      <div class="container">
        <h2 class="section-title reveal">Get in Touch</h2>
        <div class="contact-card glass reveal">
          <p>I would be happy to connect about AI projects, finance research, internships or collaborations.</p>
          <div class="contact-list" id="contact-list"></div>
          <a href="assets/cv/Muhammad-Sadiq-CV.pdf" class="btn btn-primary" download>Download CV</a>
        </div>
      </div>
    </section>
  </main>

  <!-- ========== FOOTER ========== -->
  <footer class="footer">
    <div class="container footer-inner">
      <p>© <span id="year"></span> Muhammad Sadiq. All rights reserved.</p>
      <p class="muted">Accounting & Finance × Generative AI</p>
      <a href="#home" class="muted">Back to top ↑</a>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

## File 2: `style.css`

```css
/* ============ THEME COLORS ============ */
:root {
  --bg: #0a0f1c;
  --bg-alt: #0e1526;
  --card: rgba(255, 255, 255, 0.05);
  --card-border: rgba(255, 255, 255, 0.1);
  --text: #e8ecf5;
  --muted: #9aa6bf;
  --accent: #38bdf8;
  --accent-2: #a78bfa;
  --gradient: linear-gradient(135deg, #38bdf8, #a78bfa);
  --shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
  --radius: 16px;
  --header-h: 68px;
}

[data-theme="light"] {
  --bg: #f6f8fc;
  --bg-alt: #eaf0f9;
  --card: rgba(255, 255, 255, 0.75);
  --card-border: rgba(15, 23, 42, 0.1);
  --text: #0f172a;
  --muted: #55627a;
  --accent: #0369a1;
  --accent-2: #6d28d9;
  --gradient: linear-gradient(135deg, #0284c7, #7c3aed);
  --shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
}

/* ============ BASE ============ */
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; scroll-padding-top: var(--header-h); }
body {
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  transition: background 0.3s, color 0.3s;
}
h1, h2, h3 { font-family: "Space Grotesk", "Inter", system-ui, sans-serif; line-height: 1.2; }
a { color: var(--accent); text-decoration: none; }
ul { list-style: none; }
img { max-width: 100%; display: block; }
p + p { margin-top: 1rem; }

.container { width: min(1120px, 92%); margin: 0 auto; }
.muted { color: var(--muted); font-size: 0.9rem; }

.skip-link {
  position: absolute; left: -999px; top: 8px;
  background: var(--accent); color: #fff; padding: 8px 14px; border-radius: 8px; z-index: 200;
}
.skip-link:focus { left: 8px; }

:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; border-radius: 6px; }

/* ============ REUSABLE COMPONENTS ============ */
.glass {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: var(--shadow);
}

.gradient-text {
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.btn {
  display: inline-block;
  padding: 0.7rem 1.3rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  font-family: inherit;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary { background: var(--gradient); color: #fff; box-shadow: 0 6px 20px rgba(56, 189, 248, 0.3); }
.btn-outline { border-color: var(--accent); color: var(--accent); background: transparent; }
.btn-ghost { border-color: var(--card-border); color: var(--text); background: var(--card); }
.btn-small { padding: 0.45rem 0.95rem; font-size: 0.85rem; }
.btn.disabled { opacity: 0.55; cursor: not-allowed; pointer-events: none; }

.chip {
  padding: 0.4rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  background: var(--card);
  color: var(--text);
  cursor: pointer;
  font-family: inherit;
  font-size: 0.88rem;
  transition: all 0.2s;
}
.chip:hover { border-color: var(--accent); }
.chip.active { background: var(--gradient); color: #fff; border-color: transparent; }

.tag {
  display: inline-block;
  font-size: 0.78rem;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  background: rgba(56, 189, 248, 0.08);
  color: var(--muted);
}

.icon-btn {
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 1px solid var(--card-border);
  background: var(--card);
  color: var(--text);
  cursor: pointer;
  font-size: 1.05rem;
}

/* ============ HEADER ============ */
.site-header {
  position: fixed; top: 0; left: 0; right: 0;
  height: var(--header-h);
  z-index: 100;
  background: color-mix(in srgb, var(--bg) 80%, transparent);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--card-border);
}
.nav { display: flex; align-items: center; justify-content: space-between; height: var(--header-h); }
.logo { font-family: "Space Grotesk", sans-serif; font-size: 1.5rem; font-weight: 700; color: var(--text); }
.logo span { color: var(--accent); }
.nav-links { display: flex; gap: 1.5rem; }
.nav-links a { color: var(--muted); font-size: 0.93rem; font-weight: 500; transition: color 0.2s; }
.nav-links a:hover { color: var(--accent); }
.nav-actions { display: flex; gap: 0.6rem; }
.menu-btn { display: none; }

/* ============ SECTIONS ============ */
.section { padding: 5.5rem 0; }
.section.alt { background: var(--bg-alt); }
.section-title { font-size: clamp(1.7rem, 4vw, 2.3rem); margin-bottom: 1rem; }
.section-title::after {
  content: ""; display: block; width: 60px; height: 4px; margin-top: 0.6rem;
  border-radius: 4px; background: var(--gradient);
}
.section-sub { color: var(--muted); max-width: 720px; margin-bottom: 1.2rem; }

/* ============ HERO ============ */
.hero {
  min-height: 100vh;
  display: flex; align-items: center;
  padding: calc(var(--header-h) + 2rem) 0 3rem;
  background:
    radial-gradient(circle at 15% 20%, rgba(56, 189, 248, 0.18), transparent 40%),
    radial-gradient(circle at 85% 70%, rgba(167, 139, 250, 0.18), transparent 40%),
    var(--bg);
}
.hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; align-items: center; }
.eyebrow { color: var(--accent); font-weight: 600; letter-spacing: 0.05em; font-size: 0.9rem; margin-bottom: 0.7rem; }
.hero h1 { font-size: clamp(2.4rem, 7vw, 4.2rem); }
.hero-title { margin-top: 0.8rem; font-weight: 500; color: var(--text); }
.tagline { margin: 0.8rem 0; font-style: italic; color: var(--muted); }
.hero-intro { color: var(--muted); max-width: 620px; }
.btn-row { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 1.8rem; }
.hero-visual { padding: 1.5rem; color: var(--text); }
.hero-visual svg { width: 100%; height: auto; }
.chart-line { stroke-dasharray: 600; stroke-dashoffset: 600; animation: draw 2.2s ease forwards 0.4s; }
@keyframes draw { to { stroke-dashoffset: 0; } }

/* ============ ABOUT ============ */
.about-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 3rem; margin-top: 1.5rem; align-items: start; }
.about-points li {
  padding: 0.8rem 1rem; margin-bottom: 0.7rem;
  background: var(--card); border: 1px solid var(--card-border);
  border-left: 4px solid var(--accent); border-radius: 10px; font-size: 0.95rem;
}

/* ============ SKILLS ============ */
.filter-row { display: flex; flex-wrap: wrap; gap: 0.6rem; margin: 1rem 0 1.6rem; }
.skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.3rem; }
.skill-card { padding: 1.4rem; transition: transform 0.25s, border-color 0.25s; }
.skill-card:hover { transform: translateY(-4px); border-color: var(--accent); }
.skill-card h3 { font-size: 1.1rem; margin-bottom: 0.9rem; display: flex; gap: 0.5rem; align-items: center; }
.skill-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.skill {
  font-size: 0.85rem; padding: 0.3rem 0.8rem; border-radius: 999px;
  border: 1px solid var(--card-border); cursor: default;
}
.skill.practical { background: rgba(56, 189, 248, 0.14); border-color: rgba(56, 189, 248, 0.5); }
.skill.familiar { background: transparent; color: var(--muted); border-style: dashed; }
.skill.hidden { display: none; }
.skill-card.empty { display: none; }

/* ============ PROJECTS ============ */
.projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.6rem; }
.project-card { overflow: hidden; display: flex; flex-direction: column; transition: transform 0.25s, border-color 0.25s; }
.project-card:hover { transform: translateY(-6px); border-color: var(--accent); }
.project-card.hidden { display: none; }
.project-visual {
  height: 150px; display: grid; place-items: center; font-size: 3rem;
  background: var(--gradient); color: #fff;
}
.project-visual img { width: 100%; height: 100%; object-fit: cover; }
.project-body { padding: 1.3rem; display: flex; flex-direction: column; gap: 0.7rem; flex: 1; }
.project-category { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); font-weight: 600; }
.project-body h3 { font-size: 1.2rem; }
.project-body p { color: var(--muted); font-size: 0.93rem; }
.tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.project-actions { display: flex; gap: 0.6rem; margin-top: auto; padding-top: 0.6rem; flex-wrap: wrap; }

/* ============ CERTIFICATIONS ============ */
.cert-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.3rem; margin-top: 1.5rem; }
.cert-card { padding: 1.4rem; }
.cert-card .cert-icon { font-size: 1.8rem; }
.cert-card h3 { font-size: 1.05rem; margin: 0.5rem 0; }
.cert-card p { font-size: 0.88rem; color: var(--muted); margin: 0; }

/* ============ EDUCATION ============ */
.edu-card { padding: 2rem; margin-top: 1.5rem; }
.edu-card h3 { font-size: 1.4rem; }
.edu-meta { display: flex; flex-wrap: wrap; gap: 1.5rem; margin: 1rem 0; color: var(--muted); }
.edu-meta strong { color: var(--text); }

/* ============ EXPERIENCE ============ */
.timeline { margin-top: 1.5rem; border-left: 3px solid var(--accent); padding-left: 1.5rem; display: grid; gap: 1.3rem; }
.timeline-item { padding: 1.2rem 1.4rem; position: relative; }
.timeline-item::before {
  content: ""; position: absolute; left: -2.15rem; top: 1.5rem;
  width: 14px; height: 14px; border-radius: 50%; background: var(--accent); border: 3px solid var(--bg-alt);
}
.timeline-item h3 { font-size: 1.05rem; margin-bottom: 0.3rem; }
.timeline-item p { color: var(--muted); font-size: 0.93rem; margin: 0; }

/* ============ CONTACT ============ */
.contact-card { padding: 2rem; margin-top: 1.5rem; max-width: 640px; }
.contact-list { display: grid; gap: 0.7rem; margin: 1.3rem 0; }
.contact-list a { color: var(--text); }
.contact-list a:hover { color: var(--accent); }

/* ============ FOOTER ============ */
.footer { border-top: 1px solid var(--card-border); padding: 2rem 0; background: var(--bg-alt); }
.footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.8rem; }
.footer p { margin: 0; }

/* ============ SCROLL REVEAL ============ */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: none; }

/* ============ MOBILE ============ */
@media (max-width: 860px) {
  .hero-grid, .about-grid { grid-template-columns: 1fr; }
  .hero { min-height: auto; }
  .menu-btn { display: inline-block; }
  .nav-links {
    position: absolute; top: var(--header-h); left: 0; right: 0;
    flex-direction: column; gap: 0; padding: 0.5rem 4%;
    background: var(--bg); border-bottom: 1px solid var(--card-border);
    display: none;
  }
  .nav-links.open { display: flex; }
  .nav-links a { display: block; padding: 0.8rem 0; }
  .section { padding: 4rem 0; }
}

/* Respect users who prefer less motion */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation: none !important; transition: none !important; }
  .reveal { opacity: 1; transform: none; }
  .chart-line { stroke-dashoffset: 0; }
}
```

---

## File 3: `script.js`

> ✏️ **This is the file you will edit most.** Everything between `START OF CONFIG` and `END OF CONFIG` is your information. Change the text inside the quotes `"..."` only.
>
> - `level: "practical"` = you have really used it. `level: "familiar"` = you studied it / basic level. **Please check every skill honestly and change the level if needed.**
> - Leave a link as `""` (empty) and the button automatically shows as "Coming soon" (no broken links).

```js
/* =====================================================
   START OF CONFIG  –  EDIT YOUR INFORMATION HERE
   ===================================================== */
const CONFIG = {

  /* ---------- Contact & links ---------- */
  contact: {
    email: "your.email@example.com",                 // <-- your real email
    github: "https://github.com/YOUR-USERNAME",      // <-- your GitHub profile
    linkedin: "https://www.linkedin.com/in/YOUR-PROFILE" // <-- your LinkedIn profile
  },

  /* ---------- Short points shown in the About section ---------- */
  aboutPoints: [
    "🎓 Accounting & Finance academic background",
    "📈 Interest in financial markets and investment research",
    "🤖 Developing Generative AI applications",
    "⚙️ Building single-agent and multi-agent systems through vibe coding",
    "🔗 Combining financial knowledge with AI technology"
  ],

  /* ---------- Skills ---------- */
  skills: [
    {
      title: "Accounting & Finance", icon: "📊",
      items: [
        { name: "Financial Accounting", level: "practical" },
        { name: "Financial Statement Analysis", level: "practical" },
        { name: "Corporate Finance", level: "practical" },
        { name: "Financial Reporting", level: "familiar" },
        { name: "Fundamental Analysis", level: "practical" },
        { name: "Financial Ratio Analysis", level: "practical" },
        { name: "Investment Research", level: "practical" },
        { name: "Capital Budgeting", level: "familiar" },
        { name: "Financial Modeling", level: "familiar" },
        { name: "Risk Analysis", level: "familiar" }
      ]
    },
    {
      title: "Investment & Stock Market", icon: "💹",
      items: [
        { name: "Stock Market Research", level: "practical" },
        { name: "Investment Analysis", level: "practical" },
        { name: "Equity Valuation", level: "familiar" },
        { name: "Technical Analysis", level: "familiar" },
        { name: "Fundamental Stock Analysis", level: "practical" },
        { name: "Portfolio Analysis", level: "familiar" },
        { name: "Excel-Based Financial Analysis", level: "practical" },
        { name: "Pakistan Stock Exchange (PSX) Research", level: "practical" }
      ]
    },
    {
      title: "Generative AI & Agent Development", icon: "🤖",
      items: [
        { name: "Generative AI Application Development", level: "practical" },
        { name: "AI Agent Development", level: "practical" },
        { name: "Multi-Agent Systems", level: "practical" },
        { name: "Prompt Engineering", level: "practical" },
        { name: "LLM Integration", level: "practical" },
        { name: "AI Workflow Automation", level: "familiar" },
        { name: "RAG Applications", level: "familiar" },
        { name: "Vibe Coding", level: "practical" },
        { name: "AI Research Assistants", level: "practical" }
      ]
    },
    {
      title: "Programming & Development", icon: "💻",
      items: [
        { name: "Python", level: "practical" },
        { name: "Streamlit", level: "practical" },
        { name: "Gradio", level: "familiar" },
        { name: "CrewAI", level: "practical" },
        { name: "GitHub", level: "practical" },
        { name: "API Integration", level: "practical" },
        { name: "LangChain", level: "familiar" },
        { name: "JavaScript (basic)", level: "familiar" }
      ]
    },
    {
      title: "Data & Financial Tools", icon: "🧮",
      items: [
        { name: "Microsoft Excel", level: "practical" },
        { name: "Advanced Excel for Financial Analysis", level: "familiar" },
        { name: "QuickBooks", level: "familiar" },
        { name: "Tally Prime", level: "familiar" },
        { name: "Pandas", level: "practical" },
        { name: "NumPy", level: "familiar" },
        { name: "FAISS", level: "familiar" },
        { name: "Sentence Transformers", level: "familiar" },
        { name: "Google Colab", level: "practical" }
      ]
    },
    {
      title: "Productivity & Automation", icon: "⚡",
      items: [
        { name: "n8n", level: "familiar" },
        { name: "VS Code", level: "practical" },
        { name: "GitHub", level: "practical" },
        { name: "AI Coding Assistants", level: "practical" },
        { name: "Streamlit Cloud", level: "practical" },
        { name: "Google Workspace", level: "practical" }
      ]
    }
  ],

  /* ---------- Projects ----------
     demo / github: put the real link inside the quotes.
     Leave as "" and the button shows "Coming soon".
     image: optional, e.g. "assets/images/my-project.png". Leave "" to show an icon. */
  projects: [
    {
      name: "AI Investment Research System",
      category: "Finance & AI",
      icon: "📈",
      description: "An AI-powered research assistant for Pakistan Stock Exchange (PSX) stocks that follows a structured research workflow and a scoring framework to support investment analysis.",
      tech: ["Python", "Streamlit", "LLM API", "Prompt Engineering"],
      demo: "", github: "", image: ""
    },
    {
      name: "AI Financial Audit & Internal Control System",
      category: "Finance & AI",
      icon: "🧾",
      description: "A multi-agent AI system where specialised agents work together to review financial data and support audit and internal control checks.",
      tech: ["Python", "CrewAI", "Groq", "Streamlit"],
      demo: "", github: "", image: ""
    },
    {
      name: "AI Research Agent",
      category: "AI Agents",
      icon: "🔎",
      description: "An AI agent that gathers and summarises information on a given topic to support faster, better-organised research.",
      tech: ["Python", "LLM API", "Streamlit"],
      demo: "", github: "", image: ""
    },
    {
      name: "Intrinsic Value Calculator",
      category: "Finance Tools",
      icon: "🧮",
      description: "A tool that helps estimate the intrinsic value of a company's stock using valuation inputs, supporting fundamental analysis.",
      tech: ["Python", "Streamlit", "Pandas"],
      demo: "", github: "", image: ""
    },
    {
      name: "AI Resume Reviewer",
      category: "AI Agents",
      icon: "📄",
      description: "A single-agent application that reviews a resume and gives clear, structured feedback for improvement.",
      tech: ["Python", "CrewAI", "Groq", "Streamlit"],
      demo: "", github: "", image: ""
    },
    {
      name: "AI Learning Assistant",
      category: "AI Apps",
      icon: "🎓",
      description: "An AI assistant that supports learning by explaining topics and helping with study and practice.",
      tech: ["Python", "LLM API", "Streamlit"],
      demo: "", github: "", image: ""
    }
  ],

  /* ---------- Certifications & learning ----------
     Fill in issuer and date only when you have them. Never add details you do not have. */
  certifications: [
    { icon: "🤖", title: "Generative AI Applications and Agents Development", issuer: "Add issuing organization", date: "Add completion date" },
    { icon: "📈", title: "Investment in Stocks", issuer: "Add issuing organization", date: "Add completion date" },
    { icon: "💻", title: "Digital Information Technology (DIT)", issuer: "Add issuing organization", date: "Add completion date" },
    { icon: "🗣️", title: "English Language Diploma", issuer: "Add issuing organization", date: "Add completion date" },
    { icon: "📣", title: "Digital Marketing", issuer: "Add issuing organization", date: "Add completion date" }
  ],

  /* ---------- Education ---------- */
  education: {
    degree: "BS Accounting & Finance",
    university: "Kohat University of Science & Technology (KUST)",
    cgpa: "Add your CGPA",
    duration: "Add academic duration (e.g. 2023 – 2027)",
    coursework: ["Add relevant course 1", "Add relevant course 2", "Add relevant course 3"]
  },

  /* ---------- Experience & activities ---------- */
  activities: [
    { title: "AI Application Development Projects", text: "Built AI-powered applications for finance and learning using Python, Streamlit and LLM APIs." },
    { title: "Multi-Agent System Development", text: "Developed single-agent and multi-agent systems, including financial audit and resume review projects, using CrewAI." },
    { title: "Financial Research Projects", text: "Researched Pakistan Stock Exchange (PSX) stocks using fundamental analysis and structured scoring." },
    { title: "Academic Leadership – Class Representative", text: "Served as Class Representative, acting as the link between students and faculty." },
    { title: "Workshops & Hackathons", text: "Participated in AI-focused hackathon projects and relevant workshops. Add names and dates here." }
  ]
};
/* =====================================================
   END OF CONFIG  –  you do not need to edit below
   ===================================================== */


/* ---------- Small helper ---------- */
const $ = (selector) => document.querySelector(selector);

/* ---------- Theme (dark / light) ---------- */
function initTheme() {
  const root = document.documentElement;
  const button = $("#theme-toggle");
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) { /* storage blocked – ignore */ }
  if (!saved) {
    saved = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  applyTheme(saved);

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    button.textContent = theme === "dark" ? "🌙" : "☀️";
  }

  button.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
  });
}

/* ---------- Mobile menu ---------- */
function initMenu() {
  const menuBtn = $("#menu-btn");
  const links = $("#nav-links");

  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "✕" : "☰";
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    })
  );
}

/* ---------- Contact / social links ---------- */
function renderLinks() {
  document.querySelectorAll("[data-link]").forEach((el) => {
    el.href = CONFIG.contact[el.dataset.link];
  });

  $("#contact-list").innerHTML = `
    <a href="mailto:${CONFIG.contact.email}">✉️ ${CONFIG.contact.email}</a>
    <a href="${CONFIG.contact.github}" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
    <a href="${CONFIG.contact.linkedin}" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
  `;
}

/* ---------- About ---------- */
function renderAbout() {
  $("#about-points").innerHTML = CONFIG.aboutPoints.map((p) => `<li>${p}</li>`).join("");
}

/* ---------- Skills ---------- */
function renderSkills() {
  $("#skills-grid").innerHTML = CONFIG.skills.map((group) => `
    <article class="skill-card glass reveal">
      <h3><span aria-hidden="true">${group.icon}</span> ${group.title}</h3>
      <div class="skill-list">
        ${group.items.map((s) => `
          <span class="skill ${s.level}" data-level="${s.level}"
                title="${s.level === "practical" ? "Practical experience" : "Familiar / studied"}">${s.name}</span>
        `).join("")}
      </div>
    </article>
  `).join("");

  $("#skill-filters").addEventListener("click", (event) => {
    const btn = event.target.closest(".chip");
    if (!btn) return;
    document.querySelectorAll("#skill-filters .chip").forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    const level = btn.dataset.level;

    document.querySelectorAll(".skill").forEach((el) => {
      el.classList.toggle("hidden", level !== "all" && el.dataset.level !== level);
    });
    document.querySelectorAll(".skill-card").forEach((card) => {
      const anyVisible = card.querySelector(".skill:not(.hidden)");
      card.classList.toggle("empty", !anyVisible);
    });
  });
}

/* ---------- Projects ---------- */
function linkButton(url, label, style) {
  if (url) {
    return `<a class="btn ${style} btn-small" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  }
  return `<span class="btn ${style} btn-small disabled" aria-disabled="true">${label} – Coming soon</span>`;
}

function renderProjects() {
  const grid = $("#projects-grid");

  grid.innerHTML = CONFIG.projects.map((p) => `
    <article class="project-card glass reveal" data-category="${p.category}">
      <div class="project-visual" aria-hidden="${p.image ? "false" : "true"}">
        ${p.image ? `<img src="${p.image}" alt="Screenshot of ${p.name}" loading="lazy">` : p.icon}
      </div>
      <div class="project-body">
        <span class="project-category">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="tags">${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="project-actions">
          ${linkButton(p.demo, "Live Demo", "btn-primary")}
          ${linkButton(p.github, "GitHub", "btn-ghost")}
        </div>
      </div>
    </article>
  `).join("");

  // Filter buttons are created automatically from project categories
  const categories = ["All", ...new Set(CONFIG.projects.map((p) => p.category))];
  const filterBox = $("#project-filters");
  filterBox.innerHTML = categories
    .map((c, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`)
    .join("");

  filterBox.addEventListener("click", (event) => {
    const btn = event.target.closest(".chip");
    if (!btn) return;
    filterBox.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".project-card").forEach((card) => {
      const show = btn.dataset.cat === "All" || card.dataset.category === btn.dataset.cat;
      card.classList.toggle("hidden", !show);
    });
  });
}

/* ---------- Certifications ---------- */
function renderCerts() {
  $("#cert-grid").innerHTML = CONFIG.certifications.map((c) => `
    <article class="cert-card glass reveal">
      <div class="cert-icon" aria-hidden="true">${c.icon}</div>
      <h3>${c.title}</h3>
      <p>Issuer: ${c.issuer}</p>
      <p>Completed: ${c.date}</p>
    </article>
  `).join("");
}

/* ---------- Education ---------- */
function renderEducation() {
  const e = CONFIG.education;
  $("#edu-card").innerHTML = `
    <h3>${e.degree}</h3>
    <p>${e.university}</p>
    <div class="edu-meta">
      <span><strong>CGPA:</strong> ${e.cgpa}</span>
      <span><strong>Duration:</strong> ${e.duration}</span>
    </div>
    <p><strong>Relevant coursework</strong></p>
    <div class="tags" style="margin-top:.6rem">${e.coursework.map((c) => `<span class="tag">${c}</span>`).join("")}</div>
  `;
}

/* ---------- Experience & activities ---------- */
function renderActivities() {
  $("#activities").innerHTML = CONFIG.activities.map((a) => `
    <div class="timeline-item glass reveal">
      <h3>${a.title}</h3>
      <p>${a.text}</p>
    </div>
  `).join("");
}

/* ---------- Scroll reveal animation ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => observer.observe(el));
}

/* ---------- Start everything ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMenu();
  renderLinks();
  renderAbout();
  renderSkills();
  renderProjects();
  renderCerts();
  renderEducation();
  renderActivities();
  $("#year").textContent = new Date().getFullYear();
  initReveal(); // keep this last, so it also catches the cards created above
});
```

---

## File 4: `robots.txt`

Replace `YOUR-USERNAME` with your GitHub username.

```text
User-agent: *
Allow: /

Sitemap: https://YOUR-USERNAME.github.io/sitemap.xml
```

---

## File 5: `sitemap.xml`

Replace `YOUR-USERNAME` with your GitHub username. Change the date when you make big updates.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://YOUR-USERNAME.github.io/</loc>
    <lastmod>2026-11-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## File 6: `assets/icons/favicon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#38bdf8"/>
      <stop offset="1" stop-color="#a78bfa"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="#0a0f1c"/>
  <text x="32" y="43" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="url(#g)">MS</text>
</svg>
```

---

## File 7: `README.md`

```text
# Muhammad Sadiq – Portfolio Website

Personal portfolio of Muhammad Sadiq, Accounting & Finance student and Generative AI Application & Agent Developer.

## Built with
HTML5, CSS3 and JavaScript. No backend, no build tools, no paid services.

## How to edit
1. Open script.js.
2. Edit the CONFIG section at the top (email, links, projects, certificates, education).
3. Commit the change. The website updates in 1-3 minutes.

## Folder structure
index.html, style.css, script.js, robots.txt, sitemap.xml
assets/images (project screenshots), assets/icons (favicon), assets/cv (CV PDF)

## Live website
https://YOUR-USERNAME.github.io/
```

---

## PART 3 – After it is live (checklist)

1. ✅ Open your website link and click every button.
2. ✅ Replace **`YOUR-USERNAME`** and **`YOUR-PROFILE`** everywhere (index.html, script.js, robots.txt, sitemap.xml, README.md).
3. ✅ Upload your CV as `assets/cv/Muhammad-Sadiq-CV.pdf`. *Until you upload it, the "Download CV" button will show a "not found" page.*
4. ✅ In `script.js`, check every skill's `level` and make sure it is honest.
5. ✅ Add real project links (`demo` and `github`) when your apps are deployed. Add screenshots to `assets/images/` and write the path in `image`.
6. ✅ Fill in CGPA, duration, coursework, certificate issuers and dates.
7. ✅ Optional for Google: add your site in **Google Search Console** and submit `sitemap.xml`. (Google decides if and when to show your site, nothing can promise a ranking.)

## Common problems

| Problem | Fix |
|---|---|
| Page shows only README text | Make sure `index.html` is in the main folder, not inside another folder. |
| Page looks plain, no design | File name must be exactly `style.css` (small letters). |
| Sections are empty | File name must be exactly `script.js`, and you must not delete the `{` `}` or `,` symbols while editing. |
| Changes not showing | Wait 2 minutes, then refresh with `Ctrl + Shift + R`. |
| Website link gives 404 | Settings → Pages → check Branch is `main` and folder is `/ (root)`. |
