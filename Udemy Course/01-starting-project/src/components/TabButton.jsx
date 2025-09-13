import React, { Children } from "react";

const TabButton = ({ children, isSelected, ...props }) => {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <>
      <li>
        <button className={isSelected ? "active" : undefined} {...props}>
          {children}
        </button>
      </li>
    </>
  );
};

export default TabButton;
