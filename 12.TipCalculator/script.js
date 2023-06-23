const btn = document.querySelector(".btn"),
  tip = document.querySelector(".tip");
total = document.querySelector(".total");
error = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 5000);
};

const calculateTip = () => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (bill === "" || rate === "") {
    // console.log("Please add a number");
    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = "Please enter a number";
    error.style.display = "block";
    hideError();
  }else{
    let tipAmount = bill * rate;
    tipAmount = Math.ceil(tipAmount)
    tip.innerHTML = `Tip: $${tipAmount}`

    let totalAmount = Number(bill) + Number(tipAmount)
    total.innerHTML = `Total Bill: $${totalAmount}`
  }
};

btn.addEventListener("click", calculateTip);
