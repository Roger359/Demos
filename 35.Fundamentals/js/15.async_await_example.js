function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(`Error, the value: ${value}, its not a number`);
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: value,
        result: value * value,
      });
    }, 0 || Math.random() * 1000);
  });
}

async function asyncFunction() {
  try {
    console.log("start Async function");
    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise('3');
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
  } catch (error) {

    console.log(error)          
  }
}

const asyncFunctionExpresada = async () => {
  try {
    console.log("start Async function");
    let obj = await cuadradoPromise(6);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(7);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(8);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(9);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(10);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(11);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
  } catch (error) {

    console.log(error)          
  }
}

asyncFunction();
asyncFunctionExpresada()