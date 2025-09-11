import React from "react";

const Item = ({ foodItem, index }) => {
  return (
    <>
      <li className="list-group-item">
        {index + 1}. {foodItem}
      </li>
    </>
  );
};

export default Item;
