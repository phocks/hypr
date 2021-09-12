import to from "await-to-js";

const fetcher = async (...args: [string, any]) => {
  const [err, res] = await to(fetch(...args));

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }

  return res.json();
};

export default fetcher;
