const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Responsive Design"];

const skillsContainer = document.getElementById("skills-list");

skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsContainer.appendChild(li);
});
const projects = [
    {
        title: "Recipe Finder",
        description: "A web application that allows users to search for recipes based on ingredients they have in their fridge.",
        tech: "HTML, CSS, JavaScript"
    },
    {
        title: "Weather Dashboard",
        description: "A sleek single-page dashboard showing real-time weather updates and 5-day forecasts for major cities.",
        tech: "HTML, CSS, JavaScript, Web APIs"
    }
];
const projectsContainer = document.getElementById("projects-grid");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card"; 

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <span class="tech-stack"><strong>Built with:</strong> ${project.tech}</span>
    projectsContainer.appendChild(card);
  `;
});
