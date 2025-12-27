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
    description: "Full-stack task manager using Node.js, Express, and REST APIs",
    github: "https://github.com/toufa176/Task-Manager",
    category: "backend"

    },
    {
        name: "Birthday Page",
        description: "Interactive birthday page with music, animations, and mobile support",
        github: "https://github.com/toufa176/Birthday",
        category: "frontend"
    }
];

//Project Rendering Logic
const projectList = document.getElementById("project-list");

 function renderProjects(list) {
    projectList.innerHTML = "";

    list.forEach(project => {
        const div = document.createElement("div");
        div.className = "project";
        div.style.touchAction = "manipulation";

        div.innerHTML =`
        <h3>${project.name} </h3>
        <p>${project.description}</p>
        `;

        div.addEventListener("click", () => openModal (project));
        projectList.appendChild(div);
    });
 }
renderProjects(projects);

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

// scroll animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2

});
sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

//modal logic
const modal = document.getElementById("project-modal");
const closeModalBtn = document.getElementById("close-modal");

function openModal(project) {
    document.getElementById("modal-title").textContent = project.name;
    document.getElementById("modal-description").textContent = project.description;
    document.getElementById("modal-github").href = project,github;

    modall.style.display = "flex";
}

closeModalBtn.addEventListener("click",() => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    toggleBtn.textContent =
    document.body.classList.contains("light-theme") ? "❂": "🌙";
});

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () =>{
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.dataset.category;

        if (category === "all") {
            renderProjects(projects);

        } else {
            const filtered = projects.filter(p = p.category === category);
            renderProjects (filtered);
        }
    });

});