const navbarElement = document.querySelector('.navbar')
const bottomContainer = document.querySelector('.bottom-container')

console.log(bottomContainer.offsetTop)
console.log(navbarElement.offsetHeight)

window.addEventListener('scroll', () => {

 if(window.scrollY > bottomContainer.offsetTop - navbarElement.offsetHeight - 50){

  navbarElement.classList.add('active')

 }else{
  navbarElement.classList.remove('active')
 }

})