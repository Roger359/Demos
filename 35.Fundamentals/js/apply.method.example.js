console.warn("----- Apply Method Example-------");
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

numbers.push.apply(numbers, moreNumbers);

console.log(`Array 1 = "[${numbers}]" + Array 2 = "[${moreNumbers}]"`)
console.log(`Appended array: ${numbers}`);

console.warn("----- Apply Method Example END-------");
