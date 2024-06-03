import styles from "./Button1.module.scss";

export default function Button1({ children, className }) {
  return (
    <button
      type="button"
      className={`${styles.button1} ${className && className}`}
    >
      {children}
    </button>
  );
}
