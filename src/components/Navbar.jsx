// Displaying the basic navbar with the LAB name
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">
              <h1>WikiCountries</h1>
            </span>
          </div>
        </nav>
    );
  }
}

export default Navbar;
// {/* <Link to="/">Home</Link>
//         <Link to="/countries">Countries</Link>
//         <Link to="/details">Countries Details</Link> */}