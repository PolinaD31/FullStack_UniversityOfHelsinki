import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const getWeather = (capital) => {
    const request = axios.get(`${baseUrl}?q=${capital}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`)
    return request.then(responce => responce.data)
}

const getIcon = (iconCode) => {
    const request = axios.get(`https://openweathermap.org/img/wn/${iconCode}.png`)
    return request.then(responce => responce.data)
}

export default {getWeather, getIcon}
