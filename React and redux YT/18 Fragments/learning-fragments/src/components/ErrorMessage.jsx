import React from "react";

const ErrorMessage = ({ items }) => {
  return (
    <>
      {items.length === 0 && (
        <h3>Hi, I am still hungry. Please update the Healthy foods.</h3>
      )}
    </>
  );
};

export default ErrorMessage;
