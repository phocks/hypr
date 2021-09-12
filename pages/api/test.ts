const test = async (req, res) => {
  await new Promise(r => setTimeout(r, 1000));
  res.status(200).json({ text: "Josh" });
};
export default test;
