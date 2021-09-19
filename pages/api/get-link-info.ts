import cheerio from "cheerio";
import axios from "axios";

const links = async (req, res) => {
  const { link } = req.query;

  console.log(link);

  if (!link) {
    res.status(500).json({});
    return;
  }

  async function fetchHTML(url) {
    const { data } = await axios.get(url);
    console.log(data);
    return cheerio.load(data);
  }
  
  const $ = await fetchHTML(link);
  const title = $("title").text();
  res.status(200).json({ title: title });
};

export default links;
