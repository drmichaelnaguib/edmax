"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import styles from "./SliderSection.module.scss";
import sliderPlaceholder from "@/app/assets/images/placeholders/1344x397-slider.png";
import { Carousel } from "react-responsive-carousel";
import SliderArrowButton from "@/components/ui/buttons/SliderArrowButton";
import nextSvg from "@/app/assets/icons/next.svg";
import previousSvg from "@/app/assets/icons/prev.svg";
import "./carousel.scss";

export default function SliderSection() {
  const renderArrowNext = (onClick) => {
    return (
      <SliderArrowButton
        onClick={onClick}
        className={`${styles["slider-btn"]} ${styles.next}`}
      >
        <Image src={nextSvg} alt="next" />
      </SliderArrowButton>
    );
  };

  const renderArrowPrev = (onClick) => {
    return (
      <SliderArrowButton
        onClick={onClick}
        className={`${styles["slider-btn"]} ${styles.prev}`}
      >
        <Image src={previousSvg} alt="prev" />
      </SliderArrowButton>
    );
  };

  return (
    <section className={`${styles["slider-section"]} section-main-container`}>
      <div className={styles["slider-container"]}>
        <h2 className={`${styles["slider-title"]} mb-2`}>New at ED max</h2>
        <Carousel
          className={`${styles.slider}`}
          renderArrowNext={renderArrowNext}
          renderArrowPrev={renderArrowPrev}
          showIndicators={false}
          showThumbs={false}
        >
          <div className={styles["img-container"]}>
            <Image
              src={sliderPlaceholder}
              alt="slide 1"
              className={styles["slider-img"]}
            />
          </div>
          <div className={styles["img-container"]}>
            <Image
              src={sliderPlaceholder}
              alt="slide 2"
              className={styles["slider-img"]}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
