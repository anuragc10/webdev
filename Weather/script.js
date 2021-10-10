// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


// * Retrieve weather data from 
getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response) => {
        return response.json();
    })
}

// Event Listener Function on keypress
const searchInputBox = document.getElementById('city-input');
searchInputBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherData(searchInputBox.value).then((response) => {
            console.log(response);
            showWeatherData(response)
        }).catch((error) => {
            console.log(error);
        })
    }
});


// * Retrieve city input and get the weather data
searchCity = () => {
    const city = document.getElementById('city-input').value;


    getWeatherData(city).then((response) => {
        console.log(response);
        showWeatherData(response)
    }).catch((error) => {
        console.log(error);
    })
}

// * Show the weather data in HTML
showWeatherData = (weatherData) => {
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('weather-type').innerText = weatherData.weather[0].main;
    document.getElementById('temp').innerText = changeTemp(weatherData.main.temp);
    document.getElementById('min-temp').innerText = changeTemp(weatherData.main.temp_min);
    document.getElementById('max-temp').innerText = changeTemp(weatherData.main.temp_max);

    // changing background according to weather type
    if (weatherData.weather[0].main == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";

    } else if (weatherData.weather[0].main == 'Clouds') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";

    } else if (weatherData.weather[0].main == 'Haze') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";

    } else if (weatherData.weather[0].main == 'Rain') {

        document.body.style.backgroundImage = "url('images/rain.jpg')";

    } else if (weatherData.weather[0].main == 'Snow') {

        document.body.style.backgroundImage = "url('images/snow.jpg')";

    } else if (weatherData.weather[0].main == 'Thunderstorm') {

        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";

    }
}

// Function to change fahrenheit to celcius
changeTemp = (temperature) => {
    let celcius = (temperature - 32) * 5 / 9;
    return celcius.toFixed(1);
}