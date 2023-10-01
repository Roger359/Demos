
console.log('start')
setTimeout(() => {
  console.log('ejecutando un setTimeOut')
}, 3000)

let tempo = setTimeout(() => {
  console.log(new Date().toLocaleTimeString())
},1000)

clearTimeout(tempo)