const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const imageContainer = document.querySelector(".image-container");
const imgsElement = document.querySelectorAll("img");

let currentImg = 1;
let timeout;

const updateImg = () => {
  if (currentImg > imgsElement.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsElement.length;
  }

  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 5000);


};

updateImg()

nextBtn.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout)
  updateImg();
});

prevBtn.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout)

  updateImg();
});
