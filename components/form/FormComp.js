import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FormComp = () => {
  return (
    <div>
      <Container>
        <Row className="bg-light">
          <form action="" method="">
            <label className="form-label">Students Name</label>
            <Row className="">
              <Col className="">
                <input
                  className="form-control"
                  type="text"
                  id=""
                  name=""
                ></input>
              </Col>
              <Col>
                <input
                  className="form-control"
                  type="text"
                  id=""
                  name=""
                ></input>
              </Col>
              <Col>
                <input
                  className="form-control"
                  type="text"
                  id=""
                  name=""
                ></input>
              </Col>
            </Row>
            <Row>
              <label>Birthdate</label>
              <input></input>
              <label>Gender</label>
              <input></input>
            </Row>
            <Row>
              <label>Address</label>
            </Row>
            <Row>
              <label>Student Email</label>
            </Row>
            <Row>
              <label>Address</label>
            </Row>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default FormComp;
