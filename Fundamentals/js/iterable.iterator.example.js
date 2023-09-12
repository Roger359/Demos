// const iterable = [1, 2, 3, 4, 5];
// const iterable = new Set([1, 2, 3, 4, 5])
// const iterable = 'Hello World'
const iterable = new Map([['name','roger'], ['age', 33]])


let iterator = iterable[Symbol.iterator]();

console.log(iterable); // output : [1,2,3,4,5]
console.log(iterator); // Array Iterator

console.log(iterator.next()); // {value: 1, done: false}

let next = iterator.next();

while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}
