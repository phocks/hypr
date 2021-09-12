const fetcher = async (...args: [string, any]) => {
  const res = await fetch(...args);
  return res.json();
};

export default fetcher;
