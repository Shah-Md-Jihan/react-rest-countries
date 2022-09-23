import React from 'react';
import './Country.css'

const Country = (props) => {

    const { flags, name, capital, area, region, population } = props.country;
    return (
        <div className="country">
            <h3>Country Name: {name.common}</h3>
            <p>Capital: {capital}</p>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Regioun: {region}</p>
        </div>
    );
};

export default Country;