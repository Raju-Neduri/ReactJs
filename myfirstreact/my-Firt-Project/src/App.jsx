import { useState } from "react";
import "./App.css";
import Apple from "./Apple";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Apple />
      </div>
    </>
  );
}

export default App;
