const numbers = [1,2,3];
const moreNumbers = [4,5,6];
console.log('--- apply() Method ---');
numbers.push.apply(numbers, moreNumbers);
console.log(`Appended array: ${numbers}`)

