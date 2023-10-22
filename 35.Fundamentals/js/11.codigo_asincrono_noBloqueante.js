// Codigo Asincrono no bloqueante

(() => {
  console.log("codigo Asincrono");
  console.log("start");

  function dos() {
    setTimeout(() => {
      console.log("Dos");
    }, 1000);
  }

  function one() {
    setTimeout(() => {
      console.log("One");
    }, 0);
    dos();
    console.log("Tres");
  }

  one();
  console.log("End");
})();
