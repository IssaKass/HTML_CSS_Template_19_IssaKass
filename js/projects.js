const Projects = [
  {
    title: "88 Pixels",
    year: 2023,
    description:
      "A web design studio providing templates and bespoke solutions for your business or personal brand's website",
    link: "88pixels.co",
    href: "http://127.0.0.1:5500/index.html",
  },
  {
    title: "Frameplate",
    year: 2023,
    description:
      "A curated gallery of Framer templates built by the community.",
    link: "frameplate.framer.website",
    href: "https://frameplate.framer.website/",
  },
  {
    title: "Staredown",
    year: 2023,
    description: "An online game to test you colour vision",
    link: "staredown.netlify.app",
    href: "https://staredown.netlify.app/",
  },
  {
    title: "New jobs friday",
    year: 2022,
    description:
      "A weekly newsletter with a round-up of the latest job offers in the UK music industry.",
    link: "newjobsfriday.com",
    href: "https://newjobsfriday.com/",
  },
  {
    title: "What to listen to",
    year: 2022,
    description:
      "Discover new lofi tracks to listen to while working, coding, studying or relaxing.",
    link: "whattolistento.netlify.app",
    href: "https://whattolistento.netlify.app/",
  },
];

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
