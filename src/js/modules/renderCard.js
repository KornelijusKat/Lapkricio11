import weatherService from "./weatherService"
import weatherCard from "./weatherCard"
const renderCard = () =>{
    document.querySelector('.card__form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const cityInput = document.querySelector('.card__input--city');
        const countryInput = document.querySelector('.card__input--country');
        weatherService(cityInput.value,countryInput.value).then(emoji=>{
            console.log(`${emoji} + hi`);
            document.querySelector('.card__body').appendChild(weatherCard(cityInput.value, emoji));
    })
    })
}
export default renderCard