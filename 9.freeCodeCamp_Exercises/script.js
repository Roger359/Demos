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

// Extract Domain Name from an email
const emailBtn = document.querySelector(".emailBtn");
const domainResult = document.querySelector(".domainResult");

emailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailInput = document.querySelector(".input-email").value;

  let getDomain = emailInput.substring(emailInput.indexOf("@") + 1);
  domainResult.innerText = getDomain;
});

// Fibonacci with recursividad
// 0,1,1,2,3,5,8
// n = 0 -> 0
// n = 1 -> 1
// n = 2 -> 1 + 0

// The simple way
// const fibonacci = (n) => {
//   // if (n === 0) return 0;
//   // if (n === 1) return 1;
//   if (n < 2) return n; // 2 + 1
//   return fibonacci(n - 2) + fibonacci(n - 1)
// };
// // console.log(fibonacci(2))
// console.log(fibonacci(8))

// Fibonacci with FOR loop
const fiboBtn = document.querySelector(".fiboBtn");
const fiboResult = document.querySelector(".fiboResult");

const fibonacci = (n) => {
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[n];
};

fiboBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputFibo = document.querySelector(".input-fibo").value;

  fiboResult.innerText = fibonacci(inputFibo);
});


