function sum(a, b, ...c) {
  let result = a + b;
  c.forEach(function (n) {
    result += n;
  });

  return result
}

let newResult = sum(2,3)
let newResultWithSpread = sum(3,5,7)
console.log(newResult)
console.log(newResultWithSpread)