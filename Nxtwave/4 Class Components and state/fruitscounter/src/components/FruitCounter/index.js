import React, { useState } from "react";
import "./index.css";

const FruitsCounter = () => {
  const [mangoCount, setMangoCount] = useState(0);
  const [bananaCount, setBananaCount] = useState(0);

  const incrementMango = () => setMangoCount((prev) => prev + 1);
  const incrementBanana = () => setBananaCount((prev) => prev + 1);

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
              alt="mango"
              className="fruit-img"
            />
            <button className="button" onClick={incrementMango}>
              Eat Mango
            </button>
          </div>
          <div className="fruit">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="fruit-img"
            />
            <button className="button" onClick={incrementBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitsCounter;
