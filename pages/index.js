import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Mounted!");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Hypr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <h1>A title</h1>
        <p>Some content.</p>
      </div>
    </div>
  );
}
