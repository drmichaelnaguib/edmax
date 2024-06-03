import styles from "./CoursesSection.module.scss";
import Card1 from "@/components/ui/cards/Card1";
import courses from "@/app/assets/images/placeholders/452x302-courses.png";
import secImg from "@/app/assets/images/placeholders/35x35-courses-author.png";
import { Col, Row } from "react-bootstrap";
import SectionHeader from "@/components/shared-components/SectionHeader";

const coursesData = [
  {
    id: Math.random(),
    mainImg: courses,
    title: "Global Marketing",
    price: 500,
    chaptersNo: 10,
    owner: "Mohammed Salem",
    ownerAvatar: secImg,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    targetAudience: "3rd year, faculty of commerce",
    category: "Business Management",
    videoSrc: "/edmax-video.mp4",
  },
  {
    id: Math.random(),
    mainImg: courses,
    title: "Global Marketing",
    price: 500,
    chaptersNo: 10,
    owner: "Mohammed Salem",
    ownerAvatar: secImg,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    targetAudience: "3rd year, faculty of commerce",
    category: "Business Management",
    videoSrc: "/edmax-video.mp4",
  },
  {
    id: Math.random(),
    mainImg: courses,
    title: "Global Marketing",
    price: 500,
    chaptersNo: 10,
    owner: "Mohammed Salem",
    ownerAvatar: secImg,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    targetAudience: "3rd year, faculty of commerce",
    category: "Business Management",
    videoSrc: "/edmax-video.mp4",
  },
];

export default function CoursesSection() {
  return (
    <>
      <section
        className={`${styles["courses-section"]} section-main-container`}
      >
        <SectionHeader sectionTitle="Available Courses" buttonText="See more" />

        <Row>
          {coursesData.map((courseObj) => (
            <Col key={courseObj.id}>
              <Card1
                mainImg={courseObj.mainImg}
                button1Content={"Add To Cart"}
                button2Content={"View details"}
                cardTitle={courseObj.title}
                cardMainInfo={`${courseObj.price}LE`}
                cardExtraInfo={`${courseObj.chaptersNo} chapters`}
                ownerName={courseObj.owner}
                cardContent={courseObj.description}
                mainImageText1={courseObj.targetAudience}
                mainImageText2={courseObj.category}
                secImg={courseObj.ownerAvatar}
                videoSrc={courseObj.videoSrc}
              />
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
}
