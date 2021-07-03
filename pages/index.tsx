import Head from "next/head";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

// CSS Modules
import styles from "../styles/Home.module.scss";

// Local components
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import LoginButton from "../components/LoginButton";

const Home = (props) => {
  // const [isLoggedIn, setIsLockedIn] = useState(false);
  const router = useRouter();

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


    console.log("Mounted...")
  };

  useEffect(() => {
    onMount();
  }, []);

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
