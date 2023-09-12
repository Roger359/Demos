// const myCar = new Object();
// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = 1969;

console.warn('----------FOR IN Example------------')

const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

function dumpProps(objName) {
  let result = "";

  for (const i in objName) {
    // console.log(`Key: ${i}, Value: ${objName[i]} `)
    result += `${objName}.${i} = ${objName[i]}<br>`;
  }
  result += "<hr>";
  return result;
}

console.log(dumpProps(myCar));

console.warn('----------FOR IN Example END------------')
