import React, { useState } from "react";
import useUser from "../lib/useUser";
import Layout from "../components/Layout";
import fetchJson from "../lib/fetchJson";
import { Button } from "@material-ui/core";

const Login = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function logUserIn(event) {
    event.preventDefault();

    const body = {
      username: "phocks",
    };

    try {
      mutateUser(
        await fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      );
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

  return (
    <Layout>
      {/* <form onSubmit={handleSubmit}><input defaultValue="Submit"></input></form> */}
      <Button onClick={logUserIn} variant="outlined">
        Log in
      </Button>

      <style jsx>{`
         {
          /* .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        } */
        }
      `}</style>
    </Layout>
  );
};

export default Login;
