import React, { useState } from 'react';
import Country from './Country';

const CountryLine = (props) => {
  const [showCountry, setShowCountry] = useState(false);

  const toggleCountry = () => {
    setShowCountry(!showCountry);
  };

  return (
    <div>
      <p>
        {props.country.name.common}{' '}
        <button onClick={toggleCountry}>{showCountry ? 'hide' : 'show'}</button>
      </p>
      {showCountry && <Country country={props.country} />}
    </div>
  );
};

export default CountryLine;