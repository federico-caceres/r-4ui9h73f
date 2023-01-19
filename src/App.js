import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state ={
      repeatedValue: ''
    }
  }

  repeat = (e) => {
    this.setState({
      repeatedValue: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.repeat} placeholder="Empieza a escribir algo"/>
        <p className="repeater">{this.state.repeatedValue}</p>
      </div>
    );
  }
}

export default App;
