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

// deleteChracter variables
const deleteWordBtn = document.querySelector(".deleteWord-btn");
const wordDeletedResult = document.querySelector(".wordDeletedResult");

// random Number variables
const randomNumberBtn = document.querySelector(".randomNumber-btn");
const randomNumberResult = document.querySelector(".randomNumberResult");

// capicua variables
const capicuaNumberBtn = document.querySelector(".capicuaNumber-btn");
const capicuaNumberResult = document.querySelector(".capicuaNumberResult");

// Factorial number variables
const factorialNumberBtn = document.querySelector(".factorialNumber-btn");
const factorialNumberResult = document.querySelector(".factorialNumberResult");

//odd number variables
const oddNumberBtn = document.querySelector(".oddNumber-btn");
const oddNumberResult = document.querySelector(".oddNumberResult");

//even number variables
const evenNumberBtn = document.querySelector(".evenNumber-btn");
const evenNumberResult = document.querySelector(".evenNumberResult");

// temperature converter

const gradesNumberBtn = document.querySelector(".gradesNumber-btn");
const gradesNumberResult = document.querySelector(".gradesNumberResult");

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

const splitString = (text) => {
  if (isString(text) && !text) {
    return "Did not enter the values";
  } else {
    // console.log(text.split('-'))
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

const reverseString = (text = "") => {
  if (!text) {
    return "Did not enter the string";
  } else {
    return text.split("").reverse().join("");
  }

  return result;
};

function countingWords(str = "", word = "") {
  if (!isString(str)) {
    return (numbersOfWordsResult.innerText = "Its not a string");
  }

  if (!str)
    return (numbersOfWordsResult.innerText = "Did not enter the string");
  if (!word)
    return (numbersOfWordsResult.innerText = "Did not enter the string");

  // const result = str.split(" ").filter((item) => item == word).length;

  let i = 0,
    counter = 0;

  while (i !== -1) {
    i = str.indexOf(word, i);
    if (i !== -1) {
      i++;
      counter++;
    }
  }

  return (numbersOfWordsResult.innerText = counter);
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

const deleteCharacter = (str = "", pattern = "") => {
  !str
    ? (wordDeletedResult.innerText = "Did not enter the string")
    : !pattern
    ? (wordDeletedResult.innerText = "Did not enter the pattern")
    : (wordDeletedResult.innerHTML = str.replace(
        new RegExp(pattern, "ig"),
        ""
      ));
};
const randomNumber = (min, max) => {
  // if(!min && !max) return 'No enter the min or max value required'

  // return Math.round((Math.random() * 100) + 500);
  // return min + Math.round(Math.random() * (max - min + 1)) ;
  return min + Math.floor(Math.random() * (max - min + 1));
};

const capicuaChecker = (num = 0) => {
  if (!num) return "Did no enter a number";
  if (typeof num === "string") return "You enter a string";

  let convertNumToString = num.toString();
  let reversedNumber = convertNumToString.split("").reverse().join("");

  return convertNumToString === reversedNumber
    ? `${num} is Capicua`
    : `${num} is not a Capicua`;
};

// const factorialize = (num) => {

// // if(!num) return 'did not enter a value'

// // if(!isNumber(num)) return 'The value is not a number'

// if (num < 0)
// return -1;

// // Si el número es 0, su factorial es 1.
// else if (num == 0)
// return 1;

// // De otra forma, llama al procedimiento de nuevo
// else {
// return (num * factorialize(num - 1));
// }

// };

// function factorialize(num) {
//   // Paso 1. Crea una variable resultado que guarda num
//   var result = num;

//   // Si num = 0 O num = 1, el factorial devolverá 1
//   if (num === 0 || num === 1)
//     return 1;

//   // Paso 2. Crea un bucle WHILE
//   while (num > 1) {
//     num--; // decrementation by 1 at each iteration
//     result = result * num; // or result *= num;
//     /*
//                     num           num--      var result      result *= num
//     1ª iteración:   5             4            5             20 = 5 * 4
//     2ª iteración:   4             3           20             60 = 20 * 3
//     3ª iteración:   3             2           60            120 = 60 * 2
//     4ª iteración:   2             1          120            120 = 120 * 1
//     5ª iteración:   1             0          120
//     Fin del bucle WHILE
//     */
//   }

//   // Paso 3. Regresa el factorialdel integral dado
//   return result; // 120
// }

function factorialize(num = undefined) {
  if (Math.sign(num) === -1) return "number can be negative";

  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

const oddNumber = (num = undefined) => {
  if (Math.sign(num) === -1) return "number can be negative";

  if (!typeof num === "number") return "Its not a number";

  if (Number(num) === 0 || Number(num) === 1) return "Number can be 0 or 1";

  let divisible = false;

  for (let i = 2; i < num; i++) {
    if (Number(num) % i === 0) {
      divisible = true;
      break;
    }
  }

  return divisible ? `${num} Its not a odd number` : `${num} Its a odd number`;
};

const evenNumber = (num = undefined) => {
  if (Number(num) === undefined) return "Did not enter a number";

  if (typeof num !== "number") return "Its not a number";

  let divisible = false;

  for (let i = 2; i < num; i++) {
    if (Number(num) % 2 === 0) {
      divisible = true;
      break;
    }
  }
  console.log(divisible);
  return divisible
    ? `${num} Its a even number`
    : `${num} Its not a even number`;
};

const convertTemperature = (grades = undefined, unity = undefined) => {
  if (grades === undefined) return "Did not enter grades to convert";

  if (unity.length !== 1 || !/(C|F)/.test(unity))
    return "Its no a valid unity ";

  if (unity === "C") {
    return `${grades}"C = ${Math.round(grades * (9 / 5) + 32)}F`;
  } else if (unity === "F") {
    return `${grades}F = ${Math.round((grades - 32) * (5 / 9))}C`;
  }else{
    return 'Does Not Working'
  }
};

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

  splitStringResult.innerHTML = splitString(string);
});

repeatStringBtn.addEventListener("click", () => {
  const string = document.getElementById("repeatString").value;
  let times = document.getElementById("repeatTimes").value;
  times = Number(times);

  // for(let i = 1; i <= times; i++){
  //   repeatStringResult.innerText = `${string}, ${i}`
  // }

  repeatStringResult.innerText = repeatStrings(string, times);
});

reverseStringBtn.addEventListener("click", () => {
  const string = document.getElementById("reverseString").value;
  reverseStringResult.innerText = reverseString(string);
});

numbersOfWordsBtn.addEventListener("click", () => {
  const string = document.getElementById("numbersOfWords").value;
  const word = document.getElementById("wordSearch").value;
  // console.log(countingWords(string, word));
  countingWords(string, word);
});

palBtn.addEventListener("click", palindrome);

deleteWordBtn.addEventListener("click", () => {
  const str = document.getElementById("deleteOfWords").value;
  const pattern = document.querySelector(".specificWord").value;

  return deleteCharacter(str, pattern);
});

randomNumberBtn.addEventListener("click", () => {
  const min = Number(document.querySelector(".minValue").value);
  const max = Number(document.querySelector(".maxValue").value);
  randomNumberResult.innerText = randomNumber(min, max);
});

capicuaNumberBtn.addEventListener("click", () => {
  const num = Number(document.querySelector(".capicuaNumber").value);
  capicuaNumberResult.innerText = capicuaChecker(num);
});

factorialNumberBtn.addEventListener("click", () => {
  const num = Number(document.querySelector(".factorialNumber").value);
  console.log(num);
  factorialNumberResult.innerHTML = factorialize(num);
});

oddNumberBtn.addEventListener("click", () => {
  const num = Number(document.querySelector(".oddNumber").value);

  let result = oddNumber(num);

  result ? (oddNumberResult.innerText = result) : result;
});

evenNumberBtn.addEventListener("click", () => {
  const num = Number(document.querySelector(".evenNumber").value);

  let result = evenNumber(num);

  result ? (evenNumberResult.innerText = result) : result;
});

gradesNumberBtn.addEventListener("click", () => {
  const grade = Number(document.querySelector(".grade").value);
  console.log(grade)
  const unity = document.getElementById("unity").value;
  console.log(unity)
  gradesNumberResult.innerText = convertTemperature(grade, unity);
});
