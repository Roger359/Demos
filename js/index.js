import { projects } from "./projects.js";

const grid = document.querySelector(".grid");
console.log(grid);
// console.log(projects);

console.log(projects);

// function displayProjects(projects) {

for (let i = 0; i < projects.length; i++) {
  console.log(projects[i]);
  const divContainer = document.createElement("div");
  divContainer.classList.add("project-container");
  const anchorContainer = document.createElement("a");
  const divInsideContainer = document.createElement("div");
  divInsideContainer.classList.add("anchor-image");
  const anchorImg = document.createElement("img");
  anchorImg.classList.add("image");
  anchorImg.src = projects[i].img

  anchorContainer.appendChild(divInsideContainer);
  anchorContainer.appendChild(anchorImg);

  const divTexts = document.createElement("div");
  divTexts.classList.add("divTexts");

  const anchorTitle = document.createElement("a");
  anchorTitle.classList.add("anchor-title");

  const h2Title = document.createElement("h2");
  h2Title.classList.add("h2-title");
  h2Title.textContent = projects[i].title;

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = projects[i].description

  anchorTitle.appendChild(h2Title);

  divTexts.appendChild(anchorTitle);
  divTexts.appendChild(description);

  const demoDiv = document.createElement("div");
  const demoAnchor = document.createElement("a");
  demoAnchor.textContent = 'DEMO'
  demoAnchor.href = projects[i].src

  demoDiv.appendChild(demoAnchor);

  divContainer.appendChild(anchorContainer);
  divContainer.appendChild(divTexts);
  divContainer.appendChild(demoDiv);

  grid.appendChild(divContainer);
}
// }

// displayProjects();
