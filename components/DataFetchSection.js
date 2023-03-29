import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import Title from "./Title";

const DataFetchSection = ({ userData }) => {
  console.log(userData);
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
          {userData?.slice(0, 6).map((item, index) => (
            <Col className="mt-3 mb-3 h-100" md={12} lg={6} key={index}>
              <Card
                id={item?.id}
                para={item?.type}
                title={item?.login}
                image={item?.avatar_url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DataFetchSection;
