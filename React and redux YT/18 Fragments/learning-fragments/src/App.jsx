import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

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
      <Container>
        <div className="App">
          <h1 className="heading">Healthy Food</h1>
          <FoodInput></FoodInput>
          <ErrorMessage items={foodItems} />
          <FoodItems items={foodItems} />
        </div>
      </Container>
    </>
  );
}

export default App;
