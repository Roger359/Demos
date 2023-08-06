const result = document.getElementById("result");
const btn = document.getElementById("btn");
const input = document.getElementById("birthday");

const calculateAge = () => {
  const birthdayValue = birthday.value;
  console.log(birthdayValue);

  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue)
   result.textContent = `Your age is ${age} ${age > 1 ? 'years': 'year'} old`
  }
};

function getAge(birthdayValue){
  const currentDate = new Date()
  console.log(currentDate)
  const birthdayDate = new Date(birthdayValue)
  console.log(birthdayDate)


  let age = currentDate.getFullYear() - birthdayDate.getFullYear()
  console.log(age)

  const month = currentDate.getMonth() - birthdayDate.getMonth()

  if(month< 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){

    age--

  }
 
  return age
}

btn.addEventListener("click", calculateAge);
