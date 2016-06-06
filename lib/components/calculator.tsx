import * as React from 'react';
import Calculator from '../calculator';

interface CalculatorState {
  result: string;
}

export default class CalculatorComponent extends React.Component<void, CalculatorState> {
  calculator: Calculator;

  constructor() {
    super();
    this.calculator = new Calculator();

    this.state = { result: this.calculator.input() };

    this.calculator.input.subscribe(newValue => {
      this.setState({ result: this.calculator.input() });
    });
  }

  render() {
    return <div className="main-body">
      <form>
        <div className="input-div">
          <span type="text">{this.state.result}</span>
        </div>
        <ul className="first-row">
          <li><button type="button" onClick={() => this.calculator.addNumber(7) }>7</button></li>
          <li><button type="button" onClick={() => this.calculator.addNumber(8) }>8</button></li>
          <li><button type="button" onClick={() => this.calculator.addNumber(9) }>9</button></li>
          <li><button type="button" onClick={() => this.calculator.clear() }>C</button></li>
        </ul >
        <ul className="second-row">
          <li><button type="button" onClick={() => this.calculator.addNumber(4) }>4</button></li>
          <li><button type="button" onClick={() => this.calculator.addNumber(5) }>5</button></li>
          <li><button type="button" onClick={() => this.calculator.addNumber(6) }>6</button></li>
          <li><button type="button" onClick={() => this.calculator.addPlus() }>+</button></li>
        </ul >
        <ul className="third-row">
          <li><button type="button" onClick={() => this.calculator.addNumber(1) }>1</button></li>
          <li><button type="button" onClick={() => this.calculator.addNumber(2) }>2</button></li>
          <li><button type="button" onClick={() => this.calculator.addNumber(3) }>3</button></li>
          <li><button type="button" onClick={() => this.calculator.addMinus() }>-</button></li>
        </ul >
        <ul className="fourth-row">
          <li><button type="button" onClick={() => this.calculator.addNumber(0) }>0</button></li>
          <li><button type="button" onClick={() => this.calculator.addMultiplication() }>&times; </button></li>
          <li><button type="button" onClick={() => this.calculator.addDivision() }>&divide; </button></li>
          <li><button type="button" onClick={() => this.calculator.equal() }>=</button></li>
        </ul>
      </form>
    </div>
  }
}