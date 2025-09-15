import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = () => {
  const buttonsName = [
    "Clear",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonsName.map((num, index) => (
          <button key={index} className={styles.button}>
            {num}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
