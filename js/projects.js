const Projects = [
  {
    title: "Sudoku",
    year: 2022,
    description:
      "A sudoku game and engine written in Java (100%) and Swing library.",
    link: "github.com",
    href: "https://github.com/IssaKass/Sudoku",
  },
  {
    title: "JS Calculator",
    year: 2023,
    description: "A neumorphic calculator using HTML, CSS and JS.",
    link: "github.com",
    href: "https://github.com/IssaKass/JavaScript_Calculator",
  },
  {
    title: "Dice Roller",
    year: 2023,
    description: "A simple dice roller application for Android devices.",
    link: "github.com",
    href: "https://github.com/IssaKass/DiceRoller",
  },
  {
    title: "JS Password Generator",
    year: 2023,
    description: "A simple password generator using HTML, CSS and JS.",
    link: "github.com",
    href: "https://issakass.github.io/JS-PasswordGenerator",
  },
];

// sorting projects by year, followed by title
Projects.sort((p1, p2) => {
  if (p1.year === p2.year) {
    return p1.title.localeCompare(p2.title);
  }
  return p2.year - p1.year;
});

const ProjectLayout = ({ title, year, description, link, href }) => `
  <h3 class="project__title">
    ${title}
    <span class="project__year badge">${year}</span>
  </h3>
  <p class="project__description">
    ${description}
  </p>
  <a class="project__link main-link main-link-arrow" href="${href}" target="_blank">${link}</a>
`;

const ProjectsWrapper = document.querySelector("#projects .wrapper");

Projects.forEach((project) => {
  const projectItem = document.createElement("div");
  projectItem.classList.add("project");
  projectItem.innerHTML = ProjectLayout(project);
  ProjectsWrapper.appendChild(projectItem);
});
