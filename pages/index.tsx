import Head from "next/head";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import useUser from "../lib/useUser";

// CSS Modules
import styles from "../styles/Home.module.scss";

// Local components
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import LoginButton from "../components/LoginButton";

const Home = (props) => {
  const { user } = useUser({ redirectTo: "/login" });

  // const postFetcher = (url) =>
  //   fetch(url, {
  //     body: JSON.stringify({
  //       login: router.query.login,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //   }).then((r) => r.json());

  // const shouldFetch = typeof router.query.login !== "undefined";

  // const { data, error } = useSWR(
  //   shouldFetch ? "/api/decode-login" : null,
  //   postFetcher
  // );

  // const { data, error } = useSWR("/api/user", postFetcher);

  // if (data) console.log(data);

  const onMount = async () => {
    console.log("Mounted...");
  };

  const onUser = async () => {
    console.log(user);
  };

  useEffect(() => {
    onMount();
  }, []);

  useEffect(() => {
    if (typeof user !== "undefined") onUser();
  }, [user]);

  return (
    <Layout>
      <Head>
        <title>Hypr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello!
      {/* <LoginButton /> */}
    </Layout>
  );
};

export default Home;
