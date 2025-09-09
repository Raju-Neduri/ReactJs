import { CORE_CONCEPTS } from "../data.js";
import CoreConcepts from "./CoreConcepts.jsx";

export default function CoreConceptsSection() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcepts key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}
