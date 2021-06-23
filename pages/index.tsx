import Head from "next/head";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import useSWR from "swr";

import styles from "../styles/Home.module.css";

function Home() {
  const [isLoggedIn, setIsLockedIn] = useState(false);

  const { data, error } = useSWR("/api/hello", fetch);

  console.log(data)

  return (
    <div className="flex-container">
      <Head>
        <title>Hypr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!data && <div>Loading...</div>}
      {data && <><p>{data.message}</p><LoginForm /></>}
    </div>
  );
}

export default Home;
