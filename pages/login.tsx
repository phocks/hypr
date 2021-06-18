import Head from "next/head";
import styles from "../styles/Login.module.css";
import { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";


export default function Login() {
  const [email, setEmail] = useState("");

  async function init() {
    // const data = await fetch("/api/hello")
    //   .then((response) => response.json())
    //   .catch((e) => console.error(e));
    // console.log(data);
  }

  useEffect(() => {
    init();
  }, []);

  async function handleChange(event) {
    setEmail(event.target.value);
  }

  const handleSubmit = async (event) => {
    // Stop page from reloading target
    event.preventDefault();

    const res = await fetch("/api/send-login-email", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    console.log(result);
  };

  return (
    <div className="flex-container">
      <Head>
        <title>Hypr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <form onSubmit={handleSubmit}>
          <TextField onChange={handleChange} type="email" label="email" />
        </form>
      </div>

      {/* <Login /> */}

      {/* <Button variant="contained" color="primary">
        Hello World
      </Button> */}
    </div>
  );
}
