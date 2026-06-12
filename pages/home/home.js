let skillsList = [];
let projectList = [];
//Classify = "Web","Software","Game","ML"
class skills{
    
    constructor(image, title, experience, tags, classify, id){
        this.image = image;
        this.title = title;
        this.experience = experience;
        this.tags = tags;
        this.classify = classify;
        this.id = id;
        skillsList.push(this);
    }

}
class project{
    constructor(title, description, image, tags, tools, dateCreated){
        this.title = title;
        this.description = description;
        this.image = image;
        this.tags = tags;
        this.tools = tools;
        this.dateCreated = dateCreated;
        projectList.push(this);

        let project = document.createElement('div');
        project.classList.add("lefter");
        project.innerHTML = `<div>
                            <div class="project">
                                <div class="projectContainer">
                                    <img src="${this.image}">
                                </div>
                                <p>${this.title}</p>
                            </div>
                        </div>
                        <div class="projectInfoHolder">
                            <div class="projectInfo">
                                <p class="Details">Project Summary</p>
                                <hr>
                                <p class="projectDescription">${this.description}</p>
                                <hr>
                                <div class="tagContainer" id="${this.title}toolHolder">
                                    
                                </div>
                            </div>
                            <div class="endAlign">
                                <a>View Project</a>
                            </div>
                        </div>`

        document.getElementById("projectList").appendChild(project);
        this.tools.map((tool)=>{
            let toolElement = document.createElement('div');
            toolElement.classList.add("tag");
            toolElement.innerHTML = `${tool.title}`;
            document.getElementById(this.title+"toolHolder").appendChild(toolElement);
        })
        
        
    }
}

//Skills
let HTML = new skills("assets/html (1).png",
    "HTML",6,["Web Development"],"Web","Skill-1");
let CSS = new skills("assets/css.png",
    "CSS",6,["Web Development"],"Web","Skill-2");
let JS = new skills("assets/javascript.png",
    "JS ",3,["Web Development"],"Web","Skill-3");
let Python = new skills("assets/python.png",
    "Python ",3,["Web Development"],"ML","Skill-4");
let Firebase = new skills("assets/firebase.png",
    "Firebase ",2,["Web Development"],"Web","Skill-5");
let Java = new skills("assets/java (1).png",
    "Java ",1,["Web Development"],"Software","Skill-6");
let React = new skills("assets/react.png",
    "React ",1,["Web Development"],"Web","Skill-7");
let Kotlin = new skills("assets/kotlin.png",
    "Kotlin ",1,["Web Development"],"Software","Skill-8");
let Swift = new skills("assets/swift.png",
    "Swift UI",2,["Web Development"],"Software","Skill-9");
let RedisDB = new skills("assets/redis.png",
    "RedisDB ",1,["Web Development"],"Software","Skill-10");
let Flutter = new skills("assets/flutter.png",
    "Futter",1,["Web Development"],"Software","Skill-11");
let SQL = new skills("assets/sql.png",
    "SQL",2,["Web Development"],"Game","Skill-12");
let GeminiAPI = new skills("assets/api.png",
    "API",1,["Web Development"],"Web","Skill-13");
let Wix = new skills("assets/wix.png",
    "Wix",5,["Web Development"],"Web","Skill-14");
let raspPI = new skills("assets/raspberry.png",
    "Rasp PI",2,["Web Development"],"Game","Skill-15");
let Git = new skills("assets/git.png",
    "Git",2,["Web Development"],"Game","Skill-16");
let Github = new skills("assets/github.png",
    "Github",2,["Web Development"],"Game","Skill-17");
let Arduino = new skills("assets/arduino.png",
    "Arduino",2,["Web Development"],"Game","Skill-18");
let Figma = new skills("assets/figma.png",
    "Figma",2,["Web Development"],"Game","Skill-19");
let Canva = new skills("assets/canva.png",
    "Canva",4,["Web Development"],"Game","Skill-20");
//Projects
let StellarEd = new project("Stellar Ed",
    "A student platform for tracking homework, deadlines, and study progress.",
    "https://github.com/jakey-techss/StellarEd/blob/main/assets/Stellar-removebg-preview.png?raw=true",
    ["Stellar Ed"],
    [HTML,CSS,JS,Firebase,Figma,GeminiAPI,Github,Git],
    new Date(2025,10,30))

let Astryx = new project("Astryx",
    "A career app that recommends careers and guides users toward achieving them.",
    "assets/App_Icon-removebg-preview.png",
    ["Stellar Ed"],
    [Java,RedisDB,GeminiAPI,Canva,Figma],
    new Date(2026,4,1))

let ZArena = new project("Z-Arena",
    "An anime card game where strategy and luck decide victory.",
    "assets/z-arena.png",
    ["Stellar Ed"],
    [Java,HTML,CSS,JS,Figma, Git, Github],
    new Date(2026,4,1))

let GravityX = new project("Gravity X",
    "A physics web game to support teachers teaching topics relating to gravity",
    "assets/GravityX.png",
    ["Stellar Ed"],
    [HTML,CSS,JS,Figma, Git, Github],
    new Date(2026,4,1))






skillsList.map((element)=>{
    let skill = document.createElement('div');
        skill.classList.add('skill');
        skill.innerHTML = `<div class="skill_img"><img src="${element.image}"></div>
                        <div class="info">
                            <h6 class="title">${element.title}</h6>
                            <p class="exp">${element.experience} Years Experience</p>
                            <p class="projects">${projectList.filter((project)=>{
                                if(project.tools.includes(element)){
                                    return element;
                                }
                            }).length} Projects</p>
                        </div>`
        if(element.classify.toLowerCase() == "Web".toLowerCase()){
            document.getElementById("Web").appendChild(skill);
        }else if(element.classify.toLowerCase() == "Software".toLowerCase()){
            document.getElementById("software").appendChild(skill);
        }else if(element.classify.toLowerCase() == "Game".toLowerCase()){
            document.getElementById("game").appendChild(skill);
        }else{
            document.getElementById("ML").appendChild(skill);
        }
})