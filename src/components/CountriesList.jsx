// Displays the list of links with the country names.
// Each link should be a react-router-dom Link
// which we will use to send the country code (cca3) via the URL.

import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div>   
        {props.countries.slice(0, 15).map((eachCountry) => (
          <Link to={`/country/${eachCountry.cca3}`}>
            <ul class="list-group overflow-scroll">
            <li class="list-group-item">
            {eachCountry.flag} {eachCountry.name.common} 
            </li>
            </ul>
          </Link>
        ))}
    </div>
  );
}

export default CountriesList;

// List of Countries has to be a scrollable list on the left side with flags
