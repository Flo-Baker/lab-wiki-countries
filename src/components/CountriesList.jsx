// Displays the list of links with the country names.
// Each link should be a react-router-dom Link
// which we will use to send the country code (cca3) via the URL.

// -> means to import data from the .json file?!

import React from 'react';
import { Link } from 'react-router-dom';
// import listOfCountries from './countries.json'
// import Navbar from './Navbar'

function CountriesList(props) {
  return (
    <div>
      {/* <p>Test if Component is working</p> */}
      <ul>
        {props.countries.slice(0, 100).map((eachCountry) => (
          <Link to={`/country/${eachCountry.cca3}`}>
            {eachCountry.name.common}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
