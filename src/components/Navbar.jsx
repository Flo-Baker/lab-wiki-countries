// Displaying the basic navbar with the LAB name
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <ul>
      <h1>WikiCountries</h1>
        {/* <Link to="/">Home</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/details">Countries Details</Link> */}
      </ul>
    );
  }
}

export default Navbar;
