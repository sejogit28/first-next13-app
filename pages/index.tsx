import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Data } from "./api/hello";
import { currentUrl } from "../config";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props: { data: Data }) {
  return (
    <>
      <main className={styles.main}>
        <h1>Test</h1>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  console.log(currentUrl);
  const serverResponse = await fetch(`${currentUrl}/api/hello`);
  const data = await serverResponse.json();

  return {
    props: {
      data,
    },
  };
};
