
console.warn('----Conditional Examples----')

console.info('--------Result using if-else------')

let hour = 19;

/* Let me sleep */
if(hour >= 0 && hour <= 5){
console.log('Let me sleep')
}
/* Good Morning 6 hrs -- 11 hrs */ 
else if(hour >=6 && hour <= 11){
console.log('Good Morning')

/* Good Afternoon 12 hrs -- 18 hrs */ 
}else if(hour >= 12 && hour <= 18){
console.log('Good Afternoon')

/* Good Evening 19 hrs -- 23 hrs */
}else{
console.log('Good Evening')
}

console.info('--------Result using switch------')
let day = 5;

switch(day){
case 0:
console.log('Sunday') 
break;
case 1:
console.log('Monday') 
break;
case 2:
console.log('Tuesday') 
break;
case 3:
console.log('Wednesday') 
break;
case 4:
console.log('Thrusday') 
break;
case 5:
console.log('Friday') 
break;
case 6:
console.log('Saturday') 
break;

default:
console.log('The day does not exist')
break;
}

console.warn('----Conditional Examples END----')
