const hex = document.querySelector('.hex');
const btn = document.querySelector('.generate')

const generateColor = () => {
  //generate the random chex color
const randomColor = Math.random().toString(16).substring(2,8);
 // change the background to the color generated
 document.body.style.backgroundColor = "#" + randomColor;
 hex.innerHTML = "#" + randomColor;

}

btn.addEventListener('click', generateColor)

generateColor()


// let color = Math.random()
// color = Math.random().toString(16); 
// color = Math.random().toString(16).substring(2, 8); 
// console.log(color)