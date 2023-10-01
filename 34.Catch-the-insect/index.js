const startBtn = document.getElementById("start-btn");
const screens = document.querySelectorAll(".screen");
const chooseInsectBtns = document.querySelectorAll(".choose-insect-btn");
const gameContainer = document.querySelector(".game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const annoyingMessage = document.getElementById("annoying-message");
let seconds = 0;
let score = 0;
let selectedInsect = {};

// Functions

const increaseTime = () => {
	let m = Math.floor(seconds / 60);
	let s = seconds % 60;
	m = m < 10 ? `0${m}` : m;
	s = s < 10 ? `0${s}` : s;
	timeEl.innerHTML = `Time ${m}:${s}`;

	seconds++;
};

const addInsects = () => {
	setTimeout(createInsect, 1000);
	setTimeout(createInsect, 1500);
};

function catchInsect() {
	increaseScore();
	this.classList.add("catched");
	setTimeout(() => {
		this.remove();
	}, 2000);
	addInsects();
}

function increaseScore() {
	score++;
	if (score > 19) {
		annoyingMessage.classList.add("visible");
	}
	scoreEl.innerHTML = `Score: ${score}`;
}

function getRandomLocation() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	console.log(width, height);

	const x = Math.random() * (width - 200) + 100;
	const y = Math.random() * (height - 200) + 100;

	return {
		x,
		y,
	};
}

const createInsect = () => {
	const insect = document.createElement("div");
	const { x, y } = getRandomLocation();
	insect.classList.add("insect");
	insect.style.left = `${x}px`;
	insect.style.top = `${y}px`;
	insect.innerHTML = `
  <img src="${selectedInsect.src}" arc="${selectedInsect.alt}"
  style="transform: rotate(${Math.random() * 360}deg)"/>
  `;
	insect.addEventListener("click", catchInsect);

	gameContainer.appendChild(insect);
};

const startGame = () => {
	setInterval(increaseTime, 1000);
};

// Events
startBtn.addEventListener("click", () => {
	screens[0].classList.add("up");
});

chooseInsectBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		const img = btn.querySelector("img");
		const src = img.getAttribute("src");
		const alt = img.getAttribute("alt");
		selectedInsect = {
			src,
			alt,
		};
		screens[1].classList.add("up");
		setTimeout(createInsect, 1000);
		startGame();
	});
});
