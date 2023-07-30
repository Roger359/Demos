const timer = document.getElementById("timer");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// const buttons = document.querySelectorAll("button");
let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;

  timer.innerHTML = formattedTime;
}

const startTimer = () => {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if(timeLeft === 0){
      alert('Time s up!')
      clearInterval(interval)
      timeLeft = 1500
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(interval)
};

const resetTimer = () => {

clearInterval(interval)
timeLeft = 1500;
updateTimer()

};

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     console.log(button.id);

//     if ((button.id = "start")) {
//       startTimer();
//     } else if (button.id === "stop") {
//       stopTimer();
//     } else {
//       resetTimer();
//     }
//   });
// });
