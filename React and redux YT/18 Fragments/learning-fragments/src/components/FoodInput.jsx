import styles from "./FoodInput.module.css";

const FoodInput = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Food Items"
        className={styles.foodInput}
      />
    </>
  );
};

export default FoodInput;
