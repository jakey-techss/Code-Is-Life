
const projectsData = [
    {
        id: "stellar-ed",
        title: "Stellar Ed",
        description: "A student platform for tracking homework, deadlines, and study progress.",
        image: "https://github.com/jakey-techss/StellarEd/blob/main/assets/Stellar-removebg-preview.png?raw=true",
        tags: ["Education", "Web", "AI"],
        tools: ["HTML", "CSS", "JavaScript", "Firebase", "Figma", "API"],
        categories: ["Web Development", "Project Demo"],
        dateCreated: "2025-11-30",
        url: "https://stellar-ed.vercel.app",
        repository: "https://github.com/jakey-techss/StellarEd",
        featured: true,
        status: "Published",
        documentation: null,
        highlights: [
            "Homework and deadline tracking",
            "Student-focused interface",
            "Study progress management"
        ]
    },

    {
        id: "inventa-software",
        title: "Inventa",
        description: "Modular robotics platform with custom hardware and visual node-based programming.",
        image: "assets/Thumbnail.png",
        tags: ["Education", "Hardware", "Robotics"],
        tools: ["HTML", "CSS", "JavaScript", "Arduino", "3D CAD", "API"],
        categories: ["Web Development", "Project Demo", "Hardware"],
        dateCreated: "2026-09-09",
        url: "https://inventa-phys-s-12.vercel.app",
        repository: null,
        featured: true,
        status: "Published",
        documentation: null,
        highlights: [
            "Custom hardware exploration",
            "Visual node-based programming",
            "Robotics platform concept"
        ]
    },

    {
        id: "astryx",
        title: "Astryx",
        description: "A career app that recommends careers and guides users toward achieving them.",
        image: "assets/App_Icon-removebg-preview.png",
        tags: ["Career", "AI", "Software"],
        tools: ["Java", "Redis", "API", "Figma"],
        categories: ["Software Development", "Machine Learning & AI"],
        dateCreated: "2026-05-01",
        url: "https://youtube.com/shorts/nOVElGq8c-w?feature=share",
        repository: null,
        featured: false,
        status: "Published",
        documentation: null,
        highlights: [
            "Career recommendations",
            "Career pathway guidance",
            "Application-focused software"
        ]
    },

    {
        id: "z-arena",
        title: "Z-Arena",
        description: "An anime card game where strategy and luck decide victory.",
        image: "assets/z-arena.png",
        tags: ["Game", "Strategy", "Anime"],
        tools: ["Java", "HTML", "CSS", "JavaScript", "GitHub"],
        categories: ["Game Development", "Project Demo"],
        dateCreated: "2026-05-01",
        url: "https://github.com/jakey-techss/Z-Arena",
        repository: "https://github.com/jakey-techss/Z-Arena",
        featured: false,
        status: "Published",
        documentation: null,
        highlights: [
            "Card-based game mechanics",
            "Strategy-oriented gameplay",
            "Java development"
        ]
    },

    {
        id: "gravity-x",
        title: "Gravity X",
        description: "A physics web game designed to support teachers teaching topics relating to gravity.",
        image: "assets/GravityX.png",
        tags: ["Physics", "Education", "Web"],
        tools: ["HTML", "CSS", "JavaScript", "Figma", "GitHub"],
        categories: ["Web Development", "Game Development", "Project Demo"],
        dateCreated: "2026-05-01",
        url: "https://gravity-x-one.vercel.app",
        repository: null,
        featured: true,
        status: "Published",
        documentation: null,
        highlights: [
            "Physics-focused learning",
            "Interactive web game",
            "Classroom-oriented concept"
        ]
    },

    {
        id: "hoopz-to-greatness",
        title: "Hoopz To Greatness",
        description: "An initiative that uses education to help youth achieve a brighter future.",
        image: "assets/HTG.png",
        tags: ["Education", "Community", "Web"],
        tools: ["HTML", "CSS", "Figma", "GitHub"],
        categories: ["Web Development", "Project Demo"],
        dateCreated: "2026-05-01",
        url: "https://hoopztogreatness.com",
        repository: null,
        featured: false,
        status: "Published",
        documentation: null,
        highlights: [
            "Education-centered mission",
            "Community-oriented initiative",
            "Youth opportunity"
        ]
    }
    

    // Add new projects below this line.
];

const $ = (selector) => document.querySelector(selector);

const escapeHTML = (value = "") =>
    String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    }[character]));

const featuredProjects = projectsData.filter(project => project.featured);

let currentSlide = 0;
let activeCategory = "All";


/* DATE FORMATTING */

function formatDate(date) {
    if (!date) return "Date not listed";

    return new Date(`${date}T12:00:00`).toLocaleDateString(
        "en-US",
        {
            month: "short",
            year: "numeric"
        }
    );
}


/* IMAGE FALLBACK */

function projectImage(project, className = "") {
    if (!project.image) {
        return `
            <div class="${className}">
                <span class="feature-fallback">
                    ${escapeHTML(project.title.slice(0, 2).toUpperCase())}
                </span>
            </div>
        `;
    }

    return `
        <img
            class="${className}"
            src="${escapeHTML(project.image)}"
            alt="${escapeHTML(project.title)}"
            onerror="
                this.style.display='none';
                this.parentElement.classList.add('image-failed');
                this.parentElement.insertAdjacentHTML(
                    'beforeend',
                    '<span class=&quot;feature-fallback&quot;>${escapeHTML(project.title.slice(0, 2).toUpperCase())}</span>'
                );
            "
        >
    `;
}


/* FEATURED CAROUSEL */

function renderCarousel() {
    const project = featuredProjects[currentSlide];

    if (!project) {
        $("#featuredCarousel").innerHTML = `
            <div class="empty-state">
                No featured projects yet. Set featured: true on a project.
            </div>
        `;
        return;
    }

    $("#featuredCarousel").innerHTML = `
        <article class="feature-slide">

            <div class="feature-image">
                <div class="feature-ring"></div>
                ${projectImage(project)}
            </div>

            <div class="feature-content">

                <div class="feature-meta">
                    FEATURED PROJECT /
                    ${escapeHTML(project.status || "PROJECT")}
                    / ${formatDate(project.dateCreated)}
                </div>

                <h3>${escapeHTML(project.title)}</h3>

                <p>${escapeHTML(project.description)}</p>

                <div class="feature-tags">
                    ${(project.tools || []).slice(0, 5).map(tool => `
                        <span>${escapeHTML(tool)}</span>
                    `).join("")}
                </div>

                <div class="feature-actions">

                    <button
                        class="feature-primary"
                        data-open-project="${escapeHTML(project.id)}"
                    >
                        Explore project ↗
                    </button>

                    ${project.url ? `
                        <a
                            class="feature-secondary"
                            href="${escapeHTML(project.url)}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open project ↗
                        </a>
                    ` : ""}

                </div>

            </div>

        </article>
    `;

    $("#slideCounter").textContent =
        `${String(currentSlide + 1).padStart(2, "0")} / ${String(featuredProjects.length).padStart(2, "0")}`;

    $("#carouselProgress").style.width =
        `${((currentSlide + 1) / featuredProjects.length) * 100}%`;
}


function changeSlide(direction) {
    if (!featuredProjects.length) return;

    currentSlide =
        (currentSlide + direction + featuredProjects.length) %
        featuredProjects.length;

    renderCarousel();
}

$("#previousSlide").addEventListener("click", () => changeSlide(-1));
$("#nextSlide").addEventListener("click", () => changeSlide(1));


/* CATEGORY FILTERS */

function renderFilters() {
    const categories = [
        "All",
        ...new Set(
            projectsData.flatMap(project => project.categories || [])
        )
    ];

    $("#categoryFilters").innerHTML = categories.map(category => `
        <button
            class="filter-button ${category === activeCategory ? "active" : ""}"
            data-filter="${escapeHTML(category)}"
        >
            ${escapeHTML(category)}
        </button>
    `).join("");
}


/* PROJECT CATALOGUE */

function renderProjects() {
    let visibleProjects = [...projectsData];

    const search = $("#projectSearch").value
        .trim()
        .toLowerCase();

    if (activeCategory !== "All") {
        visibleProjects = visibleProjects.filter(project =>
            (project.categories || []).includes(activeCategory)
        );
    }

    if (search) {
        visibleProjects = visibleProjects.filter(project => {
            const searchableContent = [
                project.title,
                project.description,
                ...(project.tags || []),
                ...(project.tools || []),
                ...(project.categories || [])
            ].join(" ").toLowerCase();

            return searchableContent.includes(search);
        });
    }

    const sort = $("#projectSort").value;

    if (sort === "az") {
        visibleProjects.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    } else if (sort === "oldest") {
        visibleProjects.sort((a, b) =>
            (a.dateCreated || "").localeCompare(b.dateCreated || "")
        );
    } else {
        visibleProjects.sort((a, b) =>
            (b.dateCreated || "").localeCompare(a.dateCreated || "")
        );
    }

    $("#visibleTotal").textContent =
        String(visibleProjects.length).padStart(2, "0");

    $("#projectGrid").innerHTML = visibleProjects.length
        ? visibleProjects.map((project, index) => `
            <article
                class="project-card"
                tabindex="0"
                role="button"
                data-open-project="${escapeHTML(project.id)}"
                aria-label="View ${escapeHTML(project.title)}"
            >

                <div class="card-image">

                    ${projectImage(project)}

                    <span class="card-index">
                        PROJECT / ${String(index + 1).padStart(2, "0")}
                    </span>

                </div>

                <div class="card-content">

                    <div class="card-meta">
                        <span>
                            ${escapeHTML(project.categories?.[0] || "PROJECT")}
                        </span>

                        <span>
                            ${escapeHTML(project.status || "PROJECT")}
                        </span>
                    </div>

                    <h3>${escapeHTML(project.title)}</h3>

                    <p>${escapeHTML(project.description)}</p>

                    <div class="card-bottom">

                        <div class="card-tags">
                            ${(project.tags || []).slice(0, 3).map(tag => `
                                <span>${escapeHTML(tag)}</span>
                            `).join("")}
                        </div>

                        <span class="card-open">OPEN ↗</span>

                    </div>

                </div>

            </article>
        `).join("")
        : `
            <div class="empty-state">
                No projects match your search.
                Try another keyword or category.
            </div>
        `;
}


/* FILTER EVENTS */

$("#categoryFilters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");

    if (!button) return;

    activeCategory = button.dataset.filter;

    renderFilters();
    renderProjects();
});

$("#projectSearch").addEventListener("input", renderProjects);
$("#projectSort").addEventListener("change", renderProjects);


/* PROJECT DETAIL MODAL */

function openProject(projectId) {
    const project = projectsData.find(item => item.id === projectId);

    if (!project) return;

    const documentation = project.documentation;

    const documentationLinks = documentation
        ? Object.entries({
            "Overview PDF": documentation.overview,
            "Architecture PDF": documentation.architecture,
            "Technical report": documentation.technical,
            "Build log": documentation.buildLog
        }).filter(([, url]) => url)
        : [];

    const projectLinks = [
        ["Live project", project.url],
        ["GitHub repository", project.repository]
    ].filter(([, url]) => url);

    const allLinks = [
        ...projectLinks,
        ...documentationLinks
    ];

    $("#modalContent").innerHTML = `

        <div class="modal-kicker">
            PROJECT RECORD /
            ${escapeHTML(project.status || "PROJECT")} /
            ${formatDate(project.dateCreated)}
        </div>

        <h2 class="modal-title">
            ${escapeHTML(project.title)}
        </h2>

        <p class="modal-description">
            ${escapeHTML(project.description)}
        </p>

        <div class="modal-grid">

            <section class="modal-panel">
                <h4>Project overview</h4>
                <p>${escapeHTML(project.description)}</p>
            </section>

            <section class="modal-panel">
                <h4>Technologies and tools</h4>
                <p>
                    ${(project.tools || []).map(escapeHTML).join(" · ") || "Not listed yet"}
                </p>
            </section>

            <section class="modal-panel">
                <h4>Project highlights</h4>

                ${(project.highlights || []).length
                    ? `<ul>${project.highlights.map(item => `
                        <li>${escapeHTML(item)}</li>
                    `).join("")}</ul>`
                    : `<p>Project details will be added as the project develops.</p>`
                }

            </section>

            <section class="modal-panel">
                <h4>Categories</h4>
                <p>
                    ${(project.categories || []).map(escapeHTML).join(" · ") || "Uncategorized"}
                </p>
            </section>

        </div>

        <div class="modal-links">

            ${allLinks.map(([label, url]) => `
                <a
                    href="${escapeHTML(url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${escapeHTML(label)} ↗
                </a>
            `).join("")}

        </div>

        ${documentationLinks.length
            ? `<p class="modal-note">Documentation is available for this project above.</p>`
            : `<p class="modal-note">
                This project is listed even though formal documentation
                has not been published yet. Documentation can be attached
                whenever it is ready.
              </p>`
        }

    `;

    $("#projectModal").showModal();
}


/* OPEN PROJECT FROM CARDS OR CAROUSEL */

document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-open-project]");

    if (trigger) {
        openProject(trigger.dataset.openProject);
    }
});


/* KEYBOARD ACCESSIBILITY */

document.addEventListener("keydown", event => {
    const card = event.target.closest?.(".project-card");

    if (
        card &&
        (event.key === "Enter" || event.key === " ")
    ) {
        event.preventDefault();
        openProject(card.dataset.openProject);
    }
});


/* CLOSE MODAL */

$("#closeModal").addEventListener("click", () => {
    $("#projectModal").close();
});

$("#projectModal").addEventListener("click", event => {
    if (event.target === $("#projectModal")) {
        $("#projectModal").close();
    }
});


/* INITIALIZE */

$("#projectTotal").textContent =
    String(projectsData.length).padStart(2, "0");

$("#currentYear").textContent = new Date().getFullYear();

renderCarousel();
renderFilters();
renderProjects();
