const btn = document.querySelector(".btn");
const ratingElments = document.querySelectorAll(".rating");
const containerElement = document.querySelector(".container");
let selectedRating = "";

const removeActive = () => {
  ratingElments.forEach((rating) => {
    rating.classList.remove("active");
  });
};

ratingElments.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btn.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerElement.innerHTML = `
    <strong>Thank you!</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <br>
    <br>
    <p>We'll use your feedback to improve our customer support.</p>
`;
  }
});
