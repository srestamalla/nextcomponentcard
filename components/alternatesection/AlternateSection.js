import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AlternativeCard from "./AlternativeCard";

const AlternateSection = () => {
  const datas = [
    {
      id: 1,
      image: "/Laptop.png",
      title: "Our Mission",
      paragraph:
        "Our goal is to provide exceptional custom software development services with a never-stopinnovating mission & pave the way forthe digital revolution.",
    },
    {
      id: 2,
      image: "/Laptop.png",
      title: "Our Vision",
      paragraph:
        "Our vision for custom software development is to relentlessly deliver game-changingsoftware solutions that help our clients to dominate their industry.",
    },
  ];
  return (
    <section>
      <Container>
        {datas?.map((data, index) => (
          <div key={index}>
            {index % 2 ? (
              <AlternativeCard
                className="mt-5 d-flex flex-row-reverse"
                image={data?.image}
                title={data.title}
                paragraph={data?.paragraph}
              />
            ) : (
              <AlternativeCard
                className="mt-5 "
                image={data?.image}
                title={data.title}
                paragraph={data?.paragraph}
              />
            )}
          </div>
        ))}
      </Container>
    </section>
  );
};

export default AlternateSection;
