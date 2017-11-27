import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          This is a heading
        </h1>
        <Button title='Find Flights' primary={ true }/>
        <Button title='Sign Up'/>
        
        <Button title='Enter Competition' magic={ true }/>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>

          No more content 
      </div>
    );
  }
}

export default App;
