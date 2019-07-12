import React, { Component } from 'react';
import Example from './components/Example';
import ExampleFC from './components/ExampleFC';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExampleFC/>
      </div>
    );
  }
}

export default App;
