import { isNumber, isString } from "./validations.js";

// Variables
//count string variables
const stringResult = document.querySelector(".stringResult");
const stringInput = document.getElementById("stringInput");

// cut string variables
const wordToCutResult = document.querySelector(".wordToCutResult");
const wordToCutBtn = document.querySelector(".wordToCut-btn");

// split string variables
const splitStringResult = document.querySelector(".splitStringResult");
const splitStringBtn = document.querySelector(".splitString-btn");

// repeat strings variables
const repeatStringBtn = document.querySelector(".repeatString-btn");
const repeatStringResult = document.querySelector(".repeatStringResult");

// reverse strings variables
const reverseStringBtn = document.querySelector(".reverseString-btn");
const reverseStringResult = document.querySelector(".reverseStringResult");

// counting words variables
const numbersOfWordsBtn = document.querySelector(".numbersOfWords-btn");
const numbersOfWordsResult = document.querySelector(".numbersOfWordsResult");

// Palindrome variables
const palBtn = document.querySelector(".pal-btn");
const palRersult = document.querySelector(".palResult");

// Functions

const countCharacters = (string = "") => {
  if (!string) {
    return "Did not enter the string";
  } else {
    return string.length;
  }
  // return isString(string) ? string.length : null;
};

const cutWords = (text = "", newLength = undefined) => {
  if (newLength > text.length) {
    return "The new length has to be less than the original one.";
  }
  if ((isString(text) && !text) || !newLength) {
    return "Did not enter the values";
  } else {
    return `${text.slice(0, newLength)}`;
  }
};

const splitString = (text, separator = " ") => {
  if (isString(text) && !text) {
    return "Did not enter the values";
  } else {
    return text.split(" ");
  }
};

const repeatStrings = (text, times) => {
  if (times === 0) return "The times parameter can't be 0";

  if (Math.sign(times) === -1) return "Negative numbers its not allowed";

  if (!isString(text) && !isNumber(times)) {
    return "The string or the times is not datatype allowed";
  }

  const result = text.repeat(times);
  console.log(result.split(","));

  return result;
};

const reverseString = (text) => {
  if (isString(text)) {
    return text.split("").reverse().join("");
  }

  return result;
};

function countingWords(str, word) {
  if (!isString(str)) {
    return "Its not a string";
  } else {
    return str.split(" ").filter((item) => item == word).length;
  }
}

function palindrome() {
  const word = document.querySelector(".palString").value;

  let wordLength = word.length;

  let startWord = word.substring(0, Math.floor(wordLength / 2)).toLowerCase();
  let endWord = word
    .substring(wordLength - Math.floor(wordLength / 2))
    .toLowerCase();

  // let flipEndWord = endWord.split('').reverse().join('')

  //using spread operator to reverse a word.
  let flipEndWord = [...endWord].reverse().join("");

  if (startWord === flipEndWord) {
    palRersult.innerHTML = `${word.toUpperCase()}  is a palindrome`;
  } else {
    palRersult.innerHTML = `${word.toUpperCase()}  is NOT a palindrome`;
  }
}
// events

stringInput.addEventListener("keyup", () => {
  stringResult.innerHTML = `Characters:  ${countCharacters(stringInput.value)}`;
});

wordToCutBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("wordToCut-btn")) {
    const wordToCut = document.getElementById("wordToCut").value;

    const valueToCut = document.getElementById("valueToCut").value;

    wordToCutResult.innerHTML = cutWords(wordToCut, valueToCut);
  }
});

splitStringBtn.addEventListener("click", (e) => {
  const string = document.getElementById("splitString").value;
  let separator = document.getElementById("separator").value;

  splitStringResult.innerHTML = splitString(string, separator);
});

repeatStringBtn.addEventListener("click", () => {
  const string = document.getElementById("repeatString").value;
  let times = document.getElementById("repeatTimes").value;
  times = Number(times);

  for(let i = 1; i <= times; i++){
    repeatStringResult.innerText = `${string}, ${i}`
  }

  // repeatStringResult.innerText = repeatStrings(string, times);
});

reverseStringBtn.addEventListener("click", () => {
  const string = document.getElementById("reverseString").value;
  reverseStringResult.innerText = reverseString(string);
});

numbersOfWordsBtn.addEventListener("click", () => {
  const string = document.getElementById("numbersOfWords").value;
  const word = document.getElementById("wordSearch").value;
  console.log(countingWords(string, word));
  numbersOfWordsResult.innerText = countingWords(string, word);
});

palBtn.addEventListener("click", palindrome);
