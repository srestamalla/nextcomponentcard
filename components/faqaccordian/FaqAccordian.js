import React from "react";
import { Accordion } from "react-bootstrap";

const faqdata = [
  {
    id: 1,
    question: "Do I need technical knowledge to use your software product?",
    answer:
      "No, our software product is designed to be user-friendly and does not require any technical knowledge or coding skills to use. We also offer customer support and training resources to help you get started and answer any questions you may have.",
  },

  {
    id: 2,
    question: "How secure is your platform?",
    answer:
      "No, our software product is designed to be user-friendly and does not require any technical knowledge or coding skills to use. We also offer customer support and training resources to help you get started and answer any questions you may have.",
  },
];

const FaqAccordian = () => {
  return faqdata?.map((data, index) => (
    <Accordion key={index} >
      <Accordion.Item eventKey="0">
        <Accordion.Header>{data?.question}</Accordion.Header>
        <Accordion.Body>{data?.answer}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  ));
};

export default FaqAccordian;
