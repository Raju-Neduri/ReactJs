import { Component } from "react";
import "./index.css";

class ClickCounter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <h1 className="title">
          The Button has been clicked <br />
          <span className="count-number">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="btn" type="button" onClick={this.handleIncrement}>
          Click Me!
        </button>
      </div>
    );
  }
}

export default ClickCounter;
