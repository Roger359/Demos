// const ws = new Set(1,2,3,4,5,true,false,{}, "hola")

const ws = new WeakSet();

let value1 = {'value1': 1}
let value2 = {'value2': 2}
let value3 = {'value3': 3}

ws.add(value1)
ws.add(value2)
ws.add(value3)

console.log(ws)

// setInterval(() => console.log(ws), 1000)

// setTimeout(() => {
//     value1 = null;
//     value2 = null;
// }, 5000)

// const wm = new WeakMap([
//     ['name', 'roger'],
//     ['age', 33]
// ])

const wm = new WeakMap()

let key = {}

console.log(wm);