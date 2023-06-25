const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "#000";
  }
}

// Events Delegations
buttons.addEventListener("click", (event) => {
  if (event.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  }
  if (event.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  }
  if (event.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
});

// const add = document.querySelector(".add")
// const resetCount = document.querySelector(".reset")
// const sub = document.querySelector(".subtract")

// add.addEventListener("click", () => {
//   count.innerHTML++;
// })
// sub.addEventListener("click", () => {
//   count.innerHTML--;
// })
// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// })


// Palindrome Checker
const palBtn = document.querySelector(".palBtn")
const palResult = document.querySelector(".palResult")

palBtn.addEventListener('click', palindrome)

function palindrome(){
  const word = document.querySelector(".input-text-palindrome").value;
  console.log(word)

  let wordLength = word.length;

  let startWord = word.substring(0,Math.floor(wordLength/2)).toLowerCase();
  let endWord = word.substring(wordLength - Math.floor(wordLength / 2)).toLowerCase();

  // let flipEndWord = endWord.split('').reverse().join('')

  //using spread operator to reverse a word.
  let flipEndWord = [...endWord].reverse().join('')

  if(startWord === flipEndWord){
    palResult.innerHTML = `${word.toUpperCase()}  is a palindrome`
  }else{
    palResult.innerHTML = `${word.toUpperCase()}  is NOT a palindrome`
  }
  
  

  
}

// Vowel Counter app
const word = document.querySelector('.input-text-vowels')
const vowelBtn = document.querySelector('.vowelBtn')
const vowelResult = document.querySelector('.vowelResult')

vowelBtn.addEventListener('click', countVowel);

function countVowel(){
  let vowelCount = 0;
  let wordValue = word.value.toLowerCase();

  for(let i = 0; i < wordValue.length; i++){
    let letter = wordValue[i];
    if(letter.match(/([a,e,i,o,u])/)){
      vowelCount++
    }

  }
  vowelResult.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`
}