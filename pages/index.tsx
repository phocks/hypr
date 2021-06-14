import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Login from "../components/Login";

export default function Home() {
  const [email, setEmail] = useState("");

  async function init() {
    const data = await fetch("/api/hello")
      .then((response) => response.json())
      .catch((e) => console.error(e));

    console.log(data);
  }

  useEffect(() => {
    init();
  }, []);

  async function handleChange(event) {
    setEmail(event.target.value);
  }

  async function handleSubmit(event) {
    console.log(email);
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Hypr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>Hello there!</h1> */}

      <form onSubmit={handleSubmit}>
        <TextField onChange={handleChange} type="email" label="email" />
      </form>

      {/* <Login /> */}

      {/* <Button variant="contained" color="primary">
        Hello World
      </Button> */}
    </div>
  );
}
