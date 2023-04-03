import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";

const AlternativeCard = ({ image, title, paragraph, className }) => {
  return (
    <Row className={className}>
      <Col>
        <div className="d-flex justify-content-center">
          <Image alt="laptop" src={image} height={300} width={400} />
        </div>
      </Col>
      <Col >
        <div className="pt-5 d-flex flex-column align-items-start ">
          <h1 className="">{title}</h1>
          <p className="text-muted d-flex">{paragraph}</p>
        </div>
      </Col>
    </Row>
  );
};

export default AlternativeCard;
