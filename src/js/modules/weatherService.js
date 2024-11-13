import EmojiUI from "../ui/EmojiUI"
import TemperatureUtils from "../utils/TemperatureUtils"
import WeatherApi from "../api/WeatherApi";
const weatherService = (city, countryCode) => {
    const api = new WeatherApi(city, countryCode);
    return api.getTemperature().then(result=>{
        const tempe = new TemperatureUtils(city,countryCode,result.main.temp);
        console.log(result.main.temp);
        let temperature = tempe.getCelciusTemperature();
        let emoji = new EmojiUI(temperature);
        return emoji.showEmoji();
    })
}
export default weatherService