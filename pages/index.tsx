import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { TestResponseData } from "./api/hello";
import { currentUrl } from "../config";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props: { data: TestResponseData }) {
  return (
    <>
      <main className={styles.main}>
        <h1>Something should be here: {props.data.name}. Test Test</h1>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  console.log(currentUrl);
  let data: TestResponseData = { name: "" };
  let serverResponse: Response = new Response();

  try {
    serverResponse = await fetch(`${currentUrl}/api/hello`);
    data = await serverResponse.json();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data,
    },
  };
};
