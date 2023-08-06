import { projects } from "./projects.js";

const grid = document.querySelector(".grid");

for (let i = 0; i < projects.length; i++) {
  console.log(projects[i]);

  const divContainer = document.createElement("div");
  divContainer.classList.add("project-container");

  const anchorContainer = document.createElement("a");
  const divInsideContainer = document.createElement("div");
  divInsideContainer.classList.add("anchor-image");

  const anchorImg = document.createElement("img");
  anchorImg.classList.add("image");
  anchorImg.src = projects[i].img;

  divInsideContainer.appendChild(anchorImg);
  anchorContainer.appendChild(divInsideContainer);

  const divTexts = document.createElement("div");
  divTexts.classList.add("divTexts");

  const anchorTitle = document.createElement("a");
  anchorTitle.classList.add("anchor-title");

  const h2Title = document.createElement("h2");
  h2Title.classList.add("h2-title");
  h2Title.textContent = projects[i].title;

  anchorTitle.appendChild(h2Title);

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = projects[i].description;

  divTexts.appendChild(anchorTitle);
  divTexts.appendChild(description);

  const demoDiv = document.createElement("div");
  demoDiv.classList.add("demo");
  const demoAnchor = document.createElement("a");
  demoAnchor.textContent = "DEMO";
  demoAnchor.target = "_blank";
  demoAnchor.href = projects[i].src;

  demoDiv.appendChild(demoAnchor);

  divContainer.appendChild(anchorContainer);
  divContainer.appendChild(divTexts);
  divContainer.appendChild(demoDiv);

  grid.appendChild(divContainer);
}
