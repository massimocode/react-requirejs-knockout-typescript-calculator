import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CalculatorComponent from './components/calculator';

ReactDOM.render(
  <div className="container">
    <CalculatorComponent></CalculatorComponent>
  </div>,
  document.getElementById('example')
);