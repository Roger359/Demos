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
    return "The new length has to be less than the original one."
    
  }
  if (isString(text) && !text || !newLength) {
    return  "Did not enter the values";
  } else {
    return `${text.slice(0, newLength)}`;
  }
};

const splitString = (text, separator) => {
  if (isString(text) && isString(separator)) {
    console.log(text.split(separator));
    return text.split(separator);
  }
};

const repeatStrings = (text, times) => {
  if (isString(text) && isNumber(times)) {
    const result = text.repeat(times);
    console.log(result);
    return result;
  }
};

const reverseString = (text) => {
  if (isString(text)) {
    return text.split("").reverse().join("");
  }

  return result;
};

function countingWords(str, word) {
  if (isString(str) && isString(word)) {
    // console.log(str.split(' ').filter(item => item === word).length)
    return str.split(" ").filter((word) => word === str).length;
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

  repeatStringResult.innerText = repeatStrings(string, times);
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
