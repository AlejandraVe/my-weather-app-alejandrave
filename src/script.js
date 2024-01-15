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
  let icon = document.querySelector("#emoji");
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let tomorrowElement = document.querySelector("#tomorrow");
  let twoDaysAhead = document.querySelector("#two-days-ahead");
  let threeDaysAhead = document.querySelector("#three-days-ahead");
  let fourDaysAhead = document.querySelector("#four-days-ahead");
  let fiveDaysAhead = document.querySelector("#five-days-ahead");
  let sixDaysAhead = document.querySelector("#six-days-ahead");

  cityElement.innerHTML = response.data.city;
  todaysWeather.innerHTML = Math.round(responseTemperature);
  countryElement.innerHTML = response.data.country;
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = response.data.temperature.humidity;
  wind.innerHTML = response.data.wind.speed;
  currentTime.innerHTML = formatDate(date);
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="emoji">`;
  tomorrowElement.innerHTML = days[date.getDay() + 1];
  twoDaysAhead.innerHTML = days[date.getDay() + 2];
  threeDaysAhead.innerHTML = days[date.getDay() + 3];
  fourDaysAhead.innerHTML = days[date.getDay() + 4];
  fiveDaysAhead.innerHTML = days[date.getDay() + 5];
  sixDaysAhead.innerHTML = days[date.getDay() + 6];
}

function updateForecast(response) {}

function formatForecastDates(date) {}

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

function forecast(city) {
  let apiKeyForecast = "131b90447daa3e3cfco5aa3tc6e2b482";
  let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKeyForecast}`;
  axios.get(apiUrlForecast).then(updateForecast);
}

function changeCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  searchCity(searchInputElement.value);
  forecast(searchInputElement.value);
}

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", changeCity);

searchCity("London");
