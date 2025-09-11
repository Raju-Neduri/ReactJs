import Header from "./components/Header/Header.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection.jsx";
import TabButton from "./components/TabButton.jsx";
import "./index.css";
function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptsSection />
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton>Component</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
