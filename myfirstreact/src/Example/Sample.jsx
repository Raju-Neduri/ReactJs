import React from "react";
import TestComponents from "./TestComponents";
const Mango = () => {
  return <h2>Mango are sweet</h2>;
};
const Grapes = () => {
  return <h2>Grapes component</h2>;
};
function Sample() {
  return (
    <div>
      sample
      <Mango />
      <Grapes />
      <Grapes />
      <TestComponents />
    </div>
  );
}

export default Sample;
