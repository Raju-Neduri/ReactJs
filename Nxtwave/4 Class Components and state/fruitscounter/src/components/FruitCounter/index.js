// Write your code here
import { Component } from "react";
import "./index.css";

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  };

  eatMango = () => {
    this.setState((prevState) => ({
      mangoCount: prevState.mangoCount + 1,
    }));
  };

  eatBanana = () => {
    this.setState((prevState) => ({
      bananaCount: prevState.bananaCount + 1,
    }));
  };

  render() {
    const { mangoCount, bananaCount } = this.state;

    return (
      <div className="fruits-counter-bg">
        <div className="counter-card">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes{" "}
            <span className="count">{bananaCount}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-img"
                alt="mango"
              />
              <button type="button" className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-img"
                alt="banana"
              />
              <button type="button" className="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FruitsCounter;
