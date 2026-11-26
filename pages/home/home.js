const projects = [
  {
    id: "BUILD_001",
    name: "QueueUp",
    month: "Month 01",
    week: "Week 01",
    category: "React + Vite",
    status: "planned",
    description: "A product-focused queue management application.",
    stack: ["React", "Vite", "JavaScript"],
    problem: "Describe the user problem this project is intended to solve.",
    features: [
      "Add the core user workflow",
      "Document the architecture",
      "Test and deploy the MVP",
    ],
    learning:
      "Record the engineering concepts and decisions you learn during this build.",
    demo: "#",
    github: "#",
    docs: "#",
  },
  {
    id: "BUILD_002",
    name: "Trackly",
    month: "Month 01",
    week: "Week 02",
    category: "React + Vite",
    status: "upcoming",
    description: "A tracking product from the 24-month engineering roadmap.",
    stack: ["React", "Vite"],
    problem: "Add the problem statement after planning.",
    features: [
      "Define the MVP",
      "Implement the main workflow",
      "Test with users",
    ],
    learning: "Add lessons after completing the build.",
  },
  {
    id: "BUILD_003",
    name: "FeedbackFlow",
    month: "Month 01",
    week: "Week 03",
    category: "React + Vite",
    status: "upcoming",
    description: "A feedback collection and organization product.",
    stack: ["React", "Vite"],
    problem: "Add the problem statement after planning.",
    features: [
      "Create a feedback flow",
      "Organize submissions",
      "Review and iterate",
    ],
    learning: "Add lessons after completing the build.",
  },
  {
    id: "BUILD_004",
    name: "FormForge",
    month: "Month 01",
    week: "Week 04",
    category: "React + Vite",
    status: "upcoming",
    description:
      "A form-building product focused on a clear creation and response workflow.",
    stack: ["React", "Vite"],
    problem: "Add the problem statement after planning.",
    features: [
      "Build a form editor",
      "Collect responses",
      "Validate the experience",
    ],
    learning: "Add lessons after completing the build.",
  },
];

const skills = [
  {
    group: "Languages & foundations",
    name: "JavaScript",
    meta: "Frontend and application logic",
    symbol: "JS",
  },
  {
    group: "Languages & foundations",
    name: "Java",
    meta: "Object-oriented programming",
    symbol: "JV",
  },
  {
    group: "Languages & foundations",
    name: "Python",
    meta: "Scripting and application development",
    symbol: "PY",
  },
  {
    group: "Languages & foundations",
    name: "C / C++",
    meta: "Systems and lower-level programming",
    symbol: "C+",
  },
  {
    group: "Web & application development",
    name: "HTML & CSS",
    meta: "Semantic interfaces and styling",
    symbol: "<>",
  },
  {
    group: "Web & application development",
    name: "React",
    meta: "Component-based user interfaces",
    symbol: "RE",
  },
  {
    group: "Web & application development",
    name: "Spring Boot",
    meta: "Java backend development",
    symbol: "SB",
  },
  {
    group: "Web & application development",
    name: "Node.js",
    meta: "JavaScript runtime and APIs",
    symbol: "ND",
  },
  {
    group: "Data & infrastructure",
    name: "SQL",
    meta: "Relational data and queries",
    symbol: "DB",
  },
  {
    group: "Data & infrastructure",
    name: "Supabase",
    meta: "Database, authentication, and storage",
    symbol: "SB",
  },
  {
    group: "Data & infrastructure",
    name: "Firebase",
    meta: "Database, authentication, and storage",
    symbol: "FB",
  },
  {
    group: "Data & infrastructure",
    name: "Git & GitHub",
    meta: "Version control and collaboration",
    symbol: "GH",
  },
];

const credentials = [
  {
    type: "Coursework",
    title: "M.I.T - Python For Data Science & Machine Learning",
    date: "Grade: PASS",
  },
  {
    type: "Coursework", 
    title:
      "Rowan ENT 06110: Interdisciplinary Perspectives on Entrepreneurship",
    date: "Grade: PASS",
  },
  {
    type: "Coursework",
    title: "Harvard PHYS S-12: Introduction To Digital Fabrication",
    date: "Grade: A",
  },
  {
    type: "Coursework",
    title: "Harvard CSCI S-212: Introduction To Kali Linux & Ethical Hacking",
    date: "Grade: A",
  },
  { type: "Academic", title: "Honors Algebra I", date: "Grade: A+" },
  { type: "Academic", title: "Honors Algebra II", date: "Grade: A+" },
  { type: "Academic", title: "Honors Geometry", date: "Grade: A+" },
  { type: "Academic", title: "Engineering I", date: "Grade: A+" },
  {
    type: "Academic",
    title: "Introduction to Computer Science",
    date: "Grade: A+",
  },
  { type: "Academic", title: "AP Computer Science A", date: "Score: 5" },
  { type: "Academic", title: "AP Physics I", date: "Score: 5" },
  { type: "Academic", title: "AP Precalculus", date: "Score: 5" },
];

const articles = [
  {
    type: "INTRODUCTION",
    title: "The Beginning",
    description:
      "The first day of a 24-month commitment to building 96 software products.",
    date: "11/16/2026",
    url: "journal.html",
  },

];

const instagramPosts = [
  {
    label: "THE CHALLENGE",
    title: "96 Builds. 24 Months.",
    url: "https://www.instagram.com/p/DfvVoQEgeoc/",
  },
];

const projectGrid = document.querySelector("#projectGrid");
const projectFilters = document.querySelector("#projectFilters");
const projectsSearch = document.querySelector("#projectsSearch");
const projectSort = document.querySelector("#projectSort");

let activeCategory = "All";

function escapeHTML(value = "") {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char],
  );
}

function renderFilters() {
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  projectFilters.innerHTML = categories
    .map(
      (category) =>
        `<button class="filter-pill ${category === activeCategory ? "active" : ""}"
      type="button"
      data-category="${escapeHTML(category)}">
      ${escapeHTML(category)}
    </button>`,
    )
    .join("");
}

function renderProjects() {
  let visible = projects.filter((project) => {
    const search = projectsSearch.value.trim().toLowerCase();

    const matchesSearch = [
      project.name,
      project.description,
      project.category,
      project.id,
      ...(project.stack || []),
    ]
      .join(" ")
      .toLowerCase()
      .includes(search);

    return (
      matchesSearch &&
      (activeCategory === "All" || project.category === activeCategory)
    );
  });

  if (projectSort.value === "name") {
    visible.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    visible.sort((a, b) => projects.indexOf(a) - projects.indexOf(b));
  }

  projectGrid.innerHTML = visible.length
    ? visible
        .map(
          (project) => `
      <article class="project-card"
        tabindex="0"
        role="button"
        data-project="${escapeHTML(project.id)}"
        aria-label="Open ${escapeHTML(project.name)} details">

        <div class="project-card-top">
          <span class="project-id">${escapeHTML(project.id)} · ${escapeHTML(project.month)}</span>
          <span class="project-status">
            ${escapeHTML(
              project.status === "planned"
                ? "● PLANNED"
                : project.status === "in-progress"
                  ? "● IN PROGRESS"
                  : "○ UPCOMING",
            )}
          </span>
        </div>

        <h3 class="project-title">${escapeHTML(project.name)}</h3>
        <p class="project-description">${escapeHTML(project.description)}</p>

        <div class="project-tags">
          ${(project.stack || [])
            .map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`)
            .join("")}
        </div>

        <span class="project-open">OPEN RECORD ↗</span>
      </article>
    `,
        )
        .join("")
    : `<div class="empty-state">No builds match that search. Try another term or category.</div>`;
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const content = document.querySelector("#projectDialogContent");

  const links = [
    ["Live demo", project.demo],
    ["GitHub repository", project.github],
    ["Documentation PDF", project.docs],
  ].filter(([, url]) => url && url !== "#");

  content.innerHTML = `
    <span class="dialog-kicker">
      ${escapeHTML(project.id)} / ${escapeHTML(project.month)} · ${escapeHTML(project.week || "")}
    </span>

    <h2 class="dialog-title">${escapeHTML(project.name)}</h2>

    <p class="dialog-description">${escapeHTML(project.description)}</p>

    <div class="dialog-block">
      <h4>Build status</h4>
      <p>${escapeHTML(project.status || "Not specified")} · ${escapeHTML(project.category)}</p>
    </div>

    <div class="dialog-block">
      <h4>Problem being explored</h4>
      <p>${escapeHTML(project.problem || "Add the problem statement to this project record.")}</p>
    </div>

    <div class="dialog-block">
      <h4>Planned / implemented features</h4>
      <ul>
        ${(project.features || []).map((feature) => `<li>${escapeHTML(feature)}</li>`).join("")}
      </ul>
    </div>

    <div class="dialog-block">
      <h4>Engineering notes</h4>
      <p>${escapeHTML(project.learning || "Document architecture, implementation decisions, debugging, testing, and lessons learned here.")}</p>
    </div>

    <div class="dialog-block">
      <h4>Technology</h4>
      <p>${(project.stack || []).map(escapeHTML).join(" · ")}</p>
    </div>

    ${
      links.length
        ? `
      <div class="dialog-block">
        <h4>Project resources</h4>
        <p>
          ${links
            .map(
              ([label, url]) =>
                `<a class="text-link" href="${escapeHTML(url)}" target="_blank" rel="noopener">${escapeHTML(label)} ↗</a>`,
            )
            .join(" &nbsp;·&nbsp; ")}
        </p>
      </div>
    `
        : ""
    }
  `;

  document.querySelector("#projectDialog").showModal();
}

// Project filters
projectFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderFilters();
  renderProjects();
});

// Project search and sorting
projectsSearch.addEventListener("input", renderProjects);
projectSort.addEventListener("change", renderProjects);

// Project cards
projectGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project]");
  if (card) openProject(card.dataset.project);
});

projectGrid.addEventListener("keydown", (event) => {
  if (
    (event.key === "Enter" || event.key === " ") &&
    event.target.matches("[data-project]")
  ) {
    event.preventDefault();
    openProject(event.target.dataset.project);
  }
});

// Project dialog
document.querySelector("#dialogClose").addEventListener("click", () => {
  document.querySelector("#projectDialog").close();
});

document.querySelector("#projectDialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    event.currentTarget.close();
  }
});

// Skills
function renderSkills(query = "") {
  const filtered = skills.filter((skill) =>
    `${skill.group} ${skill.name} ${skill.meta}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  const groups = [...new Set(filtered.map((skill) => skill.group))];

  document.querySelector("#skillsGrid").innerHTML = filtered.length
    ? groups
        .map(
          (group) => `
        <h3 class="skill-group">${escapeHTML(group)}</h3>

        ${filtered
          .filter((skill) => skill.group === group)
          .map(
            (skill) => `
          <article class="skill-card">
            <span class="skill-symbol">${escapeHTML(skill.symbol)}</span>
            <div>
              <div class="skill-name">${escapeHTML(skill.name)}</div>
              <div class="skill-meta">${escapeHTML(skill.meta)}</div>
            </div>
          </article>
        `,
          )
          .join("")}
      `,
        )
        .join("")
    : `<div class="empty-state">No matching technologies.</div>`;
}

document.querySelector("#skillsSearch").addEventListener("input", (event) => {
  renderSkills(event.target.value);
});

// Credentials
document.querySelector("#credentialsGrid").innerHTML = credentials
  .map(
    (item) => `
  <article class="credential-card">
    <span class="credential-type">${escapeHTML(item.type)}</span>
    <h3 class="credential-title">${escapeHTML(item.title)}</h3>
    <p class="credential-date">${escapeHTML(item.date)}</p>
  </article>
`,
  )
  .join("");

// Blog articles
document.querySelector("#blogGrid").innerHTML = articles
  .map(
    (article) => `
  <article class="journal-card">
    <span class="journal-type">${escapeHTML(article.type)} · ${escapeHTML(article.date)}</span>
    <h3>${escapeHTML(article.title)}</h3>
    <p>${escapeHTML(article.description)}</p>
    <a href="${escapeHTML(article.url)}">READ ARTICLE ↗</a>
  </article>
`,
  )
  .join("");

// Instagram posts
document.querySelector("#instagramGrid").innerHTML = instagramPosts
  .map(
    (post) => `
  <article class="instagram-card">
    <span>${escapeHTML(post.label)}</span>
    <strong>${escapeHTML(post.title)}</strong>
    <a href="${escapeHTML(post.url)}" target="_blank" rel="noopener">VIEW POST ↗</a>
  </article>
`,
  )
  .join("");

document.querySelector("#instagramProfile").href =
  "https://www.instagram.com/cr3o.engineering/";


document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);

  const recipient = "joshuauzokwe12@gmail.com";

  const subject = encodeURIComponent(
    `${data.get("reason")} — Portfolio contact`,
  );

  const body = encodeURIComponent(
    `Name: ${data.get("firstName")} ${data.get("lastName")}\n` +
      `Email: ${data.get("email")}\n` +
      `Reason: ${data.get("reason")}\n\n` +
      `${data.get("message")}`,
  );


  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

  document.querySelector("#formStatus").textContent =
    "Your email app should open with the message prepared.";
});

// Mobile navigation
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Current year
document.querySelector("#year").textContent = new Date().getFullYear();

// Initial rendering
renderFilters();
renderProjects();
renderSkills();
