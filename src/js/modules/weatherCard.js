const weatherCard = (city, emoji )=>{
    const weatherDiv = document.createElement('div');
    weatherDiv.innerHTML = `<div class="card__weatherDiv">
                                <div>
                                    <h2>${city}</h2>
                                </div>
                                <div>
                                    <p>${emoji}</p>
                                </div>
                            </div>`
    return weatherDiv;
}
export default weatherCard