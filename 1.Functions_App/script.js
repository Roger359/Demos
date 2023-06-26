// event delegation buttons
const buttons = document.querySelector(".buttons");
console.log(buttons);
// Counterapp variables
const count = document.querySelector(".count");

// Palindrome checker app
const palindromeResult = document.querySelector(".palindromeResult");
const palindromeBtn = document.querySelector(".palindrome");

// vowel counter app
const vowelResult = document.querySelector(".vowelResult");
const vowelBtn = document.querySelector(".vowelBtn");

// copy text app
const copyTextBtn = document.querySelector(".copyTextBtn");
const coupon = document.querySelector(".coupon");

// click to tweet variables
const tweettextarea = document.querySelector(".tweettextarea");
const tweetBtn = document.querySelector(".tweetBtn");
const limit = document.querySelector(".limit");
let max = 50;

// input Character variables
const countCharacter = document.querySelector(".countCharacter");
const charactersInput = document.querySelector(".charactersInput");

// functions
function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "green";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "#000";
  }
}

function palindrome() {
  const word = document.querySelector(".input-text-palindrome").value;
  console.log(word);

  let wordLength = word.length;

  let startWord = word.substring(0, Math.floor(wordLength / 2)).toLowerCase();
  let endWord = word
    .substring(wordLength - Math.floor(wordLength / 2))
    .toLowerCase();

  // let flipEndWord = endWord.split('').reverse().join('')

  //using spread operator to reverse a word.
  let flipEndWord = [...endWord].reverse().join("");

  if (startWord === flipEndWord) {
    palindromeResult.innerHTML = `${word.toUpperCase()}  is a palindrome`;
  } else {
    palindromeResult.innerHTML = `${word.toUpperCase()}  is NOT a palindrome`;
  }
}

// Vowel Counter app
function countVowel() {
  console.log("count vowel function");
  const word = document.querySelector(".input-text-vowels");
  let vowelCount = 0;
  let wordValue = word.value.toLowerCase();

  for (let i = 0; i < wordValue.length; i++) {
    let letter = wordValue[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount++;
    }
  }
  vowelResult.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}

// copy text function
const copyText = (e) => {
  e.preventDefault();
  console.log(coupon.value.length);
  coupon.select();
  coupon.setSelectionRange(0, coupon.value.length);
  document.execCommand("copy");

  copyTextBtn.textContent = "Copied!!!";
  setTimeout(() => {
    copyTextBtn.textContent = "Copy";
    copyTextBtn.style.backgroundColor = "#db6400";
  }, 3000);
};

//updatelimit
const updateLimit = () => {
  limit.textContent = max;
  tweettextarea.addEventListener("input", () => {
    let inputLength = tweettextarea.value.length;
    limit.textContent = max - inputLength;
    if (inputLength > max) {
      tweetBtn.disabled = true;
      limit.style.color = "red";
    } else {
      tweetBtn.disabled = false;
      limit.style.color = "black";
    }
  });
};
updateLimit();

// tweet funtion
const tweet = () => {
  const tweetInput = `https://twitter.com/intent/tweet?text=`;
  window.open(`${tweetInput}${tweettextarea.value}`);
};

// Events Delegations for counter app
buttons.addEventListener("click", (event) => {
  if (event.target.classList.contains("add")) {
    count.innerText++;
    setColor();
  }
  if (event.target.classList.contains("subtract")) {
    count.innerText--;
    setColor();
  }
  if (event.target.classList.contains("reset")) {
    count.innerText = 0;
    setColor();
  }
});

palindromeBtn.addEventListener("click", palindrome);

vowelBtn.addEventListener("click", countVowel);

copyTextBtn.addEventListener("click", copyText);

tweetBtn.addEventListener("click", (e) => {
  tweet();
});

// input character counter
charactersInput.addEventListener("keyup", () => {
  countCharacter.innerHTML = charactersInput.value.length;
});
