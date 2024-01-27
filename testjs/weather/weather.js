const api = {
    key: "2966e11a0c791a9c1dc8d15185c827a3",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
       getResults(searchbox.value);
    }
}

function getResults (query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=2966e11a0c791a9c1dc8d15185c827a3&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
}


