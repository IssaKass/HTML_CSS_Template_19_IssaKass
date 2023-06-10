const Templates = [
  {
    title: "drake",
    image: "drake.png",
    description: "A one-page portfolio website template.",
    status: "New",
    href: "https://issakass.github.io/HTML_CSS_Template_18_Portfolio/",
  },
  {
    title: "memberbase",
    image: "memberbase.png",
    description: "A modern resources template.",
    href: "https://issakass.github.io/HTML_CSS_Template_16_Memberbase/",
  },
  {
    title: "leon",
    image: "leon.png",
    description: "A minimal agency web template.",
    status: "old",
    href: "https://issakass.github.io/HTML_CSS_Template_01/",
  },
  {
    title: "sugarcake",
    image: "sugarcake.png",
    description: "A one-page bakey website.",
    href: "https://issakass.github.io/HTML_CSS_Template_10_ResponsiveBakeryWebsite/",
  },
];

const TemplateLayout = ({ title, image, description, status, href }) => `
  <img class="template__image" src="${imagesPath}${image}" />
  <div class="template__content">
    <h3 class="template__title">
    ${title}
    ${status ? `<span class="template__status badge">${status}</span>` : ""}
    </h3>
    <p class="template__description">${description}</p>
    <a class="main-link main-link-arrow" href="${href}" target="_blank">preview</a>
  </div>
`;

const TemplatesWrapper = document.querySelector("#templates .wrapper");

Templates.forEach((template) => {
  const templateElement = document.createElement("div");
  templateElement.classList.add("template");
  templateElement.innerHTML = TemplateLayout(template);
  TemplatesWrapper.appendChild(templateElement);
});
