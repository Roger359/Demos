
console.warn('-----Check if an Array is Empty------')
// Check if an Array is Empty
let arr1 = [];
let arr2 = [1,2,3,4,5]

const isArr1Empty = !(Array.isArray(arr1) && arr1.length > 0)
const isArr2Empty = !(Array.isArray(arr2) && arr2.length > 0)

console.log
console.log(`Is Array 1 = "[${arr1}]" Empty: ${isArr1Empty}`);
console.log(`Is Array 2 + "[${arr2}]" Empty: ${isArr2Empty}`);

console.warn('-----Check if an Array is Empty END------')

console.info('--------Check if a Variable is an Array-----------')
// Check if a Variable is An Array

let city = 'Bogota'
let cities = ['Maracaibo','Bogota', 'Miami', 'Caracas']

const isArray = (arr) => Array.isArray(arr);

console.log(`City= "${city}" is an Array: ${isArray(city)}`) 
console.log(`Cities= "[${cities}]" is an Array: ${isArray(cities)}`) 

console.warn('--------Check if a Variable is an Array END-----------')

// calculate the timestamp of my life

//641711449
// let myBirthDay = date.toLocaleString()

// let date = Date.now()


console.log('--------Calculate the timestamp of my life ----------')

let myBirthDay = new Date(1990,4,3).toLocaleDateString()
let dateTimeStampCreation = new Date(1970,0,1).toLocaleDateString()


const toTimeStamp = (strDate) => {
  const timeStamp = Date.parse(strDate)
  return timeStamp / 1000
}

let timeStampBirthday = toTimeStamp(myBirthDay)
let firstTimeStamp = toTimeStamp(dateTimeStampCreation)

console.info('my birthday in timestamp')
console.log(timeStampBirthday)
console.log(myBirthDay)

console.info('the first timestamp of all time')
console.log(firstTimeStamp)
console.log(dateTimeStampCreation)


console.log('--------Calculate the timestamp of my life END ----------')

