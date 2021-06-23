export default async (req, res) => {
  console.log("Test")
  res.statusCode = 200;
  res.json({ message: "Hello world!" });
};
