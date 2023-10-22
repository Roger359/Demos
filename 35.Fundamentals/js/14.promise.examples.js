// Promise

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
          }, 0 || Math.random() * 100);
        });
      }

      cuadradoPromise(0)
        .then((obj) => {
          console.log("start the  first promise with value 0");
          console.log(`Promise: ${obj.value}, ${obj.result}`);
          return cuadradoPromise(1);
        })
        .then((obj) => {
          console.log("start the second promise with value 1");
          console.log(`Promise: ${obj.value}, ${obj.result}`);
          return cuadradoPromise(2);
        })
        .then((obj) => {
          console.log("start the fourth promise with value 2");
          console.log(`Promise: ${obj.value}, ${obj.result}`);
          return cuadradoPromise(3);
        })
        .then((obj) => {
          console.log("start the fifth promise with value 3");
          console.log(`Promise: ${obj.value}, ${obj.result}`);
          return cuadradoPromise(4);
        })
        .then((obj) => {
          console.log("start the fifth promise with value 4");
          console.log(`Promise: ${obj.value}, ${obj.result}`);
          return cuadradoPromise(5);
        })
        .then((obj) => {
          console.log("start the fifth promise with value 5");
          console.log(`Promise: ${obj.value}, ${obj.result}`);
          console.log("End");
        })
        .catch((err) => {
          console.error(err);
        });

      doSomethingCritical()
        .then((result) =>
          doSomethingOptional(result)
            .then((optionalResult) => doSomethingExtraNice(optionalResult))
            .catch((e) => {})
        ) // Ignore if optional stuff fails; proceed.
        .then(() => moreCriticalStuff())
        .catch((e) => console.error(`Critical failure: ${e.message}`));