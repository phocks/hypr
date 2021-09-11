import { useState, useEffect } from "react";
import { useColorMode, Container, Divider } from "@chakra-ui/react";
import Head from "next/head";

// Components
import Nav from "../components/Nav";
import LinkInput from "../components/LinkInput";

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
        <Container>
          <Nav />
          <LinkInput></LinkInput>
          <Divider my={8} />
        </Container>
      </div>
    </>
  );
}

export default Home;
