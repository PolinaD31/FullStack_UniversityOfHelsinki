import { useState, useEffect } from "react"
import weatherService from '../services/weather'

const Weather = (capital) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        weatherService.getWeather(capital.capital[0])
        .then(returnedWeather => {
            setWeather(returnedWeather)
        })
    }, [])

    return (
        <>
            {weather && (
                <>
                <h3>Weather in {capital.capital[0]}</h3>
                <div>Temperature {weather.main.temp} Celcius</div>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
                <div>Wind {weather.wind.speed} m/s</div>
                </>
            )}
        </>
    )
}

export default Weather