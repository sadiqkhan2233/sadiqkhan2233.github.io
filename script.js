/* =====================================================
   START OF CONFIG  –  EDIT YOUR INFORMATION HERE
   ===================================================== */
const CONFIG = {

  /* ---------- Contact & links ---------- */
  contact: {
    phone:"03317541373",
    email: "afridisadiq949@gmail.com",                 // <-- your real email
    github: "https://github.com/sadiqkhan2233",      // <-- your GitHub profile
    linkedin: "https://www.linkedin.com/in/Sadiq_Afridi" // <-- your LinkedIn profile
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
