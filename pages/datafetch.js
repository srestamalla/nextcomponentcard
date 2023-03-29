import React from "react";
import Section from "/components/Section";

const DataFetch = ({ res }) => {
  console.log(res);
  return (
    <>
      <Section userData={res} />
    </>
  );
};

export default DataFetch;

export const getStaticProps = async () => {
  const { API_KEY } = process.env;
  const users = await fetch(API_KEY);
  const res = await users.json();
  return {
    props: {
      res,
    },
  };
};
