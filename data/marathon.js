
const marathonConfig = {
    title: "The Coding Marathon",
    startDate: "2026-11-16",
    durationMonths: 24,
    productsPerMonth: 4,
    totalProducts: 96
};

const marathonMonths = Array.from(
    { length: marathonConfig.durationMonths },
    (_, index) => ({
        number: index + 1,
        title: `Month ${String(index + 1).padStart(2, "0")}`
    })
);

const marathonProjects = [
    {
        id: "queueup",
        title: "QueueUp",
        month: 1,
        description: "Project brief coming soon.",
        status: "Planned",
        technologies: [],
        url: null,
        github: null,
        image: null
    },
    {
        id: "trackly",
        title: "Trackly",
        month: 1,
        description: "Project brief coming soon.",
        status: "Planned",
        technologies: [],
        url: null,
        github: null,
        image: null
    },
    {
        id: "feedbackflow",
        title: "FeedbackFlow",
        month: 1,
        description: "Project brief coming soon.",
        status: "Planned",
        technologies: [],
        url: null,
        github: null,
        image: null
    },
    {
        id: "formforge",
        title: "FormForge",
        month: 1,
        description: "Project brief coming soon.",
        status: "Planned",
        technologies: [],
        url: null,
        github: null,
        image: null
    }
];
