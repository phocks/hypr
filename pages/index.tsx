import { useState, useEffect } from "react";
import {
  useColorMode,
  Container,
  Divider,
  Box,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

// Components
import Nav from "../components/Nav";
import TextInput from "../components/TextInput";
import LinkList from "../components/LinkList";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.scss";

function Home() {
  const { colorMode } = useColorMode();
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>hypr / a few links</title>
      </Head>
      <Layout>
        <Box pb="6">
          <Text fontSize="lg">
            A simple experimental website where you can read someone's writing
            and then add your own.
          </Text>
        </Box>
        <Button onClick={() => router.push("/link/3")}>Go &rarr;</Button>
      </Layout>
    </>
  );
}

export default Home;
