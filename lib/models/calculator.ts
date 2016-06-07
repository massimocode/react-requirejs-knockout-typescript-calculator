import * as ko from 'knockout';

export default class Calculator {
  constructor() {
    this.newInput = "0";
    this.oldInput = "";
    this.result = 0;
    this.input = ko.observable(this.newInput);
    this.operation = "";
    this.history = [];
  }

  addNumber(number) {
    if (this.newInput === "0") {
      this.newInput = number.toString();
      this.history.push(this.newInput);
      this.input(this.newInput);
      return;
    }

    if (this.history[this.history.length - 1] === "=") {
      this.newInput = "";
    }

    this.newInput += number.toString();
    this.history.push(this.newInput);
    this.input(this.newInput);
  }

  addPlus() {
    if (this.history.indexOf("+") > -1 || this.history.indexOf("-") > -1 || this.history.indexOf("*") > -1 || this.history.indexOf("/") > -1) {
      this.equal();
    }

    this.operation = "+";
    if (this.history[this.history.length - 1] === "-" || this.history[this.history.length - 1] === "+" || this.history[this.history.length - 1] === "*" || this.history[this.history.length - 1] === "/") return;

    this.oldInput = this.newInput;
    this.history.push("+");
    this.newInput = "";
  }

  addMinus() {
    if (this.history.indexOf("+") > -1 || this.history.indexOf("-") > -1 || this.history.indexOf("*") > -1 || this.history.indexOf("/") > -1) {
      this.equal();
    }

    this.operation = "-";
    if (this.history[this.history.length - 1] === "-" || this.history[this.history.length - 1] === "+" || this.history[this.history.length - 1] === "*" || this.history[this.history.length - 1] === "/") return;

    this.oldInput = this.newInput;
    this.history.push("-");
    this.newInput = "";
  }

  addMultiplication() {
    if (this.history.indexOf("+") > -1 || this.history.indexOf("-") > -1 || this.history.indexOf("*") > -1 || this.history.indexOf("/") > -1) {
      this.equal();
    }
    this.operation = "*";
    if (this.history[this.history.length - 1] === "-" || this.history[this.history.length - 1] === "+" || this.history[this.history.length - 1] === "*" || this.history[this.history.length - 1] === "/") return;

    this.oldInput = this.newInput;
    this.history.push("*");
    this.newInput = "";
  }

  addDivision() {
    if (this.history.indexOf("+") > -1 || this.history.indexOf("-") > -1 || this.history.indexOf("*") > -1 || this.history.indexOf("/") > -1) {
      this.equal();
    }
    this.operation = "/";
    if (this.history[this.history.length - 1] === "-" || this.history[this.history.length - 1] === "+" || this.history[this.history.length - 1] === "*" || this.history[this.history.length - 1] === "/") return;
    this.oldInput = this.newInput;
    this.history.push("/");
    this.newInput = "";
  }

  equal() {
    if (isNaN(this.history[this.history.length - 1] as number)) return;
    if (this.operation === "" || this.oldInput === "") return;
    if (this.operation === "+") {
      this.result = +this.oldInput + +this.newInput;
    } else if (this.operation === "-") {
      this.result = +this.oldInput - +this.newInput;
    } else if (this.operation === "*") {
      this.result = +this.oldInput * +this.newInput;
    } else if (this.operation === "/") {
      this.result = +this.oldInput / +this.newInput;
    }

    if (this.result == Number.POSITIVE_INFINITY || this.result == Number.NEGATIVE_INFINITY) {
      this.result = 0;
    }

    this.input(this.result.toString());
    this.history = [];
    this.history.push(this.result, "=");
    this.newInput = this.result.toString();
  }

  clear() {
    this.newInput = "0";
    this.oldInput = "";
    this.result = 0;
    this.history = [];
    this.input(this.newInput);
  }

  newInput: string;
  oldInput: string;
  result: number;
  input: KnockoutObservable<string>;
  operation: string;
  history: any[];
}