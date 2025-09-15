import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <input type="text" className={styles.display} />
        <div id="button-Container">
          <button>c</button>
        </div>
      </div>
    </>
  );
}

export default App;
