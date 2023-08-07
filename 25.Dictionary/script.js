const input = document.getElementById("input");
const infoTextElement = document.getElementById("info-text");
const meaningContainer = document.querySelector(".meaning-container");
const titleEL = document.getElementById('title')
const meaning = document.querySelector('.meaning')
const phonetic = document.querySelector('.phonetic'),
phoneticAudio = document.getElementById('audio')


async function fetchAPI(word) {
  try {
   
    
    infoTextElement.style.display = "block";
    meaningContainer.style.display = "none";
    infoTextElement.innerHTML = `Searching the meaning of "${word}"`;
    
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const result = await fetch(url).then((res) => res.json());

    if(result.title){
      
      infoTextElement.style.display = "none";
      meaningContainer.style.display = "block";
      titleEL.innerHTML = word;
      meaning.innerHTML = result.title
      phonetic.innerHTML = "N/A"
      phoneticAudio.style.display = "none"
      
    }else{

      infoTextElement.style.display = "none";
      meaningContainer.style.display = "block";
      phoneticAudio.style.display = "inline-flex"
      titleEL.innerHTML = result[0].word
      meaning.innerHTML = result[0].meanings[0].definitions[0].definition
      phonetic.innerHTML = result[0].phonetics[0].text || result[0].phonetics[1].text 
      phoneticAudio.src = result[0].phonetics[0].audio || result[0].phonetics[1].audio 
    }

   
    
    return console.log(result);
  } catch (error) {
    infoTextElement.innerHTML = `An error happened, try again later`;
  }
}

input.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
