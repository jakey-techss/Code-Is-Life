const journalGrid = document.getElementById("journalGrid");
const journalSearch = document.getElementById("journalSearch");
const entryCount = document.getElementById("entryCount");
const emptyState = document.getElementById("emptyState");

const articleOverlay = document.getElementById("articleOverlay");
const articleContent = document.getElementById("articleContent");
const readerClose = document.getElementById("readerClose");

let activeFilter = "all";

function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

function formatDate(dateString) {
    const date = new Date(`${dateString}T12:00:00`);

    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    }).toUpperCase();
}

function getCategoryLabel(type) {
    return type === "technical" ? "ENGINEERING NOTE" : "DAILY LOG";
}

function renderJournal() {
    const searchTerm = journalSearch.value.toLowerCase().trim();

    const filteredEntries = journalEntries
        .filter(entry => {
            const matchesCategory =
                activeFilter === "all" || entry.type === activeFilter;

            const searchableText = [
                entry.title,
                entry.excerpt,
                ...(entry.tags || [])
            ].join(" ").toLowerCase();

            const matchesSearch = searchableText.includes(searchTerm);

            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => b.date.localeCompare(a.date));

    entryCount.textContent =
        `${String(filteredEntries.length).padStart(2, "0")} ENTRIES`;

    journalGrid.innerHTML = filteredEntries.map(entry => `
        <button class="journal-card" data-entry-id="${escapeHTML(entry.id)}">
            <div class="card-meta">
                <span class="card-category ${entry.type === "daily" ? "daily" : ""}">
                    ${getCategoryLabel(entry.type)}
                </span>
                <span>${formatDate(entry.date)}</span>
            </div>

            <h3>${escapeHTML(entry.title)}</h3>

            <p>${escapeHTML(entry.excerpt)}</p>

            <div class="card-bottom">
                <span>
                    ${(entry.tags || []).map(tag => `#${escapeHTML(tag)}`).join(" · ")}
                </span>
                <span class="card-read">↗</span>
            </div>
        </button>
    `).join("");

    emptyState.hidden = filteredEntries.length !== 0;

    journalGrid.querySelectorAll(".journal-card").forEach(card => {
        card.addEventListener("click", () => {
            openArticle(card.dataset.entryId);
        });
    });
}

function openArticle(id) {
    const entry = journalEntries.find(item => item.id === id);

    if (!entry) return;

    articleContent.innerHTML = `
        <div class="reader-meta">
            ${getCategoryLabel(entry.type)}
            &nbsp; / &nbsp;
            ${formatDate(entry.date)}
            &nbsp; / &nbsp;
            ${escapeHTML(entry.readTime)}
        </div>

        <h1 class="reader-title">${escapeHTML(entry.title)}</h1>

        <p class="reader-excerpt">
            ${escapeHTML(entry.excerpt)}
        </p>

        <div class="reader-body">
            ${entry.body}
        </div>
    `;

    articleOverlay.classList.add("open");
    articleOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeArticle() {
    articleOverlay.classList.remove("open");
    articleOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;

        document.querySelectorAll(".filter-button").forEach(filter => {
            filter.classList.toggle(
                "active",
                filter.dataset.filter === activeFilter
            );
        });

        renderJournal();

        document.getElementById("journal-feed")
            .scrollIntoView({ behavior: "smooth" });
    });
});

journalSearch.addEventListener("input", renderJournal);

readerClose.addEventListener("click", closeArticle);

articleOverlay.addEventListener("click", event => {
    if (event.target === articleOverlay) {
        closeArticle();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeArticle();
    }
});

/* Initial render */
renderJournal();