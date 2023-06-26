// Weight converter variables
let pounds = document.querySelector(".pounds"),
  kilograms = document.querySelector(".kilograms"),
  grams = document.querySelector(".grams"),
  ounces = document.querySelector(".ounces"),
  form = document.querySelector("form");

// temperature variables
let celsius = document.querySelector(".celsius"),
  fahrenheit = document.querySelector(".fahrenheit"),
  kelvin = document.querySelector(".kelvin");

// Currency Variables
const currencyFirstElement = document.getElementById("currency-first");
const worthFirstElement = document.getElementById("worth-first");
const currencySecondElement = document.getElementById("currency-second");
const worthSecondElement = document.getElementById("worth-second");
const exchangeRate = document.querySelector(".exchange-rate");
// const currencyApi = 'https://v6.exchangerate-api.com/v6/ccff988d6a565364b1379120/latest/USD'

//FUNCTIONS

function convertWeight(e) {
  if (e.target.classList.contains("pounds")) {
    let x = e.target.value;

    kilograms.value = (x / 2.2046).toFixed(2);
    grams.value = (x / 0.0022046).toFixed(2);
    ounces.value = (x * 16).toFixed(2);
  }
  if (e.target.classList.contains("kilograms")) {
    let x = e.target.value;

    pounds.value = (x * 2.2046).toFixed(2);
    grams.value = (x * 1000).toFixed(2);
    ounces.value = (x * 35.274).toFixed(2);
  }
  if (e.target.classList.contains("grams")) {
    let x = e.target.value;

    kilograms.value = (x / 1000).toFixed(2);
    pounds.value = (x * 0.0022046).toFixed(2);
    ounces.value = (x * 0.035274).toFixed(2);
  }
  if (e.target.classList.contains("ounces")) {
    let x = e.target.value;

    kilograms.value = (x / 35.274).toFixed(2);
    grams.value = (x / 0.035274).toFixed(2);
    pounds.value = (x * 0.0625).toFixed(2);
  }
}

function convertTemperature(event) {
  console.log(event.target.name);

  const currentValue = +event.target.value;
  switch (event.target.name) {
    case "celsius":
      kelvin.value = (currentValue + 273.15).toFixed(2);
      fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);
      break;
    case "kelvin":
      celsius.value = (currentValue - 273.32).toFixed(2);
      fahrenheit.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/${config.MY_KEY}/latest/${currencyFirstElement.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondElement.value];
      exchangeRate.innerText = `1 ${currencyFirstElement.value} = ${rate} ${currencySecondElement.value}`
      worthSecondElement.value = (worthFirstElement.value * rate).toFixed(4)
    });
  // return data;
}

// EVENTS
form.addEventListener("input", convertWeight);

currencyFirstElement.addEventListener("change", updateRate);
worthFirstElement.addEventListener("change", updateRate);
currencySecondElement.addEventListener("change", updateRate);
