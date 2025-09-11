import React, { Children } from "react";

const TabButton = ({ children, onSelect }) => {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <>
      <li>
        <button onClick={onSelect}>{children}</button>
      </li>
    </>
  );
};

export default TabButton;
