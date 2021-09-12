import { useState, useEffect } from "react";
import { useColorMode, Container, Divider } from "@chakra-ui/react";
import Head from "next/head";

// Components
import Nav from "../components/Nav";
import TextInput from "../components/TextInput";
import LinkList from "../components/LinkList";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.scss";

function Home() {
  const { colorMode } = useColorMode();

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>hypr / a few links</title>
      </Head>
      <Layout>
        <LinkList></LinkList>
      </Layout>
    </>
  );
}

export default Home;
