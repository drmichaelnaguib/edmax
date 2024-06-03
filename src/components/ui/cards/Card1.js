"use client";
import Image from "next/image";
import styles from "./Card1.module.scss";
import Button1 from "@/components/ui/buttons/Button1.js";
import Button2 from "@/components/ui/buttons/Button2.js";
import { useRef } from "react";

export default function Card1({
  mainImg,
  mainImageText1,
  mainImageText2,
  cardTitle,
  cardMainInfo,
  cardContent,
  cardExtraInfo,
  ownerName,
  secImg,
  button1Content,
  button2Content,
  videoSrc,
}) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={styles.card1}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles["card-header-container"]}>
        <div className={styles["image-container"]}>
          <Image src={mainImg} alt={cardTitle} className={styles["main-img"]} />
          <video
            ref={videoRef}
            className={styles.video}
            src={videoSrc}
            muted
            loop
            playsInline
          />
        </div>
        <div className={styles["small-text-container"]}>
          <div>{mainImageText1}</div>
          <div>{mainImageText2}</div>
        </div>
      </div>

      <div className={styles["card-title-container"]}>
        <h3 className={styles["card-title"]}>{cardTitle}</h3>
        <h4 className={styles["card-main-info"]}>{cardMainInfo}</h4>
      </div>

      <div className={styles["card-footer-container"]}>
        <div>
          <p className={styles["card-content"]}>{cardContent}</p>
          <div className={styles["sec-img-container"]}>
            <p className={styles["extra-info-txt"]}>{cardExtraInfo}</p>
            <div className={styles["card-owner-info"]}>
              <h4 className={styles["owner-name"]}>{ownerName}</h4>
              <Image src={secImg} alt={ownerName} />
            </div>
          </div>
        </div>
        <div className={styles["card-actions"]}>
          <Button1 className={"w-50"}>{button1Content}</Button1>
          <Button2>{button2Content}</Button2>
        </div>
      </div>
    </div>
  );
}
