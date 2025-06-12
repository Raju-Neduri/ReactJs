import React, { useState } from "react";
function StateDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>StateDemo Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default StateDemo;
