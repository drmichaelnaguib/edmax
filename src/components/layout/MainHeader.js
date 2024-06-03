"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/images/dark-logo.svg";
import styles from "./MainHeader.module.scss";
import { FaAngleUp, FaGlobe } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Button1 from "../ui/buttons/Button1";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

export default function MainHeader() {
  // states
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [otherLanguage, setOtherLanguage] = useState("Arabic");
  const [showLngPicker, setShowLngPicker] = useState(false);

  const toggleLngPickerHandler = () =>
    setShowLngPicker((prevState) => !prevState);

  const lngSelectHandler = () => {
    setSelectedLanguage(otherLanguage);
    setOtherLanguage(selectedLanguage);
    setShowLngPicker(false);
  };

  return (
    <header className={styles.header}>
      <div className="section-main-container w-100 d-flex justify-content-between align-items-center">
        <div className={styles["logo-links-container"]}>
          <div className={styles["image-container"]}>
            <Image src={Logo} />
          </div>
          <nav className={styles["navigation-bar"]}>
            <ul className={styles["links-container"]}>
              <li className={styles.link}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.link}>
                <Link href={"/About"}>AboutUs</Link>
              </li>
              <li className={styles.link}>
                <Link href={"/courses"}>Courses</Link>
              </li>
              <li className={styles.link}>
                <Link href={"/instructors"}>Instructors</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles["header-quick-access-container"]}>
          <div className={`${styles["language-picker-container"]} me-3`}>
            <button onClick={toggleLngPickerHandler}>
              <FaGlobe className="me-1" size={17} />
              <span className="me-1">{selectedLanguage}</span>
              {!showLngPicker && <FaAngleDown />}
              {showLngPicker && <FaAngleUp />}
            </button>
            {showLngPicker && (
              <div className={styles["languages-options"]}>
                <button onClick={lngSelectHandler}>{otherLanguage}</button>
              </div>
            )}
          </div>
          <div className={`${styles["input-container"]} me-3`}>
            <input type="text" placeholder="search" />
            <HiMagnifyingGlass />
          </div>
          <Button1 className={styles["header-button"]}>Login / Sign up</Button1>
        </div>
      </div>
    </header>
  );
}
