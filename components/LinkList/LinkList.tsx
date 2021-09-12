import useSWR from "swr";
import { Skeleton } from "@chakra-ui/react";

const fetcher = async (...args: [string, any]) => {
  const res = await fetch(...args);
  return res.json();
};

const LinkList = ({ ...props }) => {
  const { data, error } = useSWR("/api/test", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <Skeleton height={6} />;

  return <div>hello! {data.text}</div>;
};

export default LinkList;
