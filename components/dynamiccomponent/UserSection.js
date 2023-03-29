import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./UserCard";

const UserSection = ({ userData }) => {
  console.log(userData);

  return (
    <>
      <Container className="bg-light">
        <Row>
          {userData?.slice(0, 10).map((item, index) => (
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

export default UserSection;
