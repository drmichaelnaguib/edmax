import styles from "./Button2.module.scss";

export default function Button2({ children }) {
  return (
    <button type="button" className={styles.button2}>
      {children}
    </button>
  );
}
