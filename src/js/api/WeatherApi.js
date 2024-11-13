import ajaxService from "../modules/ajaxService";
class WeatherApi{
    constructor(cityName, countryCode){
        this.cityName = cityName;
        this.countryCode = countryCode;
        //Insert key
        this.key = '';
    }
    getGeoLocation(){
        const uri = `http://api.openweathermap.org/geo/1.0/direct?q=${this.cityName},${this.countryCode}&limit=1&appid=${this.key}`
        return ajaxService(uri).then(response=>{
            const location = response[0];
            return {lat: location.lat, lon: location.lon }
        })
    }
    getTemperature(){
        return this.getGeoLocation()
            .then((response) =>{
                console.log(response);
                console.log(response.lon);
                const uri = `http://api.openweathermap.org/data/2.5/weather?lat=${response.lat}&lon=${response.lon}&appid=${this.key}`;
                return ajaxService(uri)
            })
            .then(weatherData =>{
                return weatherData
    })
    }
}
export default WeatherApi