/** 
 * 
 * Let’s create an anonymous function and use  call() to invoke it for each object of an array.
   The anonymous  functions adds a displayInfo() function for each array object.
   This is  to make it print the correct  position of each person  in the queue
 * **/

const queue = [{ name: "roger" }, { name: "Darianela" }, { name: "Victoria" }];
console.log("----call() Method----");
for (let i = 0; i < queue.length; i++) {
  (function (i) {
    this.displayInfo = function () {
      console.log(`Position ${i}: ${this.name}`);
    };
    this.displayInfo();
  }).call(queue[i], i);
}
