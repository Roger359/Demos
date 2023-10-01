
// Codigo Sincrono Bloqueante

(() => {
  console.log("codigo sincrono");
  console.log("start");

  function dos() {
    console.log("Two");
  }

  function one() {
    console.log("One");
    dos();
    console.log("Three");
  }

  one();
  console.log("End");
})();