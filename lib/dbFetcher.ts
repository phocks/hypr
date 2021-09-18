import to from "await-to-js";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const dbFetcher = async (db) => {
  const { data, error } = await supabase
    .from(db)
    .select()
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) throw error;

  return data;
};

export default dbFetcher;
