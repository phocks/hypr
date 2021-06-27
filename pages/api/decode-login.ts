const CryptoJS = require("crypto-js");

export default async (req, res) => {
  if (req.method === "POST") {
    const body = req.body;
    const loginEncrypted = decodeURIComponent(body.login);

    const bytes = CryptoJS.AES.decrypt(
      loginEncrypted,
      process.env.EMAIL_LOGIN_ENCRYPTION_MASTER_KEY
    );

    // decryptedData should have an email and a time property
    try {
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      res.statusCode = 200;
      res.json({ message: `Email logged in ${decryptedData.email}` });
    } catch (e) {
      res.statusCode = 200;
      res.json({ message: "Invalid login detected..." });
    }
  } else {
    res.statusCode = 200;
    res.json({ message: "POST only..." });
  }
};
