const btn = document.querySelector(".btn")
console.log(btn)
const result = document.querySelector(".result")

btn.addEventListener('click', palindrome)

function palindrome(){
  const word = document.querySelector(".input-text").value;
  console.log(word)

  let wordLength = word.length;

  let startWord = word.substring(0,Math.floor(wordLength/2)).toLowerCase();
  let endWord = word.substring(wordLength - Math.floor(wordLength / 2)).toLowerCase();

  // let flipEndWord = endWord.split('').reverse().join('')

  //using spread operator to reverse a word.
  let flipEndWord = [...endWord].reverse().join('')

  if(startWord === flipEndWord){
    result.innerHTML = `${word.toUpperCase()}  is a palindrome`
  }else{
    result.innerHTML = `${word.toUpperCase()}  is NOT a palindrome`
  }
  
  

  
}