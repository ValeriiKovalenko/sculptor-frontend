import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import './App.css';

// Dashboard
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Dashboard />
      </>
    );
  }
}

export default hot(App);
