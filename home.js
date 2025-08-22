//Necessary Class Definitions
class Project {
    constructor(title, description, imagePath, tools, buttonCount, buttonText, buttonText2, buttonLink1, buttonLink2) {
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
        this.tools = tools;
        this.buttonCount = buttonCount;
        this.buttonText = buttonText;
        this.buttonText2 = buttonText2;
        this.buttonLink1 = buttonLink1;
        this.buttonLink2 = buttonLink2;
    }
}
class Framework {
    constructor(name, imagePath) {
        this.name = name;
        this.imagePath = imagePath;
    }
}

// Global Variable Definitions
const Projects = {
    LaFamigliaKJB: new Project("La Famiglia KJB", "Discover the heart of Italy through food, from savory appetizers to indulgent desserts and classic drinks, all crafted with authentic tradition.", "assets/La Famiglia KJB.png", ["figma", "html (1)", "css3", "javascript"], 2, "Learn More", "View Repo", "#", "#"),

    Vireli: new Project("Vireli", "An e-commerce website for selling mosquito repellent items such as detergents, pills, and stickers.", "assets/vireli.png", ["figma", "html (1)", "css3"], 2, "Learn More", "View Repo", "#", "#"),

    RecommendationSystem: new Project("Recommendation System", "A machine learning-based recommendation system for suggesting products to users.", "assets/RecSystems.png", ["python-logo"], 2, "Learn More", "View Repo", "#", "#"),

    CHOHAN: new Project("CHO-HAN", "A multiplayer guessing game where players compete to predict CHO or HAN.", "assets/CHO-HAN.png", ["python-logo"], 2, "Learn More", "View Repo", "#", "#"),

    GCodeAcademy: new Project("GCode Academy", "A SwiftUI-powered learning app that guides users from computer science basics to building their first iOS To-Do app.", "assets/GCodeAcademy.png", ["github","figma", "swift", "python-logo"], 2, "Learn More", "View Repo", "#", "#"),

    PotentialCustomers: new Project("Predicting Potential Customers", "A machine-learning application designed to help businesses identify and engage potential customers through data analysis and targeted marketing strategies.", "assets/PotentialCustomers.png", ["python-logo"], 2, "Learn More", "View Repo", "#", "#"),

    FoodHubOrderAnalysis: new Project("FoodHub Order Analysis", "A data analysis project that provides insights into food delivery orders, helping businesses optimize their operations.", "assets/FoodHubOrderAnalysis.png", ["python-logo"], 2, "Learn More", "View Repo", "#", "#"),

    DecimalToBinary: new Project("Decimal to Binary", "A simple console application that converts decimal numbers to binary.", "assets/DecimalToBinary.png", ["python-logo"], 2, "Learn More", "View Repo", "#", "#"),

    DecimalToOctal: new Project("Decimal 2 Octal", "A simple console application that converts decimal numbers to octal numbers.", "assets/Decimal2Octal.png", ["python-logo"], 2, "Learn More", "View Repo", "#", "#"),

    Text2Binary: new Project("Text 2 Binary", "A simple console application that converts text to binary using ASCII values.", "assets/Text2Binary.png", ["python-logo"], 2, "Learn More", "View Repo", "#", "#"),

    Fibonacci: new Project("Fibonacci Sequence", "A simple console application that generates Fibonacci numbers.", "assets/Fibonacci.png", ["python-logo"], 2, "Learn More", "View Repo", "#", "#"),

    LeapYearChecker: new Project("Leap Year Checker", "A simple console application that checks if a year is a leap year.", "assets/LeapYearChecker.png", ["python-logo"], 2, "Learn More", "View Repo", "#", "#"),

    BFit: new Project("BFit", "Earn rewards by walking, Climb up the leaderboards, complete missions to more rewards. Challenge yourself and friends in this Android app.", "assets/BFit.png", ["android (2)","figma","database"], 1, "Learn More", "View Repo", "#", "#")
}
let skillName;
var skillDetail = {};

// Conditional Event Listeners
if (window.location.href.includes("index.html")) {
    document.getElementById("skill-1").addEventListener("click", function () {
        skillName = "HTML";
        window.location.href = "skill.html?skill=" + skillName;
    });
    document.getElementById("skill-2").addEventListener("click", function () {
        skillName = "CSS";
        window.location.href = "skill.html?skill=" + skillName;
    });
    document.getElementById("skill-3").addEventListener("click", function () {
        skillName = "JavaScript";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-4").addEventListener("click", function () {
        skillName = "Python";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-5").addEventListener("click", function () {
        skillName = "Java";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-6").addEventListener("click", function () {
        skillName = "Swift";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-7").addEventListener("click", function () {
        skillName = "Firebase";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-8").addEventListener("click", function () {
        skillName = "Redis DB";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-9").addEventListener("click", function () {
        skillName = "Github";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-10").addEventListener("click", function () {
        skillName = "Wix";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-11").addEventListener("click", function () {
        skillName = "Git";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-12").addEventListener("click", function () {
        skillName = "Figma";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-13").addEventListener("click", function () {
        skillName = "SQL";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-14").addEventListener("click", function () {
        skillName = "MIT AI 2";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-15").addEventListener("click", function () {
        skillName = "Arduino";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-16").addEventListener("click", function () {
        skillName = "Rasp. Pi";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-17").addEventListener("click", function () {
        skillName = "Scratch";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-18").addEventListener("click", function () {
        skillName = "MBlock";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
    document.getElementById("skill-19").addEventListener("click", function () {
        skillName = "Snap";
        window.location.href = "skill.html?skill=" + skillName;
        document.title = "Code Is Life | " + skillName;
    });
}

if (window.location.href.includes("skill.html")) {
    //Get Current Skill by using URLSearchParams
    const urlParams = new URLSearchParams(window.location.search);
    const skillName = urlParams.get("skill");
    document.title = "Code Is Life | " + skillName;
    const skillDetails = getSkillDetails(skillName);

    //Update UI elements with skill details
    document.getElementById("skill-header-icon").src = skillDetails.imagePath;
    document.getElementById("skill-header-title").innerText = skillDetails.title;
    document.getElementById("skill-header-experience").innerText = "Experience: " + skillDetails.experience;

    //Dynamic Frameworks
    if (skillDetails.frameworks.length == 0) {
        document.getElementById("frameworks-container").style.display = "none";
        document.getElementById("frameworks-none").style.display = "block";
    } else {
        const frameworksContainer = document.getElementById('frameworks-container');
        skillDetails.frameworks.forEach(framework => {
            const frameworkElement = document.createElement("div");
            frameworkElement.className = "skill";
            frameworkElement.innerHTML = `
                <div class="skill-icon">
                    <img src="${framework.imagePath}" alt="${framework.name}">
                </div>
                <p>${framework.name}</p>
            `;
            frameworksContainer.appendChild(frameworkElement);
        });
    }

    //Dynamic Projects
    if (skillDetails.projects.length == 0) {
        document.getElementById("skill-projects-container").style.display = "none";
        document.getElementById("projects-none").style.display = "block";
    } else {
        const projectsContainer = document.getElementById("skill-projects-container");
        skillDetails.projects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.className = "project";
            projectElement.innerHTML = `
                <img src="${project.imagePath}" alt="project1" id="project2">
                <div class="project-info">
                    <div class="project-title">
                        <h3>${project.title}</h3>
                    </div>
                    <p>${project.description}</p>
                    <div class="tools">
                        ${project.tools.map(tool => `<img src="assets/${tool}.png" alt="${tool}">`).join('')}
                    </div>
                    <div class="project-buttons">
                        ${Array.from({ length: project.buttonCount }, (_, i) => `
                            <button><a href="${i === 0 ? project.buttonLink1 : project.buttonLink2}">${i === 0 ? project.buttonText : project.buttonText2}</a></button>
                        `).join('')}
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectElement);
        });
    }

}

//Function Definitions
function getSkillDetails(skillName) {
    if (skillName === "HTML") {
        skillDetail = {
            title: "HTML",
            experience: "4 Years",
            imagePath: "assets/html (1).png",
            frameworks: [],
            projects: [
                Projects.LaFamigliaKJB,
                Projects.Vireli,
            ]
        };
    } else if (skillName === "CSS") {
        skillDetail = {
            title: "CSS",
            experience: "4 Years",
            imagePath: "assets/css3.png",
            frameworks: [],
            projects: [
                Projects.LaFamigliaKJB,
                Projects.Vireli
            ]
        };
    } else if (skillName === "JavaScript") {
        skillDetail = {
            title: "JavaScript",
            experience: "2 Years",
            imagePath: "assets/javascript.png",
            frameworks: [
                new Framework("React Native", "assets/react.png"),
            ],
            projects: [
                Projects.LaFamigliaKJB
            ]
        };
    } else if (skillName === "Python") {
        skillDetail = {
            title: "Python",
            experience: "5 Years",
            imagePath: "assets/python-language.png",
            frameworks: [
                new Framework("Tkinter", "assets/tk.png"),
                new Framework("TensorFlow", "assets/tensorflow.png"),
                new Framework("SciPy", "assets/scipy.png"),
                new Framework("NumPy", "assets/numpy.png"),
                new Framework("SciKit Learn", "assets/scikit-learn.png"),
                new Framework("Matplotlib", "assets/matplotlib.png"),
                new Framework("Pandas", "assets/pandas.png"),
                new Framework("OpenCV", "assets/opencv.png"),
                new Framework("Pytorch", "assets/pytorch.png"),
            ],
            projects: [
                Projects.RecommendationSystem,
                Projects.CHOHAN,
                Projects.GCodeAcademy,
                Projects.PotentialCustomers,
                Projects.FoodHubOrderAnalysis,
                Projects.DecimalToBinary,
                Projects.DecimalToOctal,
                Projects.Text2Binary,
                Projects.Fibonacci,
                Projects.LeapYearChecker
            ]
        };
    } else if (skillName === "Java") {
        skillDetail = {
            title: "Java",
            experience: "2 Years",
            imagePath: "assets/java.png",
            frameworks: [],
            projects: []
        };
    } else if (skillName === "Swift") {
        skillDetail = {
            title: "Swift",
            experience: "1 Year",
            imagePath: "assets/swift.png",
            frameworks: [
                new Framework("SwiftUI", "assets/swiftui.png"),
            ],
            projects: [
                Projects.GCodeAcademy
            ]
        };
    } else if (skillName === "Firebase") {
        skillDetail = {
            title: "Firebase",
            experience: "3 Years",
            imagePath: "assets/firebase.png",
            frameworks: [],
            projects: [
            ]
        };
    } else if (skillName === "Redis DB") {
        skillDetail = {
            title: "Redis DB",
            experience: "1 Years",
            imagePath: "assets/database.png",
            frameworks: [],
            projects: [
                Projects.BFit
            ]
        };
    } else if (skillName === "Github") {
        skillDetail = {
            title: "Github",
            experience: "1 Year",
            imagePath: "assets/github.png",
            frameworks: [],
            projects: [
                Projects.RecommendationSystem,
                Projects.CHOHAN,
                Projects.GCodeAcademy,
                Projects.PotentialCustomers,
                Projects.FoodHubOrderAnalysis,
                Projects.DecimalToBinary,
                Projects.DecimalToOctal,
                Projects.Text2Binary,
                Projects.Fibonacci,
                Projects.LeapYearChecker,
                Projects.LaFamigliaKJB,
                Projects.Vireli
            ]
        };
    } else if (skillName === "Wix") {
        skillDetail = {
            title: "Wix",
            experience: "7 Years",
            imagePath: "assets/wix.png",
            frameworks: [],
            projects: [
            ]
        };
    } else if (skillName === "Git") {
        skillDetail = {
            title: "Git",
            experience: "1 Year",
            imagePath: "assets/git.png",
            frameworks: [],
            projects: [
                Projects.RecommendationSystem,
                Projects.CHOHAN,
                Projects.GCodeAcademy,
                Projects.PotentialCustomers,
                Projects.FoodHubOrderAnalysis,
                Projects.DecimalToBinary,
                Projects.DecimalToOctal,
                Projects.Text2Binary,
                Projects.Fibonacci,
                Projects.LeapYearChecker,
                Projects.LaFamigliaKJB,
                Projects.Vireli
            ]
        };
    } else if (skillName === "Figma") {
        skillDetail = {
            title: "Figma",
            experience: "1 Year",
            imagePath: "assets/figma.png",
            frameworks: [],
            projects: [
                Projects.LaFamigliaKJB,
                Projects.Vireli,
                Projects.GCodeAcademy,
                Projects.BFit
            ]
        };
    } else if (skillName === "SQL") {
        skillDetail = {
            title: "SQL",
            experience: "2 Years",
            imagePath: "assets/mysql.png",
            frameworks: [],
            projects: [
            ]
        };
    } else if (skillName === "MIT AI 2") {
        skillDetail = {
            title: "MIT AI 2",
            experience: "3 Years",
            imagePath: "assets/android (2).png",
            frameworks: [],
            projects: [
                Projects.BFit
            ]
        };
    } else if (skillName === "Arduino") {
        skillDetail = {
            title: "Arduino",
            experience: "5 Years",
            imagePath: "assets/arduino.png",
            frameworks: [],
            projects: [
            ]
        };
    } else if (skillName === "Rasp. Pi") {
        skillDetail = {
            title: "Raspberry Pi",
            experience: "1 Years",
            imagePath: "assets/raspberry-pi.png",
            frameworks: [],
            projects: [
            ]
        };
    } else if (skillName === "Scratch") {
        skillDetail = {
            title: "Scratch",
            experience: "9 Years",
            imagePath: "assets/scratch-cat-logo-png_seeklogo-431721.png",
            frameworks: [],
            projects: [
            ]
        };
    } else if (skillName === "MBlock") {
        skillDetail = {
            title: "MBlock",
            experience: "9 Years",
            imagePath: "assets/mblock.png",
            frameworks: [],
            projects: [
            ]
        };
    } else if (skillName === "Snap") {
        skillDetail = {
            title: "Snap",
            experience: "2 Years",
            imagePath: "assets/Snap!.svg",
            frameworks: [],
            projects: [
                Projects.LaFamigliaKJB
            ]
        };
    }
    return skillDetail;
};