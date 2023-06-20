

const btn = document.querySelector(".btn");
const jokeEl = document.getElementById("joke");

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": config.MY_KEY,
  },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
  
    // before fetch
    jokeEl.innerText = "Updating...";
    btn.disabled = true;
    btn.innerText = "LOADING...";

    const response = await fetch(apiUrl, options);
    const data = await response.json();

    // after fetch
    jokeEl.innerText = data[0].joke;
    btn.disabled = false;
    btn.innerText = "TELL ME A JOKE";
  } catch (error) {
    btn.disabled = true;
    btn.innerText = "TELL ME A JOKE";
    jokeEl.innerText = "An Error happened, try again latter";
  }
}

btn.addEventListener("click", getJoke);
