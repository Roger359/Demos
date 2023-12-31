const toggleDarkMode = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");

let darkMode = localStorage.getItem("darkMode");

// set darkmode
const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  toggleText.textContent = "Light";
  localStorage.setItem("darkMode", "enabled");
};

// Disable dark mode
const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  toggleText.textContent = "Dark";
  localStorage.setItem("darkMode", null);
};

// Save darkmode history
if (darkMode === "enabled") {
  enableDarkMode();
}

// Add event listener

toggleDarkMode.addEventListener("click", () => {
  let darkMode = localStorage.getItem("darkMode");

  if(darkMode !== 'enabled'){
    enableDarkMode();
  }else{
    disableDarkMode()
  }
});
