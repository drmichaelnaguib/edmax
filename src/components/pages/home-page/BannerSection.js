import Image from "next/image";
import bannerImage from "@/app/assets/images/pages/home/banner-img.png";
import Button1 from "@/components/ui/buttons/Button1";
import styles from "./BannerSection.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BannerSection() {
  return (
    <section className={styles["banner-section"]}>
      <div className="section-main-container">
        <Row className="align-items-center">
          <Col lg="8" md="12" className="order-2">
            <div className={styles.banner}>
              <div className={styles["banner-titles-wrapper"]}>
                <h1>
                  Learn Faster, with <span>ED max</span>!
                </h1>
                <h2>Learn anywhere, finish couses and pass tests!</h2>
              </div>

              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using{" "}
              </p>

              <Button1>
                Discover Courses
                <FaArrowRightLong className="ms-2" />
              </Button1>
            </div>
          </Col>
          <Col lg="4" md="12" className="order-lg-2">
            <div className={styles["image-container"]}>
              <Image
                src={bannerImage}
                alt="banner image"
                className={styles["banner-image"]}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
