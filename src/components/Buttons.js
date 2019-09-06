import React, { Component } from 'react';
import Screen from './Screen';

class Buttons extends Component {
  state = {
    numbers: 0
  };

  handleNumbers = button => {
    console.log(button, this);
    const { numbers } = this.state;
    this.setState({ numbers: numbers + button });
  };

  handleOperators = button => {
    console.log(this, button);
    const { operators } = this.state;
    if (button === '=') {
      this.calculate();
    } else this.setState({ operators: operators + button });
  };

  handleChange = e => {
    console.log(e.target.value);
    const { value } = e.target;
    this.setState({ numbers: value });
  };

  handleAC = () => {
    const { numbers } = this.state;
    if (numbers === 0) return null;
    this.setState({ numbers: '' });
  };

  backSpace = () => {
    const { numbers } = this.state;
    this.setState({ numbers: numbers.slice(0, -1) });
  };

  calculate = () => {
    const { numbers } = this.state;
    if (numbers === 0) {
      return null;
    } else
      this.setState({
        numbers: eval(numbers || null)
      });
  };

  render() {
    const { numbers, operators } = this.state;
    return (
      <div className="container border border-dark rounded mt-5 mb-3mx-auto calc">
        <Screen
          handleNumbers={this.handleNumbers}
          handleOperators={this.handleOperators}
          numbers={numbers}
          operators={operators}
          handleChange={this.handleChange}
          handleAC={this.handleAC}
        />
        <div className="row align-items-start mt-3">
          <div className="col mb-3">
            <button
              className="btn btn-secondary lg"
              name="0"
              onClick={this.handleAC}
            >
              AC
            </button>
          </div>
          <div className="col">
            <button className="btn btn-secondary lg">+/-</button>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary lg font-weight-bold"
              onClick={e => this.handleNumbers(e.target.name)}
              name="%"
            >
              %
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-warning lg font-weight-bold"
              name="/"
              onClick={e => this.handleNumbers(e.target.name)}
            >
              /
            </button>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <button
              className="btn btn-dark lg"
              name="7"
              onClick={e => this.handleNumbers(e.target.name)}
            >
              7
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-dark lg"
              name="8"
              onClick={e => this.handleNumbers(e.target.name)}
            >
              8
            </button>
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-dark lg"
              name="9"
              onClick={e => this.handleNumbers(e.target.name)}
            >
              9
            </button>
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-warning lg font-weight-bold"
              onClick={e => this.handleNumbers(e.target.name)}
              name="*"
            >
              x
            </button>
          </div>
        </div>
        <div className="row align-items-end mt-3">
          <div className="col">
            <button
              className="btn btn-dark lg"
              name="4"
              onClick={e => this.handleNumbers(e.target.name)}
            >
              4
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-dark lg"
              name="5"
              onClick={e => this.handleNumbers(e.target.name)}
            >
              5
            </button>
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-dark lg"
              onClick={e => this.handleNumbers(e.target.name)}
              name="6"
            >
              6
            </button>
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-warning lg font-weight-bold"
              name="-"
              value={'-'}
              onClick={e => this.handleNumbers(e.target.name)}
            >
              -
            </button>
          </div>
        </div>{' '}
        <div className="row align-items-end mt-3">
          <div className="col">
            <button
              className="btn btn-dark lg"
              name="1"
              onClick={e => this.handleNumbers(e.target.name)}
            >
              1
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-dark lg"
              name="2"
              onClick={e => this.handleNumbers(e.target.name)}
            >
              2
            </button>
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-dark lg"
              name="3"
              onClick={e => this.handleNumbers(e.target.name)}
            >
              3
            </button>
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-warning lg font-weight-bold"
              onClick={e => this.handleNumbers(e.target.name)}
              name="+"
            >
              +
            </button>
          </div>
        </div>
        <div className="row align-items-end mt-3">
          <div className="col mb-3">
            <button
              className="btn btn-dark lg ml-5 mx-auto"
              name="0"
              onClick={e => this.handleNumbers(e.target.name)}
            >
              0
            </button>
          </div>
          <div className="col mb-3">
            <button
              className="btn btn-dark lg ml-5 mx-auto"
              name="backspace"
              onClick={e => this.backSpace(e.target.name)}
            >
              DEL
            </button>
          </div>
          <div className="col mb-3">
            <button
              className="btn btn-dark lg font-weight-bold"
              name="."
              onClick={e => this.handleNumbers(e.target.name)}
            >
              .
            </button>
          </div>
          <div className="col mb-3">
            {' '}
            <button
              className="btn btn-warning lg font-weight-bold"
              onClick={e => this.calculate(e.target.name)}
              name="="
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;
