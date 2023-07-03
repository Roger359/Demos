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

// binary to decimal
const numberToConvertBtn = document.querySelector(".numberToConvert-btn");
const numberToConvertResult = document.querySelector(".numberToConvertResult");

// tip Calculator
const tipBtn = document.querySelector(".tip-btn");
const tipResult = document.querySelector(".tipResult");

// date Functions variables
const dateBtn = document.querySelector(".date-btn");
const dateResult = document.querySelector(".dateResult");

// vowel and consonants counter variables
const stringToCountBtn = document.querySelector(".stringToCount-btn");
const stringToCountVowels = document.querySelector(".stringToCountVowels");
const stringToCountConsts = document.querySelector(".stringToCountConsts");

// Name checkers variables
const stringToCheckBtn = document.querySelector(".stringToCheck-btn");
const stringToCheckResult = document.querySelector(".stringToCheckResult");

// Name checkers variables
const stringRegToCheckBtn = document.querySelector(".stringRegToCheck-btn");
const stringRegToCheckResult = document.querySelector(
  ".stringRegToCheckResult"
);
const regExpUsed = document.querySelector(".regExpUsed");

// Arrao to pow variables
const arrayToPowBtn = document.querySelector(".arrayToPow-btn");
const arrayToPowResult = document.querySelector(".arrayToPowResult");

// Array Max and Min value checker
const arrayMaxMinValueBtn = document.querySelector(".arrayMaxMinValue-btn");
const arrayMaxMinValueResult = document.querySelector(
  ".arrayMaxMinValueResult"
);

// Odd and Even Grouping Arrays
const arrayOfOddValuesBtn = document.querySelector(".arrayOfOddValues-btn");
const arrayOfOddValuesResult = document.querySelector(
  ".arrayOfOddValuesResult"
);

// Array Average Calculator
const arrayAverageBtn = document.querySelector(".arrayAverage-btn");
const arrayAverageResult = document.querySelector(".arrayAverageResult");

// Sorting Arrays variables
const sortingArrayValuesBtn = document.querySelector(".sortingArrayValues-btn");
const sortingArrayValuesResult = document.querySelector(
  ".sortingArrayValuesResult"
);

// Delete duplicate values in array
const deleteArrayValuesBtn = document.querySelector(".deleteArrayValues-btn");
const deleteArrayValuesResult = document.querySelector(
  ".deleteArrayValuesResult"
);

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
  let textLength = text.length;
  const result = text.repeat(times);
  const resultSplited = result.split("");

  console.log(textLength);
  console.log(result);
  console.log(resultSplited);
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
  } else {
    return "Does Not Working";
  }
};

const binaryToDecimal = (number = undefined, baseType = undefined) => {
  console.log(number, baseType);

  if (number === undefined) return "Did not enter number to convert";
  if (typeof Number(number) !== "number")
    return "Did not enter a value of number type";

  console.log(`inside the function ${number} and ${baseType}`);
  if (baseType === 2) {
    return `the number ${number}, base ${baseType} Binary = A number ${parseInt(
      number,
      baseType
    )} base 10`;
  } else if (baseType === 10) {
    number = number.toString(baseType);
    console.log(number);
    return `the number ${number}, base ${baseType} Decimal = A number ${number} base 2`;
  } else {
    return "The base type its not valid";
  }
};

const tipCalculator = (amount = undefined, tip = 0) => {
  if (amount === undefined) return "Did not enter number to convert";
  if (typeof amount !== "number") return "Did not enter a value of number type";

  if (Math.sign(amount) === -1) return "number can be negative";

  return `The tip is: ${amount} - ${tip}% = ${amount - (amount * tip) / 100}`;
};

const dateCalculator = (date) => {
  console.log(date.getFullYear());

  // if(!(date instanceof Date)) return 'Its not a valid date'

  let today = new Date().getTime();
  console.log(today);
  let dateEntered = new Date(date).getTime();
  console.log(dateEntered);

  let todayLessThanDate = today - dateEntered;
  console.log("today less date", todayLessThanDate);
  let yearsInMs = 1000 * 60 * 60 * 24 * 365;

  let humansYears = Math.floor(todayLessThanDate / yearsInMs);

  return Math.sign(humansYears) === -1
    ? `Missing ${Math.abs(humansYears)} years for the ${date.getFullYear()}`
    : Math.sign(humansYears) === 1
    ? ` ${humansYears} years have passed, since ${date.getFullYear()} `
    : `There is not difference is the same name`;
};

const vowelConsonantsCounter = (string) => {
  // if  return;

  let vowelCounter = 0;
  let consonantsCounter = 0;

  let stringValue = string.toLowerCase();

  for (let letter of stringValue) {
    if (/[a,e,i,o,u]/.test(letter)) {
      vowelCounter++;
    } else {
      consonantsCounter++;
    }
  }

  // for (let i = 0; i < stringValue.length; i++) {
  //   let letter = stringValue[i];

  //   if (letter.match(/([a,e,i,o,u])/)) {
  //     vowelCounter++;
  //   } else {
  //     consonantsCounter++;
  //   }
  //}
  stringToCountVowels.innerText = `Vowels Total: ${vowelCounter}`;

  stringToCountConsts.innerText = `Consonants Total: ${consonantsCounter}`;
};

const nameChecker = (name) => {
  if (!name) return "Did no enter a name";
  if (typeof name !== "string") return "Its not a valid string";

  let regExp = /^[A-Za-zÑñ\s]+$/g.test(name);

  return regExp
    ? `The name: ${name} is a valid name`
    : `the ${name} its not a valid name`;
};

const stringNameEmailChecker = (string = "", pattern = undefined) => {
  // if (!string) return "Did no enter a name";
  // if (typeof string !== "string") return "Its not a valid string";
  console.log("pattern passed to the function", pattern, string);

  let regExp = pattern.test(string);
  console.log(regExp);

  return regExp
    ? `The string: ${string} is a valid format`
    : `the string: ${string} its not a valid format`;
};

const arrayToPow = (array = undefined) => {
  if (!(array instanceof Array)) return "The value is not a Array";

  if (array.length === 0) return "The array is empty";

  let newArrayExp = [];
  let p = 2;
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) return "Its not a valid numbers array";
    newArrayExp.push(Math.pow(array[i], p));
  }

  // let newArrayWithMapMethod = array.map(element => element * element)

  return newArrayExp;
};

const getMaxMinValueInArray = (array = undefined) => {
  if (!(array instanceof Array)) return "The value is not a Array";

  if (array.length === 0) return "The array is empty";

  for (let num of array) {
    if (isNaN(num)) return "Its not a valid numbers array";
  }

  console.log(array);
  let maxValue = Math.max(...array);
  let minValue = Math.min(...array);
  console.log(maxValue);
  return `The min value of the array passed is = ${minValue} and the Max value is = ${maxValue}`;
};

const getOddAndEvenNumbersFromArray = (array = undefined) => {
  if (!(array instanceof Array)) return "The value is not a Array";

  for (let num of array) {
    if (isNaN(num)) return "Its not a valid numbers array";
  }

  console.log("inside the function", array);
  let divisibleOfOdd = false;
  let divisibleOfEven = false;
  let oddArrayNumber = [];
  let evenArrayNumber = [];

  // get odd numbers

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      divisibleOfOdd = true;
      oddArrayNumber.push(array[i]);
    }
  }

  // get even number
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      divisibleOfEven = true;
      evenArrayNumber.push(array[i]);
    }
  }

  console.log(oddArrayNumber, divisibleOfOdd);
  console.log(evenArrayNumber, divisibleOfEven);

  // using method filter
  let newObject = {
    odd: array.filter((num) => num % 2 === 1),
    even: array.filter((num) => num % 2 === 0),
  };
  console.log(newObject);

  return `Odd Numbers = ${newObject.odd} and Even numbers = ${newObject.even}`;
};

const sortingArrays = (array = undefined) => {
  if (!(array instanceof Array)) return "The value is not a Array";

  for (let num of array) {
    if (isNaN(num)) return "Its not a valid numbers array";
  }

  const objectsOfArrays = {
    array,
    ascendent: array.map((el) => el).sort((a, b) => a - b),
    descendent: array
      .map((el) => el)
      .sort((a, b) => a - b)
      .reverse(),
  };

  return `Convert the array = ${array} into a Ascendent Array = ${objectsOfArrays.ascendent} and Descendent Array is = ${objectsOfArrays.descendent}`;
};

const removeDuplicateValuesInArray = (array) => {
  if (!(array instanceof Array)) return "The value is not a Array";

  for (let num of array) {
    if (isNaN(num)) return "Its not a valid numbers array";
  }

  let newArray =  array.filter((item, index) => array.indexOf(item) === index)
  console.log(newArray)
  return `Remove duplicate values from = ${array}, new array without duplicate values = ${newArray}`
}

const getArrayAverage = (array = undefined) => {
  if (!(array instanceof Array)) return "The value is not a Array";

  if (array.length === 0) return "The array is empty";

  for (let num of array) {
    if (isNaN(num)) return "Its not a valid numbers array";
  }

  return `The Average value is = `;
};
// events

stringInput.addEventListener("keyup", () => {
  stringResult.innerHTML = `Length:  ${countCharacters(stringInput.value)}`;
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
  console.log(grade);
  const unity = document.getElementById("unity").value;
  console.log(unity);
  gradesNumberResult.innerText = convertTemperature(grade, unity);
});

numberToConvertBtn.addEventListener("click", () => {
  const number = Number(document.querySelector(".numberToConvert").value);
  const baseType = Number(document.getElementById("baseType").value);
  console.log(number, baseType);

  numberToConvertResult.innerText = binaryToDecimal(number, baseType);
});

tipBtn.addEventListener("click", () => {
  const amount = Number(document.querySelector(".Amount").value);
  const tip = Number(document.getElementById("tip").value);

  tipResult.innerText = tipCalculator(amount, tip);
});

dateBtn.addEventListener("click", () => {
  let date = document.querySelector(".date").value;
  date = new Date(date);

  dateResult.innerText = dateCalculator(date);
});

stringToCountBtn.addEventListener("click", () => {
  const string = document.querySelector(".stringToCount").value;

  vowelConsonantsCounter(string);
});

stringToCheckBtn.addEventListener("click", () => {
  const name = document.querySelector(".stringToCheck").value;
  stringToCheckResult.innerText = nameChecker(name);
});

stringRegToCheckBtn.addEventListener("click", () => {
  const string = document.querySelector(".stringRegToCheck").value;
  console.log(string);
  let pattern = document.getElementById("regExpPattern").value;

  pattern = new RegExp(pattern);

  console.log(`conversion to regExp = ${pattern}`);
  regExpUsed.innerText = `The regular expression used is: ${pattern}`;
  stringRegToCheckResult.innerText = stringNameEmailChecker(string, pattern);
});

arrayToPowBtn.addEventListener("click", () => {
  let array = document.querySelector(".arrayToPow").value;
  if (array.length === 0)
    return (sortingArrayValuesResult.innerText = "The array is empty");
  let newArray = [];

  array = array.split(",");

  for (let i = 0; i < array.length; i++) {
    newArray.push(parseInt(array[i]));
  }

  console.log("converted string to array", newArray);

  arrayToPowResult.innerHTML = `Array original ${newArray} new array pow is ${arrayToPow(
    newArray
  )}`;
});

arrayMaxMinValueBtn.addEventListener("click", () => {
  let array = document.querySelector(".arrayMaxMinValue").value;
  if (array.length === 0)
    return (sortingArrayValuesResult.innerText = "The array is empty");
  let newArray = [];
  array = array.split(",");
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    newArray.push(parseInt(array[i]));
  }

  console.log("converted string to array", newArray);

  arrayMaxMinValueResult.innerText = getMaxMinValueInArray(newArray);
});

arrayOfOddValuesBtn.addEventListener("click", () => {
  let array = document.querySelector(".arrayOfOddValues").value;
  if (array.length === 0)
    return (sortingArrayValuesResult.innerText = "The array is empty");

  let newArray = [];
  array = array.split(",");

  console.log(array);

  // converting to  numbers
  for (let i = 0; i < array.length; i++) {
    newArray.push(parseInt(array[i]));
  }
  console.log("converted string to array", newArray);

  arrayOfOddValuesResult.innerText = getOddAndEvenNumbersFromArray(newArray);
});

sortingArrayValuesBtn.addEventListener("click", () => {
  let array = document.querySelector(".sortingArrayValues").value;
  if (array.length === 0)
    return (sortingArrayValuesResult.innerText = "The array is empty");

  let newArray = [];
  array = array.split(",");
  console.log(array);

  // converting to  numbers
  for (let i = 0; i < array.length; i++) {
    newArray.push(parseInt(array[i]));
  }
  console.log("converted string to array", newArray);
  sortingArrayValuesResult.innerText = sortingArrays(newArray);
});

deleteArrayValuesBtn.addEventListener("click", () => {
  let array = document.querySelector(".deleteArrayValues").value;
  if (array.length === 0)
    return (deleteArrayValuesResult.innerText = "The array is empty");

  let newArray = [];
  array = array.split(",");
  console.log(array);

  // converting to  numbers
  for (let i = 0; i < array.length; i++) {
    newArray.push(parseInt(array[i]));
  }
  console.log("converted string to array", newArray);
  deleteArrayValuesResult.innerText = removeDuplicateValuesInArray(newArray);
});

arrayAverageBtn.addEventListener("click", () => {
  let array = document.querySelector(".arrayAverage").value;
  let sqr = [];
  array = array.split(",");

  for (let i = 0; i < array.length; i++) {
    sqr.push(parseInt(array[i]));
  }
  console.log("converted string to array", sqr);

  arrayAverageResult.innerText = getArrayAverage(array);
});
