import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Session from './Session';

class SessionList extends Component {
  render() {
    const { sessions } = this.props
    return(
      <div className="session-list">
        { sessions.map(s => <Session key={s.Id} { ...s } />)}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sessions: [] };
    window.fetch('https://speakers.codemash.org/api/sessionsdata')
      .then(result => result.json())
      .then((sessions) => this.setState({ sessions: sessions }));
  }

  render() {
    const { sessions } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Codemash</h2>
        </div>
        <SessionList sessions={sessions} />
      </div>
    );
  }
}

export default App;
