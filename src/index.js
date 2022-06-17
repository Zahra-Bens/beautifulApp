function formatDate(now) {
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `${days[todaysDay]} ${hour}:${minutes}`;
}
let now = new Date();
let todaysDay = now.getDay();
let date = document.querySelector(`#date`);
date.innerHTML = formatDate(now);

// Feature #2
function displayWeather(response) {
  console.log(response.data);
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  console.log(response.data.weather[0].description);
  let hum = document.querySelector("#hum");
  hum.innerHTML = `${response.data.main.humidity} %`;
  let wind = document.querySelector("#wind");

  wind.innerHTML = `${response.data.wind.speed} km/h`;

  let h1 = document.querySelector("#city");
  h1.innerHTML = response.data.name;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
}
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let searchForm = document.querySelector(`#search-form`);
searchForm.addEventListener("submit", search);

//Feature3
function convertToF(event) {
  event.preventDefault();
  let temperature = document.querySelector(`#temperature`);
  temperature.innerHTML = 66;
}
function convertToC(event) {
  let temperature = document.querySelector(`#temperature`);
  temperature.innerHTML = 19;
}
let celcius = document.querySelector("#celsius-link");
celcius.addEventListener("click", convertToC);
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertToF);
