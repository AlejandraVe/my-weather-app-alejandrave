function updateCityAndWeather(response) {
  let todaysWeather = document.querySelector("#temperature-unit");
  let responseTemperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-element");
  let countryElement = document.querySelector("#country");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let currentTime = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;
  todaysWeather.innerHTML = Math.round(responseTemperature);
  countryElement.innerHTML = response.data.country;
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = response.data.temperature.humidity;
  wind.innerHTML = response.data.wind.speed;
  currentTime.innerHTML = formatDate(date);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "131b90447daa3e3cfco5aa3tc6e2b482";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateCityAndWeather);
}

function changeCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  searchCity(searchInputElement.value);
}

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", changeCity);

searchCity("London");
