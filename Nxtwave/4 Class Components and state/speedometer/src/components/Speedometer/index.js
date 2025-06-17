import { Component } from "react";
import "./index.css";

class Speedometer extends Component {
  state = {
    speed: 0,
  };

  speedIncrement = () => {
    this.setState((prevState) => ({
      speed: Math.min(prevState.speed + 10, 200),
    }));
  };

  speedDecrement = () => {
    this.setState((prevState) => ({
      speed: Math.max(prevState.speed - 10, 0),
    }));
  };

  render() {
    const { speed } = this.state;
    return (
      <div className="container">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
          className="speedometer-img"
        />
        <h1 className="main-heading">Speed is {speed}mph</h1>
        <p className="description">Min limit is 0mph, Max limit is 200mph</p>
        <div className="btn-div">
          <button
            type="button"
            className="accelerate"
            onClick={this.speedIncrement}
          >
            Accelerate
          </button>
          <button type="button" className="brake" onClick={this.speedDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    );
  }
}

export default Speedometer;
