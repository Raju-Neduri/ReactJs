import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

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
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </div>
    </>
  );
}

export default App;
