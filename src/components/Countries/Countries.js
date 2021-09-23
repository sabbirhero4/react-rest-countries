import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR2mRUHqZswOShCPxwFeuC3xMA2pUwke2HIA5UDcoA0qtqAy8W-gDkUpXCw')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h1>Gello from Countries: {countries.length}</h1>
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        key={country.capital}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;