import React, { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  // store counts for each item in an object
  const [counts, setCounts] = useState({});

  const handleBuyButtonClick = (foodItem) => {
    setCounts((prev) => ({
      ...prev,
      [foodItem]: (prev[foodItem] || 0) + 1, // increase only that item
    }));
  };

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item
          key={index}
          foodItem={item}
          index={index}
          count={counts[item] || 0}
          handleBuyButton={() => handleBuyButtonClick(item)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
