import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

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
          <h1>Healthy Food</h1>
          <ErrorMessage items={foodItems} />
          <FoodItems items={foodItems} />
        </div>
      </Container>

      <Container>
        <h1>this is new container</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illum
          laborum esse iusto molestias qui facilis quisquam porro, atque veniam
          voluptatum, accusantium officia laudantium necessitatibus labore neque
          distinctio doloremque magnam.
        </p>
      </Container>
    </>
  );
}

export default App;
