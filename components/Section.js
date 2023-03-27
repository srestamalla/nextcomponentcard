import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from ".//Card";
import Title from ".//Title";

const Section = () => {
  const data = [
    {
      id: 1,
      title: "Custom Website Design and Development",
      para: "Experience the epitomod our website creation services with a state-of-the-art tech stack expertly crafted",
    },
    {
      id: 2,
      title: "Custom  Design and Development",
      para: "Experience the epitomod our website creation services with a state-of-the-art tech stack expertly crafted",
    },
    {
      id: 3,
      title: "Custom Website  and Development",
      para: "Experience the epitomod our website creation services with a state-of-the-art tech stack expertly crafted",
    },
    {
      id: 4,
      title: "Custom Website Design and ",
      para: "Experience the epitomod our website creation services with a state-of-the-art tech stack expertly crafted",
    },
  ];

  return (
    <>
      <Container className="bg-light">
        <Row>
          <Title />
        </Row>
        <Row>
          {data?.map((item, key) => (
            <Col
              className="mt-3 mb-3 h-100"
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={4}
              key={data.id}
            >
              <Card id={item.id} para={item.para} title={item.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Section;
