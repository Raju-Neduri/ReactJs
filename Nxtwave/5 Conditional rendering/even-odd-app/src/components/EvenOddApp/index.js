import { useState } from "react";
import "./index.css";

const EvenOddApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    setCount((prevCount) => {
      const newCount = prevCount + randomNumber;
      return newCount > 100 ? 100 : newCount;
    });
  };

  const isEven = count % 2 === 0;

  return (
    <div className="app-container">
      <h1 className="heading">Count {count}</h1>
      <p className="description">Count is {isEven ? "Even" : "Odd"}</p>
      <button type="button" onClick={increment} className="button">
        Increment
      </button>
      <p className="note">*Increase By Random Number Between 0 to 100</p>
    </div>
  );
};

export default EvenOddApp;
