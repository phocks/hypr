const CryptoJS = require("crypto-js");

export default async (req, res) => {
  if (req.method === "POST") {
    const body = req.body;
    const loginEncoded = body.login;

    console.log(body);

    const bytes = CryptoJS.AES.decrypt(
      loginEncoded,
      process.env.EMAIL_LOGIN_ENCRYPTION_MASTER_KEY
    );

    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    console.log(decryptedData);

    res.statusCode = 200;
    res.json({ message: "Done..." });
  } else {
    res.statusCode = 200;
    res.json({ message: "POST only..." });
  }
};
