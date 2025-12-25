// typing effect
const text = "Full-stack Developer | JavaScript | Node.js | Clean Code";
let index = 0;

function typeEffect() {
    if (index < text.length){
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

typeEffect();

//Dynamic project
const projects = [
    {
    name: "Task Manager App",
    description: "Full-stack task manager using Node.js, Express, and REST APIs"

    },
    {
        name: "Birthday Page",
        description: "Interactive birthday page with music, animations, and mobile support"
    }
];

const projectList = document.getElementById("project-list");

projects.forEach(project =>{
    const div = document.createElement("div");
    div.className = "project";

    div.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    `;

    projectList.appendChild(div);
});

// dynamic  skills
const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "Git & GitHub",
    "Rest APIs",
    "PWA Basics"
    
];

const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});