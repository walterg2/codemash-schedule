import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Session from './Session';

const session = {
  title: 'React Everywhere',
  abstract: 'Yarn is slow',
  speakers: [{
    firstName: 'Idont',
    lastName: 'Testmyshit'
  }]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Codemash</h2>
        </div>
        <Session {...session} />
      </div>
    );
  }
}

export default App;
