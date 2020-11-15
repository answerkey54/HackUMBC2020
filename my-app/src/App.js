import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormApp />
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://neuvoo.com/tax-calculator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to find out your taxes
        </a>
      </header>
    </div>
  );
}

class FormApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          Income:
          <input
            name="income"
            type="number"
            value={this.state.income}
            onChange={this.handleChange} />
        </label>
        <br />

        <label>
          Taxes:
          <input
            name="taxes"
            type="number"
            value={this.state.taxes}
            onChange={this.handleChange} />
        </label>

      </form>
    );
  }
}


/*
calculate(income, taxes, debt){
var cash = income-taxes;

//Necesities
var rent = 1/3*cash;
var foodMin = 250;
var foodMax = .1*cash

var utilities = .05*cash;
var insuranceMax = .1*cash;
var insuranceMin- = .03*cash;
var transport = 
var personal_maintence = 


//Extra
var savings=.1*cash;
var retirement/investments = .1*cash;
var entertainment
var emergency
var miscellaneous

var[]
}
*/






export default App;
