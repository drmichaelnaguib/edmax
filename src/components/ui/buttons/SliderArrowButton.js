import styles from "./SliderArrowButton.module.scss";

export default function SliderArrowButton({ children, onClick, className }) {
  return (
    <button
      type="button"
      className={`${styles["slider-button"]} ${className && className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
