import React from "react";
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
    </div>
  );
}

export default Sample;
