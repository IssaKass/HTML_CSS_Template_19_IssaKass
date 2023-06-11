const Stacks = [
  {
    title: "Github",
    description: "Dev tool",
    icon: '<i class="fa-brands fa-github fa-fw"></i>',
    href: "https://github.com/",
  },
  {
    title: "Dribbble",
    description: "Artwork community",
    icon: '<i class="fa-brands fa-dribbble fa-fw"></i>',
    href: "https://dribbble.com/",
  },
  {
    title: "Figma",
    description: "Design tool",
    icon: '<i class="fa-brands fa-figma fa-fw"></i>',
    href: "https://www.figma.com/",
  },
  {
    title: "CodePen",
    description: "Front-end community",
    icon: '<i class="fa-brands fa-codepen fa-fw"></i>',
    href: "https://codepen.io/",
  },
];

const StackLayout = ({ title, description, icon }) => `
  <i class="fa-solid fa-arrow-right fa-lg arrow"></i>
  <span class="stack__icon">${icon}</span>
  <div class="stack__info">
    <h3 class="stack__title">${title}</h3>
    <p class="stack__description">${description}</p>
  </div>
`;

const StacksWrapper = document.querySelector("#stacks .wrapper");

Stacks.forEach((stack) => {
  const stackElement = document.createElement("a");
  stackElement.classList.add("stack");
  stackElement.href = stack.href;
  stackElement.target = "_blank";
  stackElement.innerHTML = StackLayout(stack);
  StacksWrapper.appendChild(stackElement);
});
