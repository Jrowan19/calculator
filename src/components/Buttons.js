import React, { Component } from 'react';
import Screen from './Screen';

class Buttons extends Component {
  state = {
    numbers: 0
  };

  handleButton = button => {
    console.log(button);
    const { numbers } = this.state;
    this.setState({ numbers: numbers + button });
  };

  handleChange = e => {
    console.log(e.target.value);
    const { value } = e.target;
    this.setState({ numbers: value });
  };

  handleAC = () => {
    const { numbers } = this.state;
    this.setState({ numbers: numbers.slice(0, 0) });
  };

  render() {
    const { numbers } = this.state;
    return (
      <div className="container border border-dark rounded mt-5 mx-auto calc">
        <Screen
          handlebutton={this.handleButton}
          numbers={numbers}
          handleChange={this.handleChange}
          handleAC={this.handleAC}
        />
        <div className="row align-items-start mt-3">
          <div className="col mb-3">
            <button
              className="btn btn-secondary lg"
              name="0"
              onClick={this.handleAC}
              disabled={numbers === 0}
            >
              AC
            </button>
          </div>
          <div className="col">
            <button className="btn btn-secondary lg">+/-</button>
          </div>
          <div className="col">
            <button className="btn btn-secondary lg">
              <i className="fas fa-percent"></i>
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-warning lg"
              onClick={e => this.handleButton(e.target.name)}
              name="\"
            >
              <i className="fas fa-divide"></i>
            </button>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <button
              className="btn btn-dark lg"
              name="7"
              onClick={e => this.handleButton(e.target.name)}
            >
              7
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-dark lg"
              name="8"
              onClick={e => this.handleButton(e.target.name)}
            >
              8
            </button>
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-dark lg"
              name="9"
              onClick={e => this.handleButton(e.target.name)}
            >
              9
            </button>
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-warning lg"
              onClick={e => this.handleButton(e.target.name)}
              name="*"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="row align-items-end mt-3">
          <div className="col">
            <button
              className="btn btn-dark lg"
              name="4"
              onClick={e => this.handleButton(e.target.name)}
            >
              4
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-dark lg"
              name="5"
              onClick={e => this.handleButton(e.target.name)}
            >
              5
            </button>
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-dark lg"
              onClick={e => this.handleButton(e.target.name)}
              name="6"
            >
              6
            </button>
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-warning lg"
              name="-"
              onClick={e => this.handleButton(e.target.name)}
            >
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>{' '}
        <div className="row align-items-end mt-3">
          <div className="col">
            <button
              className="btn btn-dark lg"
              name="1"
              onClick={e => this.handleButton(e.target.name)}
            >
              1
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-dark lg"
              name="2"
              onClick={e => this.handleButton(e.target.name)}
            >
              2
            </button>
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-dark lg"
              name="3"
              onClick={e => this.handleButton(e.target.name)}
            >
              3
            </button>
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-warning lg"
              onClick={e => this.handleButton(e.target.name)}
              name="+"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="row align-items-end mt-3 mb-1">
          <div className="col-6 ">
            <button
              className="btn btn-dark lg ml-5 mx-auto"
              style={{ width: '20rem' }}
              name="0"
              onClick={e => this.handleButton(e.target.name)}
            >
              0
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-dark lg font-weight-bold"
              name="."
              onClick={e => this.handleButton(e.target.name)}
            >
              .
            </button>
          </div>
          <div className="col">
            {' '}
            <button className="btn btn-warning lg" name="=">
              <i className="fas fa-equals"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;
