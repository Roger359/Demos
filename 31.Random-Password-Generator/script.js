const generateBtn = document.getElementById("btn");
const passwordInput = document.querySelector("input");
const copyBtn = document.querySelector(".fa-copy");
const alert = document.querySelector(".alert-container");

const createPassword = () => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 10;

  let password = "";

  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }

  passwordInput.value = password;
  alert.innerText = password + " " + "copied";
};

const copyPasswordGenerated = () => {
  passwordInput.select();
  passwordInput.setSelectionRange(0, 9999);

  navigator.clipboard.writeText(passwordInput.value);
};

generateBtn.addEventListener("click", () => {
  createPassword();
});

copyBtn.addEventListener("click", () => {
  copyPasswordGenerated();

  if (passwordInput.value) {
    alert.classList.remove("active");
    setTimeout(() => {
      alert.classList.add("active");
    }, 2000);
  }
});
