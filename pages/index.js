import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

export default function Home() {
  const [message, setMessage] = useState("");

  async function init() {
    const data = await fetch("/api/hello")
      .then((response) => response.json())
      .catch((e) => console.error(e));

    setMessage(data.name);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Hypr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}
