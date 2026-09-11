
const projects = [
    {
        name: "AI//LAB",
        description:
            "An interactive AI learning platform designed to make artificial intelligence understandable and practical.",
        icon: "assets/projects/ai-lab.png",
        category: "Education",
        status: "Building",
        tags: ["AI", "Education", "Web"],
        url: "projects/ai-lab.html"
    },

    {
        name: "QuixBite",
        description:
            "A platform for discovering food trucks, tracking locations, earning rewards, and exploring healthy food.",
        icon: "assets/projects/quixbite.png",
        category: "Web",
        status: "Building",
        tags: ["Mobile", "Food", "Maps"],
        url: "projects/quixbite.html"
    },

    {
        name: "Inventa",
        description:
            "A robotics and programming project focused on making hardware and software development more accessible.",
        icon: "assets/projects/inventa.png",
        category: "Robotics",
        status: "Building",
        tags: ["Robotics", "Python", "Hardware"],
        url: "projects/inventa.html"
    },

    {
        name: "Legacy XI",
        description:
            "A soccer-focused digital platform featuring player progression, ratings, badges, and statistics.",
        icon: "assets/projects/legacy-xi.png",
        category: "Web",
        status: "Building",
        tags: ["Soccer", "Web", "Stats"],
        url: "projects/legacy-xi.html"
    },

    {
        name: "UNBOUND",
        description:
            "A game engine project exploring tools for creating and building interactive worlds.",
        icon: "assets/projects/unbound.png",
        category: "Game Development",
        status: "Building",
        tags: ["Rust", "Game Engine", "Tools"],
        url: "projects/unbound.html"
    },

    {
        name: "ICR Vault",
        description:
            "A platform for managing inventory, products, and reselling workflows.",
        icon: "assets/projects/icr-vault.png",
        category: "Web",
        status: "Building",
        tags: ["Inventory", "Web", "Business"],
        url: "projects/icr-vault.html"
    },
    {
        name: "Stellar Ed",
        description:
            "A student platform for tracking homework, deadlines, and study progress.",
        icon:
            "https://github.com/jakey-techss/StellarEd/blob/main/assets/Stellar-removebg-preview.png?raw=true",
        category: "Education",
        status: "Completed",
        tags: ["Education", "Web", "AI"],
        url: "https://github.com/jakey-techss/StellarEd"
    },

    {
        name: "Astryx",
        description:
            "A career app that recommends careers and guides users toward achieving them.",
        icon: "assets/projects/astryx.png",
        category: "Software",
        status: "Completed",
        tags: ["Career", "AI", "Software"],
        url: "projects/astryx.html"
    },

    {
        name: "Z-Arena",
        description:
            "An anime card game where strategy and luck decide victory.",
        icon: "assets/projects/z-arena.png",
        category: "Game Development",
        status: "Completed",
        tags: ["Game", "Strategy", "Anime"],
        url: "projects/z-arena.html"
    },

    {
        name: "Gravity X",
        description:
            "A physics web game designed to support teachers teaching topics relating to gravity.",
        icon: "assets/projects/gravity-x.png",
        category: "Game Development",
        status: "Completed",
        tags: ["Physics", "Education", "Web"],
        url: "projects/gravity-x.html"
    },

    {
        name: "Hoopz To Greatness",
        description:
            "An initiative that uses education to help youth achieve a brighter future.",
        icon: "assets/projects/hoopz-to-greatness.png",
        category: "Education",
        status: "Upgrading",
        tags: ["Education", "Community", "Web"],
        url: "projects/hoopz-to-greatness.html"
    },
];


const grid = document.getElementById("projectGrid");
const search = document.getElementById("projectSearch");
const filters = document.getElementById("projectFilters");


let activeCategory = "All";


function renderFilters() {

    const categories = [
        "All",
        ...new Set(projects.map(project => project.category))
    ];

    filters.innerHTML = categories.map(category => `
        <button
            class="filter-pill ${category === "All" ? "active" : ""}"
            data-category="${category}"
        >
            ${category}
        </button>
    `).join("");

    filters.querySelectorAll(".filter-pill").forEach(button => {

        button.addEventListener("click", () => {

            activeCategory = button.dataset.category;

            filters
                .querySelectorAll(".filter-pill")
                .forEach(item => item.classList.remove("active"));

            button.classList.add("active");

            renderProjects();

        });

    });

}


function renderProjects() {

    const query = search.value.trim().toLowerCase();

    const visibleProjects = projects.filter(project => {

        const matchesCategory =
            activeCategory === "All" ||
            project.category === activeCategory;

        const matchesSearch =
            project.name.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.tags.some(tag =>
                tag.toLowerCase().includes(query)
            );

        return matchesCategory && matchesSearch;

    });


    if (!visibleProjects.length) {

        grid.innerHTML = `
            <div class="empty-state">
                No projects found.
            </div>
        `;

        return;
    }


    grid.innerHTML = visibleProjects.map(project => `

        <article class="project-card">

            <div class="project-top">

                <div class="project-icon">
                    <img
                        src="${project.icon}"
                        alt=""
                        loading="lazy"
                    >
                </div>

                <span class="project-status">
                    ${project.status}
                </span>

            </div>


            <h3 class="project-title">
                ${project.name}
            </h3>


            <p class="project-description">
                ${project.description}
            </p>


            <div class="project-tags">

                ${project.tags.map(tag => `
                    <span>${tag}</span>
                `).join("")}

            </div>


            <a
                class="project-link"
                href="${project.url}"
            >
                View Project
                <span>↗</span>
            </a>

        </article>

    `).join("");

}


search.addEventListener("input", renderProjects);


document.getElementById("year").textContent =
    new Date().getFullYear();
renderFilters();
renderProjects();