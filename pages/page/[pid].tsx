import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import fetcher from "../../lib/fetcher";
import useSWR from "swr";
import { Skeleton } from "@chakra-ui/react";
import Head from "next/head";

const usePage = (pid) => {
  const shouldFetch = pid !== undefined;
  const { data, error } = useSWR(
    shouldFetch ? `/api/page/${pid}` : null,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const Text = ({ pid }) => {
  const { data, isLoading, isError } = usePage(pid);
  if (isLoading) return <Skeleton height={6} />;
  if (isError) return <div>failed to load</div>;
  if (data.text) return <div>{data.text}</div>;
  return <div>no text</div>;
};

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>Hypr</title>
      </Head>
      <Layout>
        <Text pid={pid} />
      </Layout>
    </>
  );
};

export default Post;
