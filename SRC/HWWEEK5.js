// Display search city
let city = document.querySelector("#input-city");
let h1 = document.querySelector("h1");

function displaySearchCity(event) {
  event.preventDefault();
  h1.innerHTML = `${city.value}`;
  // SC solution is
  // h1.innerHTML = city.value;
  // no need for the ${} (no sé por qué)

  let apiKey = "11edc9a3d0f3o475000at9446642fb9a";
  let currentTemperature = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${apiKey}`;

  function displayCurrentTemperature(response) {
    let tempGrados = document.querySelector("#temp-grados");
    tempGrados.innerHTML = Math.round(response.data.temperature.current);
  }
  axios.get(currentTemperature).then(displayCurrentTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", displaySearchCity);

// Day and Time
let now = new Date();

let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
let day = days[now.getDay()];

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let dayTime = document.querySelector("#day-time");
dayTime.innerHTML = `${day}  ${hour}:${minutes}`;
