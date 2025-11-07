export function weatherFetch(location) {
    return fetch(url)
    .then(res => {if(!res.ok) {console.log("errore nella fetch"); return null;} 
    else {console.log("fetch ok"); return res.json()}})
    .then(data => {
        const weatherConstrunct = 
        {
    place: data.data,
    country: data.data,
    weather: data.data,
    weatherDescription: data.data,
    temp: data.data,
    wind: data.data,
    humidity: data.data,
}

return weatherConstrunct;
        })
    }

    export function WeatherConstruct(data) {
        const weatherConstruct = 
        {
            place: data.name,
            country: data.sys.country,
            weather: data.weather[0].main,
            weatherDescription: data.weather[0].description,
            temp: data.main.temp,
            wind: data.wind.speed,
            humidity: data.main.humidity, 
        }

        return weatherConstruct;
    }
