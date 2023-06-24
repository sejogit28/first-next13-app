import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { getData, TestResponseData } from "./api/hello";
import { currentUrl } from "../config";
const inter = Inter({ subsets: ["latin"] });
interface WeatherForecast {
  date: Date;
  temperatureC: Number;
  temperatureF: Number;
  summary: String;
}

export default function Home(props: { data: TestResponseData }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            {props.data.name}...hey! Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  //const data = await getData();

  const data = await getData();
  //if the call to getData above is not awaited an error will be thrown.
  ///getData returns a promise if it isnt awaited. Promises aren't serializable

  //It's fine to call an external api from here using fetch probably
  ///If that's the case, will need to do more research into the actual purpose of Api Routes...
  ///Seems to be safe to make this call from the client side but not from getServerSideProps
  ////API routes and getServerSide props both run on the server so this will at best be a double request
  //With a combination of getServerSide props and API routes is it possible to keep all data requests...
  ///...on the server?
  return {
    props: {
      data,
    },
  };
};
