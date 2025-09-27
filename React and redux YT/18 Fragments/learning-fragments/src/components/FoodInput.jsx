import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Food Items"
        className={styles.foodInput}
        onChange={handleOnChange}
      />
    </>
  );
};

export default FoodInput;
