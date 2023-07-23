const input = document.getElementById("result");
const buttons = document.querySelectorAll("button");


const clearResult = () => {
  input.value = ''
}

const calculateResult = () => {

  input.value = eval(input.value)

}

const appendValue = (value) => {

  input.value += value

}



for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const buttonValue = buttons[i].textContent


    if(buttonValue === 'C'){
      clearResult()

    }else if(buttonValue === '='){
      calculateResult()

    }else{
      appendValue(buttonValue)
    }
  });
}
