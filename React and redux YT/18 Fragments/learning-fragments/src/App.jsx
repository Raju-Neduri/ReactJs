import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const foodItems = [
    "Fresh Fruits",
    "Green Vegetables",
    "Dry Fruits",
    "Whole Grains",
    "Dairy Products",
  ];
  return (
    <>
      <div className="App">
        <h1>Healthy Food</h1>
        <ul className="list-group">
          {foodItems.map((item, index) => (
            <li key={index} className="list-group-item">
              {index + 1}. {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
