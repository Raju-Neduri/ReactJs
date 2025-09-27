import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange, value }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Items"
        className={styles.foodInput}
        onChange={handleOnChange}
        value={value}
      />
    </>
  );
};

export default FoodInput;
