import React, { Children } from "react";

const TabButton = ({ children, onSelect, isSelected }) => {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <>
      <li>
        <button
          className={isSelected ? "active" : undefined}
          onClick={onSelect}
        >
          {children}
        </button>
      </li>
    </>
  );
};

export default TabButton;
