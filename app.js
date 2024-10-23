// // fetch('https://www.weatherapi.com/my/905cde07b5234659846151455240406')
// // http://api.weatherapi.com/v1/forecast.xml?key=<YOUR_API_KEY>&q=07112&days=7
// const apiKey = '905cde07b5234659846151455240406'// Replace with your API key
// const city = 'london';
// const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         const description = data.weather[0].description;
//         const temperature = data.main.temp;
//         const humidity = data.main.humidity;

//         document.getElementById('weather').innerText = `Description: ${description}, Temperature: ${temperature}°C, Humidity: ${humidity}%`;
//     })
//     .catch(error => {
//         console.error( error);
//     });

// fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={ 6a4f0a20177f8f8628c04e4e92de265c}')

document.getElementById('main').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        ser();
    }
})

function ser() {
    const apiKey = '6a4f0a20177f8f8628c04e4e92de265c';
    const city = document.getElementById('search');
    // document.body.addEventListener('keydown', (e) => {

    //     if(e.key.length < 1){
    //         city.value += e.key 
    //     }
    //     // city.value =
    //     // console.log(e);

    // })
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('temperature').innerHTML = data.main.temp + ' C';
            document.getElementById('feellike').textContent = data.main.feels_like;
            document.getElementById('Humidity').textContent = data.main.humidity;
            document.getElementById('para').textContent = data.name;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch(error => console.error('Error fetching data:', error));
    city.value = ''
}


// API Key: 905cde07b5234659846151455240406
// {
//     "location": {
//       "name": "London",
//       "region": "City of London, Greater London",
//       "country": "United Kingdom",
//       "lat": 51.52,
//       "lon": -0.11,
//       "tz_id": "Europe/London",
//       "localtime_epoch": 1613896955,
//       "localtime": "2021-02-21 8:42"
//     },
//     "current": {
//       "last_updated_epoch": 1613896210,
//       "last_updated": "2021-02-21 08:30",
//       "temp_c": 11,
//       "temp_f": 51.8,
//       "is_day": 1,
//       "condition": {
//         "text": "Partly cloudy",
//         "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
//         "code": 1003
//       },
//       "wind_mph": 3.8,
//       "wind_kph": 6.1,
//       "wind_degree": 220,
//       "wind_dir": "SW",
//       "pressure_mb": 1009,
//       "pressure_in": 30.3,
//       "precip_mm": 0.1,
//       "precip_in": 0,
//       "humidity": 82,
//       "cloud": 75,
//       "feelslike_c": 9.5,
//       "feelslike_f": 49.2,
//       "vis_km": 10,
//       "vis_miles": 6,
//       "uv": 1,
//       "gust_mph": 10.5,
//       "gust_kph": 16.9,
//       "air_quality": {
//         "co": 230.3,
//         "no2": 13.5,
//         "o3": 54.3,
//         "so2": 7.9,
//         "pm2_5": 8.6,
//         "pm10": 11.3,
//         "us-epa-index": 1,
//         "gb-defra-index": 1
//       }
//     }
//   }
