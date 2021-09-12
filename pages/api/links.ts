import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const links = async (req, res) => {
  const { data, error } = await supabase
    .from("links")
    .select()
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) {
    res.status(500).send({ error: "Something failed!" });
    return;
  }

  res.status(200).json(data);
};
export default links;
