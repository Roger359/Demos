console.warn("Using generators");
function* iterable() {
	yield "hola";
	console.log("Hola consola");
	yield "hola 2";
	console.log("Seguimos con mas instrucciones de nuestro código");
	yield "hola 3";
	yield "hola 4";
}

let iterator = iterable();

// console.log(iterator.next());
// console.log(iterator.next());

for (let yield of iterator) {
	console.log(yield);
}

const arr = [...iterable()];
console.log(arr);

function square(value) {
	setTimeout(() => {
		return console.log({ value, result: value * value });
	}, Math.random() * 1000);

}

function* generator(){
  console.log("Start generator");
  yield square(0);
  yield square(1);
  yield square(2);
  yield square(3);
  yield square(4);
  yield square(5);

  console.log("End generator")
}

let generatorExecute = generator();

for(let yield of generatorExecute){
  console.log(yield)
}