const btn = document.querySelector(".btn");
const resultInput = document.getElementById("result");
const weightCondition = document.getElementById("weight-condition");

const calculateBMI = () => {
  const heightInput = document.getElementById("height").value / 100;
  const weightInput = document.getElementById("weight").value;

  const bmiValue = weightInput / (heightInput * heightInput);
  console.log(bmiValue);

  resultInput.value = bmiValue.toFixed(3);

  if (bmiValue < 18.5) {
    weightCondition.innerText = "Under Weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightCondition.innerText = "Normal Weight";
  }else if(bmiValue >= 25 && bmiValue <= 29.9){
    weightCondition.innerText = 'Overweight'

  }else if(bmiValue >= 30 ){
    weightCondition.innerText = 'Obesity'

  }
};

btn.addEventListener("click", calculateBMI);
