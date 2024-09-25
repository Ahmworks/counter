import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //! state te basşlangıç değeri verdik
    this.state = { count: 0 };
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <h2>Class Components</h2>
        <h3>Count: {this.state.count} </h3>
        <button onClick={this.increment} className="btn btn-primary">
          Arttır
        </button>
        <button
          onClick={() => this.setState({ count: 0 })}
          className="btn btn-success"
        >
          CLR
        </button>
        <button onClick={this.decrement} className="btn btn-danger">
          Azalt
        </button>
      </div>
    );
  }
}

export default Counter;
