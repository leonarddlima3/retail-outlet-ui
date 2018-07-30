import React, { Component } from 'react';
import logo from './assets/w.png';//'./logo.svg';
import './App.css';
import { getRetailRouter } from "./main/router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to W'Dolson Retail Mart</h1>
        </header>

        {getRetailRouter()}
      </div>
    );
  }
}

export default App;
