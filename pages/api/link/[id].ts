import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const page = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    res.status(400).json({
      error: "No pid provided...",
    });
    return;
  }

  const { data, error } = await supabase
    .from("links")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    res.status(500).send({ error });
    return;
  }

  res.status(200).json(data);
};
export default page;
