const rollBtn = document.getElementById("roll-btn");
const dice = document.getElementById("dice");
const rollHistory = document.getElementById("roll-history");

let historyList = [];

const getDiceFace = (randomRoll) => {
  switch (randomRoll) {
    case 1:
      return "&#9856;";
      break;
    case 2:
      return " &#9857;";
      break;
    case 3:
      return " &#9858;";
      break;
    case 4:
      return " &#9859;";
      break;
    case 5:
      return " &#9860;";
      break;
    case 6:
      return " &#9861;";
      break;
    default:
      return "";
      break;
  }
};

const updateRollHistory = () => {
  rollHistory.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span> `;
    rollHistory.appendChild(listItem);
  }
};

const rollDice = () => {
  const randomRoll = Math.floor(Math.random() * 6) + 1;
  console.log(randomRoll);

  const diceFace = getDiceFace(randomRoll);
  dice.innerHTML = diceFace;

  historyList.push(randomRoll);
  console.log(historyList);
  updateRollHistory();
};

rollBtn.addEventListener("click", () => {
  dice.classList.add("roll-animation");
  setTimeout(() => {
    dice.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
