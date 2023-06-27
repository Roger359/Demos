// Stand in Line Functions Module Exercise
/**
 * In Computer Science a queue is an abstract Data Structure where items are kept in order.
 * New items can be added at the back of the queue and old items are taken off from the front of the queue.
 */

// Setup
let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const standBtn = document.querySelector(".stand-btn");
const standInLine = document.querySelector(".standInLine");
// const turn = document.querySelectorAll(".turn");

function nextInLine(arr, item) {
  // Only change code below this line
  item = arr.push(item++); //push to the last position in the array
  item = arr.shift(item++); // delete the first element

  return item;
  // Only change code above this line
}

standBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let turnPosition = nextInLine(testArr, testArr[0]);
  standInLine.innerText = turnPosition;
});
