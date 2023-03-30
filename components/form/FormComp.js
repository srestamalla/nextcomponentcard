import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const initialState = [
  {
    fName: "",
    mName: "",
    lName: "",
    bDate: "",
  },
];

const FormComp = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <div className="bg-white">
          <Row className="bg-light">
            <h2>Student Registration Form</h2>
          </Row>
          <Row className="bg-light">
            <form onSubmit={handleSubmit} action="" method="">
              <label className="form-label">Students Name</label>
              <Row className="">
                <Col className="">
                  <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    id=""
                    name="fName"
                  ></input>
                  <div id="" class="form-text">
                    First Name
                  </div>
                </Col>
                <Col>
                  <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    id=""
                    name="mName"
                  ></input>
                  <div id="" class="form-text">
                    Middle Name
                  </div>
                </Col>
                <Col>
                  <input
                    className="form-control"
                    type="text"
                    id=""
                    name=""
                  ></input>
                  <div id="" class="form-text">
                    Last Name
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="form-label">Birthdate</label>
                  <input
                    name="bDate"
                    onChange={handleChange}
                    className="form-control"
                    type="date"
                  ></input>
                </Col>
                <Col>
                  <label className="form-label">Gender</label>
                  <select className="form-select">
                    <option selected disabled>
                      Open this select menu
                    </option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Others</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <label className="form-label">Address</label>
                <Row>
                  <input
                    name="address1"
                    onChange={handleChange}
                    className="form-control"
                  ></input>
                  <div id="" class="form-text">
                    Street Address
                  </div>
                </Row>

                <Row>
                  <input
                    name="address2"
                    onChange={handleChange}
                    className="form-control"
                  ></input>
                  <div id="" class="form-text">
                    Street Address Line 2
                  </div>
                </Row>

                <Row>
                  <Col>
                    <input
                      name="cityAddress"
                      onChange={handleChange}
                      className="form-control"
                    ></input>
                    <div id="" class="form-text">
                      City
                    </div>
                  </Col>
                  <Col>
                    <input
                      name="streetAddress"
                      onChange={handleChange}
                      className="form-control"
                    ></input>
                    <div id="" class="form-text">
                      Street/Province
                    </div>
                  </Col>
                </Row>
                <Row>
                  <input
                    name="postalCode"
                    onChange={handleChange}
                    className="form-control"
                  ></input>
                  <div id="" class="form-text">
                    Postal / Zip Code
                  </div>
                </Row>
              </Row>
              <Row>
                <Col>
                  <label className="form-label">Student Email</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="ex: myname@example.com"
                    type="email"
                  ></input>
                  <div id="" class="form-text">
                    example@example.com
                  </div>
                </Col>
                <Col>
                  <label className="form-label">Mobile Number</label>
                  <input
                    name="mnum"
                    onChange={handleChange}
                    className="form-control"
                    type="tel"
                  ></input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="form-label">Phone Number</label>
                  <input
                    name="pnum"
                    onChange={handleChange}
                    className="form-control"
                    type="tel"
                  ></input>
                </Col>
                <Col>
                  <label className="form-label">Work Number</label>
                  <input
                    name="wnum"
                    onChange={handleChange}
                    className="form-control"
                    type="tel"
                  ></input>
                </Col>
              </Row>
              <Row>
                <label className="form-label">Company</label>
                <input
                  name="company"
                  onChange={handleChange}
                  className="form-control"
                ></input>
              </Row>
              <Row>
                <label className="form-label">Courses</label>
                <select className="form-select">
                  <option selected disabled>
                    Plese Select
                  </option>
                  <option value="1">Windows 8</option>
                  <option value="2">Introduction to Linux</option>
                  <option value="3">English 101</option>
                  <option value="4">English 102</option>
                  <option value="5">History 101</option>
                  <option value="6">History 102</option>
                </select>
              </Row>
              <Row>
                <label className="form-label">Additional Comments</label>
                <input
                  name="comment"
                  onChange={handleChange}
                  className="form-control"
                ></input>
              </Row>
              <Row>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Row>
            </form>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FormComp;
