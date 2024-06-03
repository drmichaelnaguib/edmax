import styles from "./Button4.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Button4({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${styles.button4} ${className && className}`}
    >
      {children}
      <FaArrowRightLong />
    </button>
  );
}
