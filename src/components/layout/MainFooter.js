import { Col, Row } from "react-bootstrap";
import styles from "./MainFooter.module.scss";
import Image from "next/image";
import footerLogo from "@/app/assets/images/animated-logo.png";
import Link from "next/link";
import AppDownloadButton from "../ui/buttons/AppDownloadButton";

export default function MainFooter() {
  return (
    <footer className={`${styles["footer-wrapper"]} section-main-container`}>
      <Row className={styles["columns-container"]}>
        <Col md="2">
          <Image src={footerLogo} className={styles.logo} />
        </Col>

        <Col md="10">
          <div className={styles["footer-columns-container"]}>
            <div className={styles["footer-column"]}>
              <h2 className={styles["column-title"]}>Home</h2>
              <ul className={styles["links-container"]}>
                <li>
                  <Link href="#">Who are we</Link>
                </li>
                <li>
                  <Link href="#"> ED max news</Link>
                </li>
                <li>
                  <Link href="#"> Our instructors</Link>
                </li>
                <li>
                  <Link href="#">Dowonload app</Link>
                </li>
                <li>
                  <Link href="#">Available courses</Link>
                </li>
              </ul>
            </div>
            <div className={styles["footer-column"]}>
              <h2 className={styles["column-title"]}>About Us</h2>
              <ul className={styles["links-container"]}>
                <li>
                  <Link href="#"> History </Link>
                </li>
                <li>
                  <Link href="#"> Mission</Link>
                </li>
                <li>
                  <Link href="#"> Vision</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
              </ul>
            </div>
            <div className={styles["footer-column"]}>
              <h2 className={styles["column-title"]}>Courses</h2>
              <ul className={styles["links-container"]}>
                <li>
                  <Link href="#"> Latest courses </Link>
                </li>
                <li>
                  <Link href="#"> Marketing</Link>
                </li>
                <li>
                  <Link href="#"> Management</Link>
                </li>
                <li>
                  <Link href="#">Computer</Link>
                </li>
              </ul>
            </div>
            <div className={styles["footer-column"]}>
              <h2 className={styles["column-title"]}>Instructors</h2>
              <ul className={styles["links-container"]}>
                <li>
                  <Link href="#"> Top Instructors </Link>
                </li>
                <li>
                  <Link href="#"> Marketing</Link>
                </li>
                <li>
                  <Link href="#"> Management</Link>
                </li>
                <li>
                  <Link href="#">Computer</Link>
                </li>
              </ul>
            </div>
            <div className={styles["footer-column"]}>
              <h2 className={styles["column-title"]}>My Account</h2>
              <ul className={styles["links-container"]}>
                <li>
                  <Link href="#"> Login</Link>
                </li>
                <li>
                  <Link href="#"> Sign Up</Link>
                </li>
              </ul>
            </div>
            <div className={styles["footer-column"]}>
              <h2 className={styles["column-title"]}>Download app</h2>
              <ul className={styles["links-container"]}>
                <li>
                  <AppDownloadButton
                    companyName="apple"
                    store="App Store"
                    className="w-100"
                  />
                </li>
                <li>
                  <AppDownloadButton
                    companyName="android"
                    store="Play store"
                    className="w-100"
                  />
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <div className={styles["owner-right-txt"]}>
        Created by innovation scope 2024. All rights reserved
      </div>
    </footer>
  );
}
