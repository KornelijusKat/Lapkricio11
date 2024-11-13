class EmojiUI{
    constructor(temperature){
       this.temperature = temperature
    }
    showEmoji(){
        console.log(`${this.temperature} hello`);
        if(this.temperature <= 0)
            return `❄️ ${this.temperature}°C`
        else if(this.temperature > 0 && this.temperature <= 15){
            return `☁️ ${this.temperature}°C`
        }
        else{
            return `☀️ ${this.temperature}°C`
        }
    }
    renderUI(){
        this.showEmoji()
    }
}
export default EmojiUI