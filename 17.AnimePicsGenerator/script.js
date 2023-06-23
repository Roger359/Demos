const btn = document.querySelector(".btn"),
  animeContainer = document.querySelector(".anime-container"),
  animeImg =document.querySelector('.anime-img')
  animeName = document.querySelector(".anime-name");

  const apiUrl = 'https://api.waifu.pics/sfw/waifu'

const getAnime =  async () => {
  try {
    btn.disabled = true
    btn.innerText = 'Loading...'
    animeImg.src = 'spinner.svg'
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)

    btn.disabled = false
    btn.innerText = 'Get Anime'

    animeContainer.style.display = 'block'
    animeImg.src = data.url
    animeName.innerText = 'unknow'
    
  } catch (error) {
    btn.disabled = false
    btn.innerText = 'Get anime'
    animeName.innerText = 'An error happend, try again later'
  }

};
getAnime()
btn.addEventListener("click", getAnime);
