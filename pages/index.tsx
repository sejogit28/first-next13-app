import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { TestResponseData } from "./api/hello";
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
  let data: TestResponseData = { name: "" };

  try {
    data = await fetch(`${currentUrl}/api/hello`).then((res) => res.json());
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data,
    },
  };
};
