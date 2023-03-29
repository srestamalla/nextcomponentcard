import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./StaticCard";
import Title from "./StaticTitle";

const Section = () => {
  //data for cards
  const cardData = [
    {
      id: 1,
      title: "Custom website design and development",
      para: "Experience the epitomod our website creation services with a state-of-the-art tech stack expertly crafted to elevate your online presence and leave a lasting impact on your audience",
    },
    {
      id: 2,
      title: "Content management system (CMS) integration",
      para: "Streamline your website accessibility with user -friendly CMS, incorporating intutive tools and features for editing, publishing and ogranizing website content",
    },
    {
      id: 3,
      title: "Website content creation and Search engine optimization (SEO)",
      para: "Harnessing the power of compelling content and website optimization strategieg to drive a deluge of organic traffic",
    },
    {
      id: 4,
      title: "Website analytics and tracking",
      para: "Gain valueable insights and adopt data-driven decisions to enhance your website's performance with our web analytics and tracking service",
    },
    {
      id: 5,
      title: "Website hosting and maintenance",
      para: "Ensure your website's smooth operation and longevity woth our website design and hosting service including regular maintainance down the line. This includes regular updates and backups whit website testing and quality assurance ofr website security.",
    },
  ];

  //data for title
  const titleData = [
    {
      id: 1,
      title: "Why choose our custom software",
      secondaryTitle: "Development company?",
      paragraph:
        "Advanced into uncharted territories of digital success with our expert software development firm!",
    },
  ];

  return (
    <>
      <Container className="bg-light">
        <Row className="mt-5 p-4">
          {titleData?.map((title, index) => (
            <Title
              key={index}
              title={title?.title}
              secondaryTitle={title?.secondaryTitle}
              paragraph={title?.paragraph}
            />
          ))}
        </Row>
        <Row>
          {cardData?.map((item, index) => (
            <Col className="mt-3 mb-3 h-100" md={12} lg={6} key={index}>
              <Card id={item?.id} para={item?.para} title={item?.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Section;
