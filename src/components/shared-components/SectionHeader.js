import Button4 from "../ui/buttons/Button4";
import styles from "./SectionHeader.module.scss";

export default function SectionHeader({
  sectionTitle,
  buttonText,
  onBtnClick,
}) {
  return (
    <div className={styles["section-header-container"]}>
      <h2 className={styles["section-title"]}>{sectionTitle}</h2>
      <Button4 onClick={onBtnClick} className={styles["section-button"]}>
        {buttonText}
      </Button4>
    </div>
  );
}
