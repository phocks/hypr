import to from "await-to-js";

const fetcher = async (url) => {
  const [err, res] = await to(fetch(url));
  // Doesn't actually catch remote errors
  if (err) {
    console.error(err);
    return;
  }

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("Something happened...");
    console.error(error);
    throw error;
  }

  return res.json();
};

export default fetcher;
