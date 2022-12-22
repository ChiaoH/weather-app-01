function showTemp(response) {
  console.log(response);
  let cityElement = document.querySelector(".header");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let currentTempElement = document.querySelector("#temp-current-nr");
  currentTempElement.innerHTML = Math.round(response.data.main.temp);

  let highTempElement = document.querySelector("#high-temp-nr");
  highTempElement.innerHTML = Math.round(response.data.main.temp_max);

  let lowTempElement = document.querySelector("#low-temp-nr");
  lowTempElement.innerHTML = Math.round(response.data.main.temp_min);

  let feelsLikeTempElement = document.querySelector("#feels-like-nr");
  feelsLikeTempElement.innerHTML = Math.round(response.data.main.feels_like);

  let humidityElement = document.querySelector("#humidity-nr");
  humidityElement.innerHTML = response.data.main.humidity;

  let windSpeedElement = document.querySelector("#wind-speed-nr");
  windSpeedElement.innerHTML = response.data.wind.speed;
}

let apiKey = "f5029b784306910c19746e40c14d6cd3";
let unit = "metric";
let cityName = "Stockholm";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`;

axios.get(apiUrl).then(showTemp);
