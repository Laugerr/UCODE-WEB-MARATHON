const api = {
    key: "da6024b87c5dbd5acb74e62a135d048e",
    base: "https://api.openweathermap.org/data/2.5/",
    image: "http://openweathermap.org/img/wn/"
}
let body = document.getElementById('body');
let city = document.getElementById('city');
let forecastDate = document.getElementsByClassName('Date');
let forecastImage = document.getElementsByClassName('Image');
let forecastTemp = document.getElementsByClassName('Temp');
function getCityInfo(query) {
    fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => { return weather.json(); }).then(showInfo);
}
function showInfo(weather) {    
    if (weather.cod === "404") {
        console.error('Invalid city name. Rejected');
        return;
    }
    city.innerText = `${weather.city.name}, ${weather.city.country}`;
    console.log(weather)
    showForecastDays(weather);
}
function showForecastDays(weather) {
    let forecast = [0, 8, 16, 24, 32, 39];
    for(let i = 0; i < forecast.length; i++) {
        let now = new Date(weather.list[forecast[i]].dt_txt);
        forecastDate[i].innerHTML = now.getDate() + "." + now.getMonth() + "." + now.getFullYear();
        if(Math.round(weather.list[forecast[i]].main.temp) > 0){
            forecastTemp[i].innerHTML = `+${Math.round(weather.list[forecast[i]].main.temp)}°C`;
        }else{
            forecastTemp[i].innerHTML = `${Math.round(weather.list[forecast[i]].main.temp)}°C`;
        }
        forecastImage[i].src = `${api.image}${weather.list[forecast[i]].weather[0].icon}@4x.png`;
    }
}
var myCity = prompt("Enter your city:", "Rabat");
getCityInfo(myCity);