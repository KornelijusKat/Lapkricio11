import weatherService from "./weatherService"
import weatherCard from "./weatherCard"
const renderCard = () =>{
    document.querySelector('.card__form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const cityInput = document.querySelector('.card__input--city');
        const countryInput = document.querySelector('.card__input--country');
        if(localStorage.getItem(cityInput.value+countryInput.value)){
            document.querySelector('.card__body').innerHTML = "";
            document.querySelector('.card__body').appendChild(weatherCard(cityInput.value, localStorage.getItem(cityInput.value+countryInput.value) ));
        }
        else{
        weatherService(cityInput.value,countryInput.value).then(emoji=>{
            document.querySelector('.card__body').innerHTML = "";
            document.querySelector('.card__body').appendChild(weatherCard(cityInput.value, emoji));
            localStorage.setItem(cityInput.value+countryInput.value, emoji)
    })
    }})
}
export default renderCard