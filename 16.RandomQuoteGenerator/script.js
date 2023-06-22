const btn = document.querySelector(".btn"),
  quoteElement = document.querySelector("#quote"),
  author = document.querySelector(".author");

const apiUrl = "https://api.quotable.io/random";

const getQuote = async () => {
  try {
    btn.innerText = 'Loading...'
    btn.disabled = true;
    quoteElement.innerText = 'Updating....';
    author.innerText = 'Updating...';
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    btn.disabled = false
    btn.innerText = 'Get a quote'
    quoteElement.innerText = data.content;
    author.innerText = '~' + ' ' + data.author;
  } catch (error) {
    console.log(error)
    quoteElement.style.color = 'red'
    quoteElement.innerText = 'An error happened, try again later'
    author.innerText = 'An error happened'
    btn.disabled = false

  }
};
getQuote()
btn.addEventListener("click", getQuote);
