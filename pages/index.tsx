import Head from "next/head";
import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Formik } from "formik";

import styles from "../styles/Home.module.css";

function Home() {
  const [isLoggedIn, setIsLockedIn] = useState(false);

  const handleLoginSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
  };

  return (
    <div className="flex-container">
      <Head>
        <title>Hypr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          ...theRest
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              type="email"
              label="login email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Home;
