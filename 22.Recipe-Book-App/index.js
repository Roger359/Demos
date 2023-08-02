const API_KEY = "715658beae7d4f2188ef63658cea1dde";
const recipeList = document.getElementById("recipe-list");

const getRecipes = async () => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json();

  return data.recipes;
};

function displayRecipes(recipes) {
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("li");
    recipeItem.classList.add("recipe-item");
    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = "Recipe Image";

    const recipeTitle = document.createElement("h2");
    recipeTitle.textContent = recipe.title;

    const recipeIngredients = document.createElement("p");
    recipeIngredients.innerHTML = `
    <strong>Ingredients<strong>${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}
    
    `;

    const recipeAnchor = document.createElement('a')
    recipeAnchor.href = recipe.sourceUrl;
    recipeAnchor.innerText = 'View Recipe'

    recipeItem.appendChild(recipeImage);
    recipeItem.appendChild(recipeTitle);
    recipeItem.appendChild(recipeIngredients);
    recipeItem.appendChild(recipeAnchor);
    recipeList.appendChild(recipeItem);
  });
}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
 
}

init();
