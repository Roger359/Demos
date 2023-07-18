const loanAmount = document.getElementById("loan-amount").value;
const interestRate = document.getElementById("interest-rate").value;
const monthsToPay = document.getElementById("months-to-pay").value;
const monthlyPayment = document.querySelector(".payment");

const calculateLoan = () => {
  const loanAmount = document.getElementById("loan-amount").value;
  const interestRate = document.getElementById("interest-rate").value;
  const monthsToPay = document.getElementById("months-to-pay").value;

  let interest = (loanAmount * (interestRate * 0.01)) / monthsToPay;

  let payment = (loanAmount / monthsToPay + interest).toFixed(3);

  monthlyPayment.innerHTML = `Monthly Payment: ${payment}`;
};
