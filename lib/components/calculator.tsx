import * as React from 'react';
import Calculator from '../models/calculator';

interface CalculatorState {
  result: string;
}

export default class CalculatorComponent extends React.Component<void, CalculatorState> {
  private calculator: Calculator;
  private resultSubscription: KnockoutSubscription;

  constructor() {
    super();
    this.calculator = new Calculator();

    this.state = { result: this.calculator.input() };

    this.resultSubscription = this.calculator.input.subscribe(newValue => {
      this.setState({ result: this.calculator.input() });
    });
  }

  render() {
    return <div className="calculator">
      <div className="row">
        <input type="text" className="form-control" value={this.state.result} readOnly />
      </div>
      <div className="row">
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addNumber(7) }>7</button></div>
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addNumber(8) }>8</button></div>
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addNumber(9) }>9</button></div>
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.clear() }>C</button></div>
      </div>
      <div className="row">
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addNumber(4) }>4</button></div>
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addNumber(5) }>5</button></div>
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addNumber(6) }>6</button></div>
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addPlus() }>+</button></div>
      </div>
      <div className="row">
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addNumber(1) }>1</button></div>
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addNumber(2) }>2</button></div>
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addNumber(3) }>3</button></div>
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addMinus() }>-</button></div>
      </div>
      <div className="row">
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addNumber(0) }>0</button></div>
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addMultiplication() }>&times; </button></div>
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.addDivision() }>&divide; </button></div>
        <div className="col-xs-3"><button type="button" className="btn btn-block" onClick={() => this.calculator.equal() }>=</button></div>
      </div>
    </div>
  }

  private componentWillUnmount() {
    this.resultSubscription.dispose();
  }
}