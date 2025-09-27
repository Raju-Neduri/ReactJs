import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  const [textShow, setTextShow] = useState("");
  const [foodItems, setFoodItems] = useState([
    "Fresh Fruits",
    "Green Vegetables",
    "Dry Fruits",
    "Whole Grains",
    "Dairy Products",
  ]);

  const [message, setMessage] = useState(""); // paragraph message

  const handleOnChange = (event) => {
    setTextShow(event.target.value);
  };

  const handleAddItem = () => {
    if (textShow.trim() === "") return; // don’t add empty text
    setFoodItems((prev) => [...prev, textShow.trim()]);
    setMessage(`"${textShow.trim()}" is added to the cart`); // update message
    setTextShow(""); // clear input after adding
  };

  return (
    <Container>
      <div className="App">
        <h1 className="heading">Healthy Food</h1>

        {/* Input + Add button */}
        <div className="addBtn">
          <FoodInput handleOnChange={handleOnChange} value={textShow} />
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddItem}
            disabled={!textShow.trim()}
          >
            Add
          </button>
        </div>

        {/* Paragraph only visible when message exists */}
        {message && <p className="searched">{message}</p>}

        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </div>
    </Container>
  );
}

export default App;
