import Header from "./components/Header/Header.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection.jsx";
import TabButton from "./components/TabButton.jsx";
import "./index.css";

function App() {
  let tabContent = "Please select the Tab";

  function handleSelect(selectedButton) {
    console.log(selectedButton);
    tabContent = selectedButton;
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
            <TabButton onSelect={() => handleSelect("Jsx")}>Jsx</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
