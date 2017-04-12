import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import Toggle from './Toggle';
import Conditional from './Conditional';
import Forms from './Forms';
import Lists from './Lists';
import './App.css';

function ActionLink()
{
  function handleClick(e)
  {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <ActionLink />
        </p>
        <Clock />
        <Toggle />
        <Conditional />
        <Lists />
        <Forms />
      </div>
    );
  }
}

export default App;
