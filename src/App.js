import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state ={
      valueRepeat: ''
    }
  }

  repeat = (e) => {
    const valor = e.target.value
    this.setState({
      valueRepeat: valor
    })
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onKeyUp={this.repeat} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.valueRepeat}</p>
      </div>
    );
  }
}

export default App;
