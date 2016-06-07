import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CalculatorComponent from './components/calculator';

interface AppState {
  calculators: { id: number; }[];
}

class App extends React.Component<void, AppState> {
  lastId: number;

  constructor() {
    super();
    this.lastId = 0;
    this.state = { calculators: [{ id: this.lastId++ }] };
  }

  addCalculator() {
    this.state.calculators.push({ id: this.lastId++ });
    this.setState({ calculators: this.state.calculators });
  }

  removeCalculator(calculator: { id: number; }) {
    this.state.calculators.splice(this.state.calculators.indexOf(calculator), 1);
    this.setState({ calculators: this.state.calculators });
  }

  render() {
    return <div className="container">
      <div className="row">
        {this.state.calculators.map(calculator =>
          <div key={calculator.id} className="col-xs-4">
            <CalculatorComponent></CalculatorComponent>
            {this.state.calculators.length > 1 ?
              <button type="button" className="btn btn-block btn-danger remove-calculator" onClick={() => this.removeCalculator(calculator) }>Remove</button>
              : null}
          </div>
        ) }
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button type="button" className="btn btn-block btn-primary" onClick={() => this.addCalculator() }>Add Calculator</button>
        </div>
      </div>
    </div>;
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('main')
);