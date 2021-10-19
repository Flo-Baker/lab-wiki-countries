// the component that we will render via the react-router-dom's Route 
// and will be receiving the country code (cca3) via the URL.
// This is actually the id of the country (example: /ESP for Spain, /FRA for France).

import React from 'react';
// import CountriesList from './CountriesList';


function CountryDetails({ match, countries }) {
    
    const foundCountry = countries.find((oneCountry) => {
        return oneCountry.cca3 === match.params.name
    })

    return (
        <div>
            <h2>Country Details</h2>
            <h3> { foundCountry.name.official }</h3>
            <p> Region { foundCountry.region }</p>
            <p> Subregion { foundCountry.subregion }</p>
            <p> Borders { foundCountry.borders }</p>
            <p> Flag { foundCountry.flag }</p>
        </div>
    )
}

// condition: if country has borders (= !empty array) show "Borders"
// "Borders" has to be Linked so the click will get to the next country

export default CountryDetails;