import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection.jsx";
import TabButton from "./components/TabButton.jsx";
import "./index.css";

function App() {
  const [selectedTopic, SetSelectedTopic] = useState(
    "Please select the above options"
  );

  function handleSelect(selectedButton) {
    SetSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <CoreConceptsSection />
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
