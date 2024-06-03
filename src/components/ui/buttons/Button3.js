import styles from "./Button3.module.scss";

export default function Button3({ children }) {
  return (
    <button type="button" className={styles.button3}>
      {children}
    </button>
  );
}
