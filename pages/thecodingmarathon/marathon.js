
document.addEventListener("DOMContentLoaded", () => {
    const roadmapGrid = document.getElementById("roadmapGrid");
    const projectGrid = document.getElementById("marathonProductGrid");
    const logList = document.getElementById("marathonLogList");
    const monthFilter = document.getElementById("monthFilter");

    const completedCount = document.getElementById("completedCount");
    const logCount = document.getElementById("logCount");
    const logDays = document.getElementById("logDays");

    const progressText = document.getElementById("roadmapProgressText");
    const progressBar = document.getElementById("roadmapProgressBar");

    const modal = document.getElementById("marathonLogModal");
    const modalTitle = document.getElementById("marathonLogTitle");
    const modalMeta = document.getElementById("marathonLogMeta");
    const modalBody = document.getElementById("marathonLogBody");

    const projects = Array.isArray(marathonProjects)
        ? marathonProjects
        : [];

    const months = Array.isArray(marathonMonths)
        ? marathonMonths
        : [];

    const logs = Array.isArray(marathonLogs)
        ? [...marathonLogs].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        )
        : [];

    const completedProjects = projects.filter(
        project => project.status?.toLowerCase() === "completed"
    ).length;

    function escapeHTML(value = "") {
        return String(value).replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[char]);
    }

    function getMonthStatus(monthNumber) {
        const start = new Date(`${marathonConfig.startDate}T00:00:00`);
        const now = new Date();

        const monthStart = new Date(start);
        monthStart.setMonth(start.getMonth() + monthNumber - 1);

        const nextMonth = new Date(monthStart);
        nextMonth.setMonth(monthStart.getMonth() + 1);

        if (now < monthStart) return "UPCOMING";
        if (now < nextMonth) return "CURRENT";
        return "COMPLETED";
    }

    function renderStats() {
        if (completedCount) {
            completedCount.textContent =
                String(completedProjects).padStart(2, "0");
        }

        if (logCount) {
            logCount.textContent = String(logs.length).padStart(2, "0");
        }

        if (logDays) {
            const uniqueDays = new Set(logs.map(log => log.date));
            logDays.textContent = String(uniqueDays.size).padStart(2, "0");
        }

        const percentage = Math.min(
            100,
            (completedProjects / marathonConfig.totalProducts) * 100
        );

        if (progressText) {
            progressText.textContent =
                `${completedProjects} / ${marathonConfig.totalProducts} PRODUCTS COMPLETED`;
        }

        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
    }

    function renderRoadmap() {
        if (!roadmapGrid) return;

        roadmapGrid.innerHTML = months.map(month => {
            const monthProjects = projects.filter(
                project => project.month === month.number
            );

            const completed = monthProjects.filter(
                project => project.status?.toLowerCase() === "completed"
            ).length;

            const status = getMonthStatus(month.number);

            return `
                <article class="month-card ${status === "CURRENT" ? "current" : ""}">
                    <div class="month-card-top">
                        <span>MONTH ${String(month.number).padStart(2, "0")}</span>
                        <span class="month-status">${status}</span>
                    </div>

                    <h3>${escapeHTML(month.title)}</h3>

                    <p>
                        ${completed} / ${marathonConfig.productsPerMonth}
                        products completed
                    </p>
                </article>
            `;
        }).join("");
    }

    function renderProjects(month = "all") {
        if (!projectGrid) return;

        const filtered = month === "all"
            ? projects
            : projects.filter(
                project => project.month === Number(month)
            );

        if (!filtered.length) {
            projectGrid.innerHTML = `
                <div class="logs-empty">
                    <span>✳</span>
                    <h3>No projects listed yet.</h3>
                    <p>Projects will appear here as the marathon progresses.</p>
                </div>
            `;
            return;
        }

        projectGrid.innerHTML = filtered.map((project, index) => {
            const projectNumber = (project.month - 1) *
                marathonConfig.productsPerMonth +
                index + 1;

            const links = [
                project.url
                    ? `<a class="product-link" href="${escapeHTML(project.url)}" target="_blank" rel="noopener noreferrer">Live project ↗</a>`
                    : "",
                project.github
                    ? `<a class="product-link" href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`
                    : ""
            ].filter(Boolean).join(" ");

            return `
                <article class="marathon-product-card">
                    <div class="product-number">
                        ${String(projectNumber).padStart(2, "0")}
                    </div>

                    <div class="product-info">
                        <h3>${escapeHTML(project.title)}</h3>

                        <p>${escapeHTML(project.description)}</p>

                        <div class="product-meta">
                            <span>MONTH ${String(project.month).padStart(2, "0")}</span>
                            <span class="product-status">
                                ${escapeHTML(project.status)}
                            </span>
                            ${(project.technologies || []).map(tech =>
                                `<span>${escapeHTML(tech)}</span>`
                            ).join("")}
                        </div>

                        ${links}
                    </div>
                </article>
            `;
        }).join("");
    }

    function renderLogs() {
        if (!logList) return;

        if (!logs.length) {
            logList.innerHTML = `
                <div class="logs-empty">
                    <span>✳</span>
                    <h3>The first entry is waiting to be written.</h3>
                    <p>
                        Build logs will appear here as the marathon progresses.
                    </p>
                </div>
            `;
            return;
        }

        logList.innerHTML = logs.map(log => `
            <button
                class="marathon-log-card"
                type="button"
                data-log-id="${escapeHTML(log.id)}"
            >
                <span class="log-date">
                    ${escapeHTML(log.date)}
                    <br>
                    DAY ${escapeHTML(log.day)}
                </span>

                <span class="log-content">
                    <small>${escapeHTML(log.type)}</small>
                    <h3>${escapeHTML(log.title)}</h3>
                    <p>${escapeHTML(log.excerpt)}</p>
                </span>

                <span class="log-arrow">↗</span>
            </button>
        `).join("");
    }

    function openLog(id) {
        const log = logs.find(item => item.id === id);
        if (!log || !modal) return;

        modalTitle.textContent = log.title;

        modalMeta.textContent =
            `${log.date} · DAY ${log.day} · MONTH ${log.month}`;

        // Content is authored by you in your local data file.
        modalBody.innerHTML = log.content || "";

        modal.classList.add("active");
        document.body.classList.add("modal-open");
    }

    function closeLog() {
        modal?.classList.remove("active");
        document.body.classList.remove("modal-open");
    }

    if (monthFilter) {
        monthFilter.innerHTML = `
            <option value="all">All months</option>
            ${months.map(month => `
                <option value="${month.number}">
                    ${escapeHTML(month.title)}
                </option>
            `).join("")}
        `;

        monthFilter.addEventListener("change", event => {
            renderProjects(event.target.value);
        });
    }

    logList?.addEventListener("click", event => {
        const button = event.target.closest("[data-log-id]");
        if (button) openLog(button.dataset.logId);
    });

    document.getElementById("closeMarathonLog")
        ?.addEventListener("click", closeLog);

    modal?.addEventListener("click", event => {
        if (event.target === modal) closeLog();
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeLog();
    });

    renderStats();
    renderRoadmap();
    renderProjects();
    renderLogs();
});
