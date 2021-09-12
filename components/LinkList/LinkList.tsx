import useSWR from "swr";
import { Skeleton } from "@chakra-ui/react";

const fetcher = async (...args: [string, any]) => {
  const res = await fetch(...args);
  return res.json();
};

const useLinks = () => {
  const { data, error } = useSWR("/api/test", fetcher);

  return {
    links: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const LinkList = ({ ...props }) => {
  const { links, isLoading, isError } = useLinks();
  if (isLoading) return <Skeleton height={6} />;
  if (isError) return <div>failed to load</div>;

  return <div>hello! {links.text}</div>;
};

export default LinkList;
