
const number = document.querySelector('.number')
const btn = document.querySelector('.generate')

const generateNumber = () => {
  // generate number between 1 and 10
  const rand = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = rand;
}

btn.addEventListener('click', generateNumber);
generateNumber();

// const rand = Math.floor(Math.random() * 10 + 1);
// console.log(rand);
