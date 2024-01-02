import CountryLine from "./CountryLine"
import Country from "./Country"

const Countries = (props) => {

    if (props.countries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if (props.countries.length === 0) {
        return (
            <div>No countries match</div>
        )
    } else if (props.countries.length === 1) {
        const country = props.countries[0];

        return (
          <div>
            <Country country={country} />
          </div>
        );
    } else {
        return (
            <div>
            {props.countries.map(country => <CountryLine key={country.name.common} country={country} />)}
            </div>
        )
    }
}

export default Countries