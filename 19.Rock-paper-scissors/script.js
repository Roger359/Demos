const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const  userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

let userCount = 0;
let computerCount = 0;

const computerPlayer = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
};

const playRound = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {

    return "Its a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userCount++;
    userScore.textContent = userCount
    return "You win! " + userChoice + " beats " + computerChoice;
  } else {
    computerCount++;
    computerScore.textContent = computerCount
    return "You lose! " + computerChoice + " beats " + userChoice;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    const playRoundResult = playRound(button.id, computerPlayer());
    result.innerText = playRoundResult
  });
});
