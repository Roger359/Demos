const getMealBtn = document.getElementById("get_meal");
console.log(getMealBtn);
const mealContainer = document.getElementById("meal");

getMealBtn.addEventListener("click", () => {
  console.log("inside the fetch");
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      // console.log(res.meals[0]);
      createMeal(res.meals[0]);
    });
});

const createMeal = (meal) => {
  const ingredients = [];

  // Get all ingredients from the object. up to 20
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      //stop if no more ingredients
      break;
    }
  }

  console.log(ingredients);

  const newInnerHTML = `
	<div class="row">
	<div class="columns five">
		<img src="${meal.strMealThumb}" alt="Meal Image">
		${
      meal.strCategory
        ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
        : ""
    }
		${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ""}
		${
      meal.strTags
        ? `<p><strong>Tags:</strong> ${meal.strTags.split(",").join(", ")}</p>`
        : ""
    }
		<h5>Ingredients:</h5>
		<ul>
			${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
		</ul>
	</div>
	<div class="columns seven">
		<h4>${meal.strMeal}</h4>
		<p>${meal.strInstructions}</p>
	</div>
</div>
${
  meal.strYoutube
    ? `
<div class="row">
	<h5>Video Recipe</h5>
	<div class="videoWrapper">
		<iframe width="420" height="315"
		src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
		</iframe>
	</div>
</div>`
    : ""
}
`;

  mealContainer.innerHTML = newInnerHTML;
};

// Social panel js
const floatingBtn = document.querySelector(".floating-btn");
const closeBtn = document.querySelector(".close-btn");
const socialPanelContainer = document.querySelector(".social-panel-container");

floatingBtn.addEventListener("click", () => {
  socialPanelContainer.classList.toggle("visible");
});

closeBtn.addEventListener("click", () => {
  socialPanelContainer.classList.remove("visible");
});
