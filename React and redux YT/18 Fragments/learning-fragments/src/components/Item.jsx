import styles from "./Item.module.css";

const Item = ({ foodItem, index, handleBuyButton, count }) => {
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
