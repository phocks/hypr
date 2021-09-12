import useSWR from "swr";
import { Skeleton } from "@chakra-ui/react";
import fetcher from "../../lib/fetcher";

const useLinks = () => {
  const { data, error } = useSWR("/api/links", fetcher);

  console.log(data);

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

  return links.map((link, index) => <div key={index}>{link.text}</div>);
};

export default LinkList;
