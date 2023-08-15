const WEATHER_KEY = config.WEATHER_KEY;

const weatherData = document.getElementById("weather-data");
const cityInput = document.getElementById("city-input");
const cityForm = document.querySelector("form");

const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;

    const icon = data.weather[0].icon;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)} °C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];

    weatherData.querySelector(".icon").innerHTML = `<img
    src="https://openweathermap.org/img/wn/${icon}.png"
    alt="Weather Icon"
  />`;

  weatherData.querySelector('.temperature').textContent = `${temperature} °C`

  weatherData.querySelector('.description').textContent = description

  weatherData.querySelector('.details').innerHTML = details.map((detail) => `<div>${detail}</div>`).join('')

  } catch (error) {
    weatherData.querySelector('.description').textContent = `Bad request: "${city}", please enter a correct city`
  }
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityValue = cityInput.value;
  getWeatherData(cityValue)
});
