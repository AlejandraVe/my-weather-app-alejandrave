function changeCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city-element");

  function updateCityAndWeather(response) {
    let todaysWeather = document.querySelector("#temperature-unit");
    todaysWeather.innerHTML = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
  }

  function searchCity(city) {
    let apiKey = "131b90447daa3e3cfco5aa3tc6e2b482";
    let cityInput = searchInputElement.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateCityAndWeather);
  }

  searchCity(searchInputElement.value);
}

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", changeCity);

