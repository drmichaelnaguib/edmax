import Image from "next/image";
import easyAccessImg from "@/app/assets/images/pages/home/easy-access-img.png";
import Button1 from "@/components/ui/buttons/Button1";
import styles from "./EasyAccessSection.module.scss";
import { Col, Row } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";

export default function EasyAccessSection() {
  return (
    <section className={styles["easy-access-section"]}>
      <div className="section-main-container">
        <Row className="align-items-center">
          <Col lg="8" md="12" className="order-2">
            <div className={styles["content-container"]}>
              <h2>Want an easier access?</h2>
              <h3>Download our App</h3>
              <p>
                EDmax is an app that simply solves all the difficulties that
                faces the educational system specially in Egypt. It is not only
                an app that provides e-learning services but further beyond
                this. It is not onl y an e-learning app but it is a system over
                2 (website and application) platforms each one serves one of the
                educational system participants .
              </p>
              <Button1>
                Learn more
                <FaArrowRightLong className="ms-2" />
              </Button1>
            </div>
          </Col>
          <Col lg="4" md="12" className="order-lg-2">
            <div className={styles["image-container"]}>
              <Image
                src={easyAccessImg}
                alt="phone app"
                className={styles["easy-access-image"]}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
