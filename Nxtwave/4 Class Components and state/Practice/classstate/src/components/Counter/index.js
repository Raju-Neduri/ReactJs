import { Component } from "react";
import "./index.css";

class Counter extends Component {
  state = { count: 0 };
  onIncrement = () => {
    this.setState((prevState) => {
      console.log(`Previous state count is: ${prevState.count}`);
      return { count: prevState.count + 1 };
    });
  };
  onDecrement = () => {
    this.setState((prevState) => {
      console.log(`Previous state count is: ${prevState.count}`);
      return { count: prevState.count - 1 };
    });
  };
  onReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="counter">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
        <button className="button" onClick={this.onReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
