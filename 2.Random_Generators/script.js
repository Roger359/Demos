//  VARIABLES

// Random number generator
const number = document.querySelector(".number");
const numberBtn = document.querySelector(".numberBtn");

//Random string generator
const string = document.querySelector(".string"),
  stringBtn = document.querySelector(".stringBtn");

//Random Hex Color Generator
const hex = document.querySelector(".hex");
const btnHex = document.querySelector(".btnHex");

// random quote generator
const apiQuoteUrl = "https://api.quotable.io/random";
const quoteBtn = document.querySelector(".quoteBtn"),
  quoteElement = document.querySelector("#quote"),
  author = document.querySelector(".author");

// Random anime pics
const apiAnimeUrl = "https://api.waifu.pics/sfw/waifu";
const animeBtn = document.querySelector(".animeBtn"),
  animeContainer = document.querySelector(".anime-container"),
  animeImg = document.querySelector(".anime-img"),
  animeName = document.querySelector(".anime-name");

// dad jokes generator
const jokesBtn = document.querySelector(".jokesBtn");
const jokeEl = document.getElementById("joke");
const apiJokesUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": config.JOKES_KEY,
  },
};

// Random Emoji Generator
const emojiBtn = document.getElementById("emoji-btn"),
  emoji_Name = document.getElementById("emoji-name");
const emoji = [];
const emojiUrl = `https://emoji-api.com/emojis?access_key=${config.EMOJI_KEY}`;

// FUNCTIONS

const generateNumber = () => {
  // generate number between 1 and 10
  const rand = Math.floor(Math.random() * 100 + 1);
  number.innerHTML = rand;
};
generateNumber();

const generateString = () => {
  const randomString = Math.random().toString(36).slice(2);
  string.innerText = randomString;
};
generateString();

const generateColor = () => {
  //generate the random chex color
  const randomColor = Math.random().toString(16).substring(2, 8);
  let randomColorConcat = "#" + randomColor;

  // change the background to the color generated

  const hexContainer = document.querySelector(".container-hexcolor");

  hexContainer.style.backgroundColor = randomColorConcat;
  hex.innerHTML = randomColorConcat;
};
generateColor();

const getQuote = async () => {
  try {
    quoteBtn.innerText = "Loading...";
    quoteBtn.disabled = true;
    quoteElement.innerText = "Updating....";
    author.innerText = "Updating...";

    const response = await fetch(apiQuoteUrl);
    const data = await response.json();
    quoteBtn.disabled = false;
    quoteBtn.innerText = "Get a quote";
    quoteElement.innerText = data.content;
    author.innerText = "~" + " " + data.author;
  } catch (error) {
    console.log(error);
    quoteElement.style.color = "red";
    quoteElement.innerText = "An error happened, try again later";
    author.innerText = "An error happened";
    quoteBtn.disabled = false;
  }
};
getQuote();

const getAnime = async () => {
  try {
    animeBtn.disabled = true;
    animeBtn.innerText = "Loading...";
    animeImg.src = "spinner.svg";
    const response = await fetch(apiAnimeUrl);
    const data = await response.json();

    animeBtn.disabled = false;
    animeBtn.innerText = "Get Anime";

    animeContainer.style.display = "block";
    animeImg.src = data.url;
  } catch (error) {
    animeBtn.disabled = false;
    animeBtn.innerText = "Get anime";
  }
};
getAnime();

async function getJoke() {
  try {
    // before fetch
    jokeEl.innerText = "Updating...";
    jokesBtn.disabled = true;
    jokesBtn.innerText = "LOADING...";

    const response = await fetch(apiJokesUrl, options);
    const data = await response.json();

    // after fetch
    jokeEl.innerText = data[0].joke;
    jokesBtn.disabled = false;
    jokesBtn.innerText = "TELL ME A JOKE";
  } catch (error) {
    jokesBtn.disabled = true;
    jokesBtn.innerText = "TELL ME A JOKE";
    jokeEl.innerText = "An Error happened, try again latter";
  }
}
getJoke();

async function getEmoji() {
  let response = await fetch(emojiUrl);
  let data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }

  // console.log(emoji)
}
getEmoji();
// EVENTS
numberBtn.addEventListener("click", generateNumber);

stringBtn.addEventListener("click", generateString);

btnHex.addEventListener("click", generateColor);

quoteBtn.addEventListener("click", getQuote);

animeBtn.addEventListener("click", getAnime);

jokesBtn.addEventListener("click", getJoke);

emojiBtn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * emoji.length);

  emojiBtn.innerText = emoji[randomNumber].emojiName;
  emoji_Name.innerText = emoji[randomNumber].emojiCode;
});
