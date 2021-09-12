import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const page = async (req, res) => {
  const { pid } = req.query;

  if (!pid) {
    res.status(400).json({
      error: "No pid provided",
    });
    return;
  }

  const { data, error } = await supabase
    .from("links")
    .select()
    .eq("id", pid)
    .single();

  if (error) {
    res.status(500).send({ error: "Something failed!" });
    return;
  }

  res.status(200).json(data);
};
export default page;
