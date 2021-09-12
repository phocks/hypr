import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import fetcher from "../../lib/fetcher";
import useSWR from "swr";
import { Skeleton } from "@chakra-ui/react";

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

  return data.text;
};

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  // const { data, isLoading, isError } = usePage(pid);
  // if (isLoading) return <Skeleton height={6} />;
  // if (isError) return <div>failed to load</div>;

  return (
    <Layout>
      <Text pid={pid} />
    </Layout>
  );
};

export default Post;
