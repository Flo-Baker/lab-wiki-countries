import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList.jsx';
import Navbar from './components/Navbar.jsx';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails.jsx';

// see slide 7 of w3d2 for passing the route props

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Hello Countries</h1> */}
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Switch>
              <Route
                path="/country/:name"
                render={(routeProps) => 
                  <CountryDetails {...routeProps} countries={countries} title="countries" />
                }
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
