import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex-container">
      <Head>
        <title>Hypr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hypr</h1>
    </div>
  );
}
