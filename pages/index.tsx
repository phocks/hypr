import { useState, useEffect } from "react";
import { useColorMode, Container } from "@chakra-ui/react";
import Head from "next/head";

// Components
import Nav from "../components/Nav";

import styles from "../styles/Home.module.scss";

function Home() {
  const { colorMode } = useColorMode();

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>hypr / a few links</title>
      </Head>
      <div className={styles.container}>
        <Container paddingTop="5">
          <Nav />
        </Container>
      </div>
    </>
  );
}

export default Home;
