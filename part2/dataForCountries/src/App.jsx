import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import Filter from './components/Filter'
import countriesService from './services/countries'
import weatherService from './services/weather'

function App() {
  const [countries, setCountries] = useState([])
  const [filterValue, setFilterValue] = useState('')

  const countriesToShow = filterValue === '' ? countries : 
  countries.filter(country => country.name.common.toLowerCase().includes(filterValue.toLowerCase()))

  useEffect (() => {
    countriesService.getAll()
    .then(allCountries => setCountries(allCountries))
  }, [])

  const getWeather = (capital) => {
    return weatherService.getWeather(capital)
  }

  const onFilterChange = (event) => {
    setFilterValue(event.target.value)
  }

  return (
    <>
      <Filter filterValue={filterValue} onFilterChange={onFilterChange} />
      <Countries countries={countriesToShow}/>
    </>
  )
}

export default App
