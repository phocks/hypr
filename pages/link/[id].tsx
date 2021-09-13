import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import fetcher from "../../lib/fetcher";
import useSWR from "swr";
import { Skeleton } from "@chakra-ui/react";
import Head from "next/head";

const usePage = (id) => {
  const shouldFetch = id !== undefined;
  const { data, error } = useSWR(
    shouldFetch ? `/api/link/${id}` : null,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const Text = ({ id }) => {
  const { data, isLoading, isError } = usePage(id);
  if (isLoading) return <Skeleton height={6} />;
  if (isError) return <div>failed to load</div>;
  if (data.text) return <div>{data.text}</div>;
  return <div>no text</div>;
};

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>hypr</title>
      </Head>
      <Layout>
        <Text id={id} />
      </Layout>
    </>
  );
};

export default Post;
