import { useState } from "react";
import "./App.css";
import MychannelVideos from "./Components/videos";
import StateDemo from "./Components/StateDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StateDemo />
    </>
  );
}

export default App;
np;
