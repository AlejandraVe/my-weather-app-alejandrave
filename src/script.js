function changeCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city-element");
  cityElement.innerHTML = searchInputElement.value;
}

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", changeCity);
