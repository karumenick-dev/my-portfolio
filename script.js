const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];

const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio site displaying projects and skills.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "Task Tracker",
    description: "An interactive application to manage daily tasks and productivity.",
    tech: "JavaScript, HTML"
  }
];

const projectsContainer = document.getElementById("my-projects");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><strong>Technologies:</strong> ${project.tech}</p>
  `;

  projectsContainer.appendChild(card);
});