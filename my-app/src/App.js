import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <title>Dank and Aayush's Budget Buddy!</title> 
        <FormApp />
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
    this.state = {
      income: 0,
      taxes: 0,
      debt:0
    };

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
      <React.Fragment>
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

        <label>
          Debt:
          <input
            name="debt"
            type="number"
            value={this.state.debt}
            onChange={this.handleChange} />
        </label>

      </form>
      <Table taxes={this.state.taxes} income = {this.state.income} debt = {this.state.debt}/>
      </React.Fragment>
    );
  }

}


class Table extends React.Component {
  constructor(props) {
     super(props)
     this.props = {
       taxes: 0,
       income: 0,
       debt:0
     }
     this.state = {
        rent: 0,
        utilities:0,
        insurance:0,
        transport:0,
        personal:0,
        food:0,
        savings:0,
        retirement:0,
        miscellaneous:0,
        payment:0
     }
  }


  componentDidUpdate(prevProps){
    if(prevProps.income != this.props.income ||
       prevProps.debt != this.props.debt || prevProps.taxes != this.props.taxes){
      this.calculate();
    }
  }

  
  calculate(){
    var cash = (this.props.income-this.props.taxes)/12;
   
    var payment1=0;
    if (this.props.debt>0){
      if (this.props.debt<.05*cash){
        payment1=this.props.debt;
        cash=cash-payment1;
      }
      else{
      payment1=.05*cash;
      cash=cash-payment1;
      }
    }

    //Necesities
    var foodMin = 250;
    var food1 = .1*cash;
    if (food1<foodMin){
      food1=foodMin;
      cash=cash-food1;
    }
    var rent1 = .35*cash;
    var utilities1 = .05*cash;
    var insurance1 = .05*cash;
    var transport1 = .15*cash;
    var personal1 = .05*cash;

    //Extra
    var savings1=.1*cash;
    var retirement1 = .1*cash;
    var miscellaneous1 = .05*cash;

    
    //var output = [rent,utilities,insurance,transport,personal,food,savings,retirement,miscellaneous,payment];
    rent1 = Math.round(rent1 * 100) / 100;
    utilities1 = Math.round(utilities1 * 100) / 100;
    insurance1 = Math.round(insurance1 * 100) / 100;
    transport1 = Math.round(transport1 * 100) / 100;
    personal1 = Math.round(personal1 * 100) / 100;
    food1 = Math.round(food1 * 100) / 100;
    savings1 = Math.round(savings1 * 100) / 100;
    retirement1 = Math.round(retirement1 * 100) / 100;
    miscellaneous1 = Math.round(miscellaneous1 * 100) / 100;
    payment1 = Math.round(payment1 * 100) / 100;

      this.setState({
        rent: rent1,
        utilities:utilities1,
        insurance: insurance1,
        transport: transport1,
        personal: personal1,
        food: food1,
        savings: savings1,
        retirement: retirement1,
        miscellaneous: miscellaneous1,
        payment: payment1
      });
      
    
  }

  

  render() {
     return (
      <table>
      <thead>
          <tr>
              <th colspan="2">Budget</th>
          </tr>
      </thead>
      <tbody>
          <tr >
              <td>Rent</td>
              <td>{this.state.rent}</td>
          </tr>
          <tr>
              <td>Utilities</td>
              <td>{this.state.utilities}</td>
          </tr>
          <tr>
              <td>Insurance</td>
              <td>{this.state.insurance}</td>
          </tr>
          <tr>
              <td>Transport</td>
              <td>{this.state.transport}</td>
          </tr>
          <tr>
              <td>Personal</td>
              <td>{this.state.personal}</td>
          </tr>
          <tr>
              <td>Food</td>
              <td>{this.state.food}</td>
          </tr>
          <tr>
              <td>Savings</td>
              <td>{this.state.savings}</td>
          </tr>
          <tr>
              <td>Retirement</td>
              <td>{this.state.retirement}</td>
          </tr>
          <tr>
              <td>Miscellaneous</td>
              <td>{this.state.miscellaneous}</td>
          </tr>
          <tr>
              <td>Payment</td>
              <td>{this.state.payment}</td>
          </tr>
          
      </tbody>
  </table>
     )
  }
}













export default App;
