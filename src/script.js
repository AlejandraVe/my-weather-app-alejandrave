function updateCityAndWeather(response) {
  let todaysWeather = document.querySelector("#temperature-unit");
  let responseTemperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-element");
  let countryElement = document.querySelector("#country");

  cityElement.innerHTML = response.data.city;
  todaysWeather.innerHTML = Math.round(responseTemperature);
  countryElement.innerHTML = response.data.country;
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
