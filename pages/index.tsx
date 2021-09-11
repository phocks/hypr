import { useState, useEffect } from "react";
import {
  useColorMode,
  Container,
  Button,
  SimpleGrid,
  Box,
  Heading,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import Head from "next/head";

import styles from "../styles/Home.module.scss";

function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Hypr</title>
      </Head>
      <div className={styles.container}>
        <Container paddingTop="6">
          <Flex>
            <Spacer />
            <Box>
              <MoonIcon onClick={toggleColorMode} cursor={"pointer"} />
            </Box>
          </Flex>
          <Box>
            <Heading>Hello world!</Heading>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Home;
