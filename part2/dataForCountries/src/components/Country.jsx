import Weather from "./Weather"

const Country = ({country}) => {
    return (
        <>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h4>Languages:</h4>
            <ul>
            {Object.entries(country.languages).map(([code, language]) => (
                <li key={code}>{language}</li>
            ))}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <Weather capital={country.capital} />
        </>
    )
}

export default Country