// callbacks
function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 || Math.random() * 100);
}

cuadradoCallback(0, (value, result) => {
  console.log("inicia callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log("segundo callback");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log("tercer callback");
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log("cuarto callback");
        console.log(`Callback: ${value}, ${result}`);
      });
    });
  });
});
