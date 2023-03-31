import StaticSection from "/components/staticcomponent/StaticSection";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import FormComp from "@/components/form/FormComp";
import FormFormik from "@/components/form/FormFormik";

export default function Home() {
  return (
    <>
      <StaticSection />
      <FormComp />
    </>
  );
}
