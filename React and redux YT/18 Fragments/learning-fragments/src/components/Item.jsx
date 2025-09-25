import React, { useState } from "react";
import styles from "./Item.module.css";

const Item = ({ foodItem, index, handleBuyButton }) => {
  const [count, setCount] = useState(0);

  const handleBuyButtonClick = (e) => {
    setCount((prev) => prev + 1);
    console.log(e);
  };

  return (
    <li className={`list-group-item ${styles.foodItem}`}>
      {index + 1}. {foodItem}
      <div className={styles.buttonWrapper}>
        <button className={styles.buyBtn} onClick={handleBuyButton}>
          Buy
        </button>
        {count > 0 && <span className={styles.countBadge}>{count}</span>}
      </div>
    </li>
  );
};

export default Item;
