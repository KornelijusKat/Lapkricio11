class WeatherApi{
    constructor(term, uri){
        this.term = term;
    }
    ajaxService(term){
        const key = 'fdf2b36efb14a784acff8e5979be8adc';
        return fetch(this.uri)
            .then(response => response.json());
    }
    getGeoLocation(){

    }
}
export default WeatherApi