import styles from "./AppDownloadButton.module.scss";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function AppDownloadButton({ companyName, store, className }) {
  return (
    <button
      type="button"
      className={`${styles["app-download-button"]} ${className && className}`}
    >
      {companyName === "apple" ? (
        <FaApple size={16} />
      ) : (
        <FaGooglePlay size={16} />
      )}
      <div className={styles["button-txt-container"]}>
        <span>Download on the</span>
        <span>{store}</span>
      </div>
    </button>
  );
}
