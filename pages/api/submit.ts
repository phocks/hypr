import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const page = async (req, res) => {
  console.log("body?", req.body);
  const { text, link } = req.body;

  if (req.method === "GET") {
    res.status(200).json({ message: "GET only..." });
    return;
  }

  if (req.method === "POST") {
    const { data, error } = await supabase.from("links").insert([
      {
        text,
        link,
      },
    ]);

    if (error) {
      console.error(error);
      res.status(500).send({ error });
      return;
    }

    console.log("data:", data);

    res.status(200).json(data);
  }
};
export default page;
