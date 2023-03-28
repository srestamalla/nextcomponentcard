import Section from "/components/Section";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";

export default function Home({ res }) {
  console.log(res);
  return (
    <>
    <Section userData = {res} />
    </>
  );
}

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
