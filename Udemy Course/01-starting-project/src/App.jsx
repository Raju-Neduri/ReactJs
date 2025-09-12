import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection.jsx";
import TabButton from "./components/TabButton.jsx";
import "./index.css";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, SetSelectedTopic] = useState("components");

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
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>

          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
