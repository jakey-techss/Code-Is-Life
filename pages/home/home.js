/*
 * PORTFOLIO DATA
 * ---------------------------------------------------------
 * To add/edit content, you normally only need to edit:
 *   1. skillsData
 *   2. projectsData
 *   3. credentialsData
 *
 * Images use paths relative to your website root.
 */

const skillsData = [
    {
        id: "html",
        title: "HTML",
        image: "assets/html (1).png",
        experience: 6,
        category: "Web Development"
    },
    {
        id: "css",
        title: "CSS",
        image: "assets/css.png",
        experience: 6,
        category: "Web Development"
    },
    {
        id: "javascript",
        title: "JavaScript",
        image: "assets/javascript.png",
        experience: 3,
        category: "Web Development"
    },
    {
        id: "python",
        title: "Python",
        image: "assets/python.png",
        experience: 3,
        category: "Machine Learning & AI"
    },
    {
        id: "firebase",
        title: "Firebase",
        image: "assets/firebase.png",
        experience: 2,
        category: "Web Development"
    },
    {
        id: "java",
        title: "Java",
        image: "assets/java (1).png",
        experience: 1,
        category: "Software Development"
    },
    {
        id: "react",
        title: "React",
        image: "assets/react.png",
        experience: 1,
        category: "Web Development"
    },
    {
        id: "kotlin",
        title: "Kotlin",
        image: "assets/kotlin.png",
        experience: 1,
        category: "Software Development"
    },
    {
        id: "swift",
        title: "SwiftUI",
        image: "assets/swift.png",
        experience: 2,
        category: "Software Development"
    },
    {
        id: "redis",
        title: "RedisDB",
        image: "assets/redis.png",
        experience: 1,
        category: "Software Development"
    },
    {
        id: "flutter",
        title: "Flutter",
        image: "assets/flutter.png",
        experience: 1,
        category: "Software Development"
    },
    {
        id: "sql",
        title: "SQL",
        image: "assets/sql.png",
        experience: 2,
        category: "Software Development"
    },
    {
        id: "api",
        title: "API Development",
        image: "assets/api.png",
        experience: 1,
        category: "Web Development"
    },
    {
        id: "wix",
        title: "Wix",
        image: "assets/wix.png",
        experience: 5,
        category: "Web Development"
    },
    {
        id: "raspberry-pi",
        title: "Raspberry Pi",
        image: "assets/raspberry.png",
        experience: 2,
        category: "Hardware & Other"
    },
    {
        id: "git",
        title: "Git",
        image: "assets/git.png",
        experience: 2,
        category: "Software Development"
    },
    {
        id: "github",
        title: "GitHub",
        image: "assets/github.png",
        experience: 2,
        category: "Software Development"
    },
    {
        id: "arduino",
        title: "Arduino",
        image: "assets/arduino.png",
        experience: 2,
        category: "Hardware & Other"
    },
    {
        id: "figma",
        title: "Figma",
        image: "assets/figma.png",
        experience: 2,
        category: "UI / UX"
    },
    {
        id: "canva",
        title: "Canva",
        image: "assets/canva.png",
        experience: 4,
        category: "UI / UX"
    },
    {
        id: "3d",
        title: "3D Printing & Modeling",
        image: "assets/fusion.png",
        experience: 1,
        category: "Hardware & Other"
    }
];

const projectsData = [
    {
        id: "stellar-ed",
        title: "Stellar Ed",
        description: "A student platform for tracking homework, deadlines, and study progress.",
        image: "https://github.com/jakey-techss/StellarEd/blob/main/assets/Stellar-removebg-preview.png?raw=true",
        tags: ["Education", "Web", "AI"],
        tools: ["html", "css", "javascript", "firebase", "figma", "api", "github", "git"],
        categories: ["Web Development", "Project Demo"],
        dateCreated: new Date(2025, 10, 30),
        url: "https://github.com/jakey-techss/StellarEd"
    },
    {
        id: "inventa-software",
        title: "Inventa",
        description: "Modular robotics platform with custom hardware and visual node-based programming.",
        image: "assets/Thumbnail.png",
        tags: ["Education", "Web", "AI"],
        tools: ["html", "css", "javascript", "api", "github", "git", "arduino", "3d"],
        categories: ["Web Development", "Project Demo","Hardware"],
        dateCreated: new Date(2026, 8, 9),
        url: "https://inventa-phys-s-12.vercel.app"
    },
    {
        id: "astryx",
        title: "Astryx",
        description: "A career app that recommends careers and guides users toward achieving them.",
        image: "assets/App_Icon-removebg-preview.png",
        tags: ["Career", "AI", "Software"],
        tools: ["java", "redis", "api", "canva", "figma"],
        categories: ["Software Development", "Machine Learning & AI"],
        dateCreated: new Date(2026, 4, 1)
    },
    {
        id: "z-arena",
        title: "Z-Arena",
        description: "An anime card game where strategy and luck decide victory.",
        image: "assets/z-arena.png",
        tags: ["Game", "Strategy", "Anime"],
        tools: ["java", "html", "css", "javascript", "figma", "git", "github"],
        categories: ["Game Development", "Project Demo"],
        dateCreated: new Date(2026, 4, 1)
    },
    {
        id: "gravity-x",
        title: "Gravity X",
        description: "A physics web game designed to support teachers teaching topics relating to gravity.",
        image: "assets/GravityX.png",
        tags: ["Physics", "Education", "Web"],
        tools: ["html", "css", "javascript", "figma", "git", "github"],
        categories: ["Web Development", "Game Development", "Project Demo"],
        dateCreated: new Date(2026, 4, 1)
    },
    {
        id: "hoopz-to-greatness",
        title: "Hoopz To Greatness",
        description: "An initiative that uses education to help youth achieve a brighter future.",
        image: "assets/HTG.png",
        tags: ["Education", "Community", "Web"],
        tools: ["html", "css", "figma", "git", "github"],
        categories: ["Web Development", "Project Demo"],
        dateCreated: new Date(2026, 4, 1)
    }
];

const credentialsData = [
    {
        id: "mit-data-science",
        title: "MIT Data Science & Machine Learning Course",
        type: "Certification",
        image: "assets/AICRED.png",
        date: "2025"
    },
    {
        id: "rowan-entrepreneur",
        title: "Rowan University Think Like An Entrepreneur Graduate",
        type: "Award / Program",
        image: "assets/Business.png",
        date: "2025"
    }
];

/* =========================================================
   RENDERING
   ========================================================= */

const $ = (selector) => document.querySelector(selector);

const state = {
    skillSearch: "",
    credentialSearch: "",
    projectSearch: "",
    projectCategory: "All",
    projectSort: "newest"
};

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric"
    }).format(date);
}

function getProjectCount(skillId) {
    return projectsData.filter(project => project.tools.includes(skillId)).length;
}

function renderSkills() {
    const container = $("#skillsGrid");
    const query = state.skillSearch.trim().toLowerCase();

    const filtered = skillsData.filter(skill =>
        `${skill.title} ${skill.category}`.toLowerCase().includes(query)
    );

    if (!filtered.length) {
        container.innerHTML = `<div class="empty-state">No skills found.</div>`;
        return;
    }

    const categories = [...new Set(skillsData.map(skill => skill.category))];

    container.innerHTML = categories
        .map(category => {
            const skills = filtered.filter(skill => skill.category === category);

            if (!skills.length) return "";

            return `
                <div class="skill-group">
                    <div class="skill-group-title">${escapeHTML(category)}</div>
                    <div class="skills-grid">
                        ${skills.map(skill => `
                            <article class="skill-card">
                                <div class="skill-icon">
                                    <img src="${escapeHTML(skill.image)}" alt="" loading="lazy">
                                </div>
                                <div>
                                    <h3 class="skill-name">${escapeHTML(skill.title)}</h3>
                                    <p class="skill-meta">${skill.experience} ${skill.experience === 1 ? "year" : "years"} experience</p>
                                    <p class="skill-projects">${getProjectCount(skill.id)} ${getProjectCount(skill.id) === 1 ? "project" : "projects"}</p>
                                </div>
                            </article>
                        `).join("")}
                    </div>
                </div>
            `;
        })
        .join("");
}

function renderCredentials() {
    const container = $("#credentialsGrid");
    const query = state.credentialSearch.trim().toLowerCase();

    const filtered = credentialsData.filter(item =>
        `${item.title} ${item.type} ${item.date}`.toLowerCase().includes(query)
    );

    container.innerHTML = filtered.length
        ? filtered.map(item => `
            <article class="credential-card">
                <div class="credential-image">
                    <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy">
                </div>
                <div class="credential-content">
                    <div class="credential-type">${escapeHTML(item.type)}</div>
                    <h3 class="credential-title">${escapeHTML(item.title)}</h3>
                    <p class="credential-date">${escapeHTML(item.date)}</p>
                </div>
            </article>
        `).join("")
        : `<div class="empty-state">No credentials found.</div>`;
}

function renderProjectFilters() {
    const categories = [
        "All",
        ...new Set(projectsData.flatMap(project => project.categories))
    ];

    $("#projectFilters").innerHTML = categories.map(category => `
        <button
            class="filter-pill ${state.projectCategory === category ? "active" : ""}"
            type="button"
            data-category="${escapeHTML(category)}"
        >
            ${escapeHTML(category)}
        </button>
    `).join("");
}

function renderProjects() {
    const container = $("#projectGrid");
    const query = state.projectSearch.trim().toLowerCase();

    let filtered = projectsData.filter(project => {
        const matchesSearch =
            `${project.title} ${project.description} ${project.tags.join(" ")} ${project.categories.join(" ")}`
                .toLowerCase()
                .includes(query);

        const matchesCategory =
            state.projectCategory === "All" ||
            project.categories.includes(state.projectCategory);

        return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
        if (state.projectSort === "name") {
            return a.title.localeCompare(b.title);
        }

        const difference = a.dateCreated - b.dateCreated;
        return state.projectSort === "oldest" ? difference : -difference;
    });

    container.innerHTML = filtered.length
        ? filtered.map(project => `
            <article class="project-card">
                <div class="project-image">
                    <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}" loading="lazy">
                </div>

                <div class="project-content">
                    <div class="project-date">${formatDate(project.dateCreated)}</div>
                    <h3 class="project-title">${escapeHTML(project.title)}</h3>
                    <p class="project-description">${escapeHTML(project.description)}</p>

                    <div class="project-tags">
                        ${project.tags.map(tag => `
                            <span class="tag">${escapeHTML(tag)}</span>
                        `).join("")}
                    </div>

                    ${project.url ? `
                        <a class="project-link" href="${escapeHTML(project.url)}" target="_blank" rel="noopener">
                            View Project ↗
                        </a>
                    ` : ""}
                </div>
            </article>
        `).join("")
        : `<div class="empty-state">No projects found.</div>`;
}

/* =========================================================
   INTERACTION
   ========================================================= */

$("#skillsSearch").addEventListener("input", event => {
    state.skillSearch = event.target.value;
    renderSkills();
});

$("#credentialsSearch").addEventListener("input", event => {
    state.credentialSearch = event.target.value;
    renderCredentials();
});

$("#projectsSearch").addEventListener("input", event => {
    state.projectSearch = event.target.value;
    renderProjects();
});

$("#projectSort").addEventListener("change", event => {
    state.projectSort = event.target.value;
    renderProjects();
});

$("#projectFilters").addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    state.projectCategory = button.dataset.category;
    renderProjectFilters();
    renderProjects();
});

$("#contactForm").addEventListener("submit", event => {
    event.preventDefault();

    const status = $("#formStatus");
    status.textContent = "Thanks! Your message form is ready to connect to your email/backend service.";

    event.target.reset();
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

$("#year").textContent = new Date().getFullYear();

renderSkills();
renderCredentials();
renderProjectFilters();
renderProjects();
