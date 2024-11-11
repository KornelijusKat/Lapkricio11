import WeatherApi from "./api/WeatherApi";
let weather = new WeatherApi('london',`http://api.openweathermap.org/geo/1.0/direct?q=${this.term}&limit=5&appid=${key}`);
console.log(weather.ajaxService())
