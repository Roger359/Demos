// Random number generator
const number = document.querySelector(".number");
const numberBtn = document.querySelector(".numberBtn");

const generateNumber = () => {
  // generate number between 1 and 10
  const rand = Math.floor(Math.random() * 100 + 1);
  number.innerHTML = rand;
};

numberBtn.addEventListener("click", generateNumber);
generateNumber();

// const rand = Math.floor(Math.random() * 10 + 1);
// console.log(rand);

//Random string generator
const string = document.querySelector(".string"),
  stringBtn = document.querySelector(".stringBtn");

const generateString = () => {
  const randomString = Math.random().toString(36).slice(2);
  string.innerText = randomString;
};
stringBtn.addEventListener("click", generateString);

generateString();

//Random Hex Color Generator
const hex = document.querySelector(".hex");
const btnHex = document.querySelector(".btnHex");

const generateColor = () => {
  //generate the random chex color
  const randomColor = Math.random().toString(16).substring(2, 8);
  let randomColorConcat =  '#' + randomColor
  

  // change the background to the color generated

  const hexContainer = document.querySelector(".container-hexcolor");

  hexContainer.style.backgroundColor = randomColorConcat
  hex.innerHTML = randomColorConcat

  
  
  
  
};

btnHex.addEventListener("click", generateColor);

generateColor();

// let color = Math.random()
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);
// console.log(color)

// random quote generator
const quoteBtn = document.querySelector(".quoteBtn"),
  quoteElement = document.querySelector("#quote"),
  author = document.querySelector(".author");

const apiUrl = "https://api.quotable.io/random";

const getQuote = async () => {
  try {
    quoteBtn.innerText = 'Loading...'
    quoteBtn.disabled = true;
    quoteElement.innerText = 'Updating....';
    author.innerText = 'Updating...';
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    quoteBtn.disabled = false
    quoteBtn.innerText = 'Get a quote'
    quoteElement.innerText = data.content;
    author.innerText = '~' + ' ' + data.author;
  } catch (error) {
    console.log(error)
    quoteElement.style.color = 'red'
    quoteElement.innerText = 'An error happened, try again later'
    author.innerText = 'An error happened'
    quoteBtn.disabled = false

  }
};
getQuote()
quoteBtn.addEventListener("click", getQuote);