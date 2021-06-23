import Head from "next/head";
import { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import useSWR from "swr";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

const Home = (props) => {
  const [isLoggedIn, setIsLockedIn] = useState(false);
  const router = useRouter();

  // const fetcher = (url) => fetch(url).then((r) => r.json());
  // const { data, error } = useSWR("/api/hello", fetcher);

  // This doesn't work because it conditionally tries to add the hook
  // Use conditional swr calling instead.
  console.log(router.query.login);
  if (typeof router.query.login !== "undefined") {
    const postFetch = (url) =>
      fetch(url, {
        body: JSON.stringify({
          login: router.query.login,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then((r) => r.json());

    const { data, error } = useSWR("/api/decode-login", postFetch);

    console.log(data);
  }

  useEffect(() => {}, [router]);

  return (
    <div className="flex-container">
      <Head>
        <title>Hypr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginForm />
    </div>
  );
};

export default Home;
