export default function handler(req, res) {
  const { pid } = req.query;
  res.status(200).json({ text: "Page text" });
}
