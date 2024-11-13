import WeatherApi from "../api/WeatherApi";
class TemperatureUtils{
    constructor(city, countryCode, kelvin){
        this.city = city,
        this.countryCode = countryCode,
        this.kelvin = kelvin
    }
    getCelciusTemperature(){
        return Math.round(this.kelvin - 273.15)
    }
} 
export default TemperatureUtils