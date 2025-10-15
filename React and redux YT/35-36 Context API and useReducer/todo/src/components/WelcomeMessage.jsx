import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ todoItems }) => {
  return !todoItems.length && <p className={styles.welcome}>Enjoy Your Day</p>;
};

export default WelcomeMessage;
