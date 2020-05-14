import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Intro from './components/Intro';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
      </div>
    );
  }
}

export default App;
