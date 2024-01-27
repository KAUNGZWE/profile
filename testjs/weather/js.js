const api ={
    key: "2966e11a0c791a9c1dc8d15185c827a3",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`).then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)} <span> c </span>`;

    let condition = document.querySelector('.current .weather');
    condition.innerText = weather.weather[0].main;
}