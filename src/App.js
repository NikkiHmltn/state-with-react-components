import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      inputtedNumber: null
    }
  }

  increment = () => {
    const newCount = this.state.count + this.state.inputtedNumber
    this.setState({ count: newCount})
  
  }

  decrease = () => {
    
    const newCount = this.state.count - this.state.inputtedNumber
    this.setState({count: newCount})
  }

  changeInput = (e) => {
    const newValue = parseInt(e.target.value) || 0

    this.setState({inputtedNumber: newValue})
  }

  render() {
    return (
      <div className="calc">
        <h1>{this.state.count}</h1>
        <input type="number" value={this.state.inputtedNumber} onChange={this.changeInput}/>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    )
  }
}

export default App;
