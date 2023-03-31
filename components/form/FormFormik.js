import React from "react";
import Image from "next/image";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import formImg from "../../public/formImg.jpg";
import { Formik, ErrorMessage, FastField } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string()
    .typeError("That doesn't look like a phone number")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(8, "Must be greater than 8 digits")
    .max(10, "Must be lesser than 10 digits")
    .required("A phone number is required"),
});

const FormFormik = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <Container>
        <div>
          <Row className="mt-5 p-5 bg-light">
            <Col>
              <div>
                <h1 className="text-primary">Lets get this started</h1>
                <p>
                  Join our elearning platform today and unlock over 500+ courses
                  and digital assets ready to download.
                </p>
              </div>
              <div className="mt-5">
                <Formik
                  initialValues={{ name: "", email: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Row>
                        <Col>
                          <Form.Group className="mt-3">
                            <label className="form-label">Name</label>
                            <FastField
                              className="form-control"
                              placeholder="Your Name"
                              type="text"
                              id="name"
                              name="name"
                            />
                            <ErrorMessage name="name" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mt-3">
                            <label className="form-label">Email</label>
                            <FastField
                              className="form-control"
                              placeholder="Your Email"
                              type="email"
                              id="email"
                              name="email"
                            />
                            <ErrorMessage name="email" />
                          </Form.Group>
                        </Col>
                        <Form.Group className="mt-3">
                          <label className="form-label">Phone Number</label>
                          <FastField
                            className="form-control"
                            placeholder="Your Phone Number"
                            type="tel"
                            id="phone"
                            name="phone"
                          />
                          <ErrorMessage name="phone" />
                        </Form.Group>

                        <Button
                          className="mt-4 btn-primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Submit
                        </Button>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
            <Col>
              <div className="position-relative" style={{ height: "500px" }}>
                <Image
                  alt="form image"
                  src={formImg}
                  //   fill
                  objectFit="contain"
                  layout="responsive"
                  height="500"
                  width="600"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FormFormik;
