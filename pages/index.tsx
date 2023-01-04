import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { getData, TestResponseData } from "./api/hello";
import { currentUrl } from "../config";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props: { data: TestResponseData }) {
  console.log(props);
  return (
    <>
      <main className={styles.main}>
        <h1>Something should be here: {props.data.name}. Testss</h1>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  console.log(currentUrl);

  const data = await getData();

  return {
    props: {
      data,
    },
  };
};
