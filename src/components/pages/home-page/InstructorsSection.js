import styles from "./InstructorsSection.module.scss";
import mainImg from "@/app/assets/images/placeholders/250x250-instructors.png";
import SectionHeader from "@/components/shared-components/SectionHeader";
import { Col, Row } from "react-bootstrap";
import Card2 from "@/components/ui/cards/Card2";

const instructors = [
  {
    id: Math.random(),
    mainImg: mainImg,
    name: "Mohammed Salem ",
    category: "Marketing",
  },
  {
    id: Math.random(),
    mainImg: mainImg,
    name: "Mohammed Salem ",
    category: "Marketing",
  },
  {
    id: Math.random(),
    mainImg: mainImg,
    name: "Mohammed Salem ",
    category: "Marketing",
  },
];

export default function InstructorsSection() {
  return (
    <section
      className={`${styles["instructor-section"]} section-main-container`}
    >
      <SectionHeader sectionTitle="Our Instructors" buttonText="See more" />
      <Row>
        {instructors.map((inst) => (
          <Col key={inst.id} className="mb-5">
            <Card2
              mainImg={inst.mainImg}
              cardTitle={inst.name}
              cardSubtitle={inst.category}
              button3Content={"See more "}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}
