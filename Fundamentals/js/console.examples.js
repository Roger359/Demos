console.time('how long does my code take to execute');

const array = Array(1000000)
for(let i = 0; i < array.length; i++){
array[i] = i 
}
console.timeEnd('how long does my code take to execute')

// console.assert() unit test
let x = 3,
y = 2,
testXY = "Waiting X variable always be minus than Y variable"

console.assert(x<y,{x,y},testXY)