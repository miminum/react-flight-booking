import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Emoji from './components/Emoji'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          This is a heading
        </h1>

        <Emoji />
        <Emoji cat/>
        <Emoji emotion='sad'/>
        <Emoji emotion='sad' cat/>
        <Emoji emotion='love'/>
        <Emoji emotion='love' cat/>
        <Emoji emotion='fear'/>
        <Emoji emotion='fear' cat/>

        <br />
        <Button primary>
          Find Flights
        </Button>
        <Button>
          <Emoji cat/>
          Sign Up
        </Button>
        
        <Button magic children='Enter Competition' href='/competition' />

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
