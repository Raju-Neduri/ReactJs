import React from "react";
import styles from "./Item.module.css";

const Item = ({ foodItem, index }) => {
  return (
    <>
      <li className={`list-group-item ${styles.foodItem}`}>
        {index + 1}. {foodItem}
        <button className={styles.buyBtn}>Buy</button>
      </li>
    </>
  );
};

export default Item;
