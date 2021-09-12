import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import fetcher from "../../lib/fetcher";
import useSWR from "swr";
import { Skeleton } from "@chakra-ui/react";

const usePage = (pid) => {
  const { data, error } = useSWR(`/api/page/${pid}`, fetcher);

  console.log(data);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  const { data, isLoading, isError } = usePage(pid);
  if (isLoading) return <Skeleton height={6} />;
  if (isError) return <div>failed to load</div>;

  return <Layout>hello: {data.text}</Layout>;
};

export default Post;
