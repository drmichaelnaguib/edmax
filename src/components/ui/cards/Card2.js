import Image from "next/image";
import Button3 from "../buttons/Button3";
import courses from "@/app/assets/icons/courses.svg";
import students from "@/app/assets/icons/students.svg";
import views from "@/app/assets/icons/views.svg";
import centers from "@/app/assets/icons/centers.svg";
import styles from "./Card2.module.scss";

export default function Card2({
  mainImg,
  cardTitle,
  cardSubtitle,
  button3Content,
  coursesNo,
  studentsNo,
  viewsNo,
  centersNo,
}) {
  return (
    <div className={styles.card2}>
      <div className={styles["image-container"]}>
        <Image src={mainImg} className={styles["main-img"]} />
      </div>

      <h3 className={styles["card-title"]}>{cardTitle}</h3>
      <h4 className={styles["card-subtitle"]}>Category: {cardSubtitle}</h4>

      <div className={styles["card-icons-container"]}>
        <div className={styles["icon-info"]}>
          <Image src={courses} />
          <h5 className={styles["icon-name"]}>
            Courses <span>{coursesNo}</span>
          </h5>
        </div>
        <div className={styles["icon-info"]}>
          <Image src={students} />
          <h5 className={styles["icon-name"]}>
            Students <span>{studentsNo}</span>
          </h5>
        </div>
        <div className={styles["icon-info"]}>
          <Image src={views} />
          <h5 className={styles["icon-name"]}>
            Views <span>{viewsNo}</span>
          </h5>
        </div>
        <div className={styles["icon-info"]}>
          <Image src={centers} />
          <h5 className={styles["icon-name"]}>
            Centers <span>{centersNo}</span>
          </h5>
        </div>
      </div>

      <div className={`${styles["card-actions"]} w-75`}>
        <Button3>{button3Content}</Button3>
      </div>
    </div>
  );
}
