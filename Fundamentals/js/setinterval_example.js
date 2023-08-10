// variable to store our intervalID
let nIntervId;

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);

// Examples

setInterval(() => {
  console.log("ejecutando un setInterval cada de");
}, 1000);

setInterval(() => {
  console.log(new Date().toLocaleTimeString());
});

let interval = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
});

clearInterval(interval);
