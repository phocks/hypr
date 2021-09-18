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
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import dbFetcher from "../lib/dbFetcher";

// Components
import Nav from "../components/Nav";
import TextInput from "../components/TextInput";
import LinkList from "../components/LinkList";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.scss";

const useHyperlinks = () => {
  const { data, error } = useSWR(`hyperlinks`, dbFetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const Home = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const { data, isError, isLoading } = useHyperlinks();

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>hypr / a few links</title>
      </Head>
      <Layout>
        <Box pb="6">
          <Text fontSize="large">A few links.</Text>
        </Box>
        {data?.map((link, index) => (
          <div key={index}>
            <a href={link.hyperlink}> {link.hyperlink}</a>
          </div>
        ))}
      </Layout>
    </>
  );
};

export default Home;
