// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const CryptoJS = require("crypto-js");
const ses = require("node-ses");
const client = ses.createClient({
  key: process.env.SES_KEY,
  secret: process.env.SES_SECRET,
  amazon: "https://email.us-east-2.amazonaws.com",
});

// Convert callback to promise for simplicity
const sendEmailPromise = (options) => {
  return new Promise((resolve, reject) => {
    client.sendEmail(options, (err, emailData, emailRes) => {
      if (err) return reject(err);
      resolve(emailData);
    });
  });
};

// Decrypt
// var bytes = CryptoJS.AES.decrypt(
//   ciphertext,
//   process.env.EMAIL_LOGIN_ENCRYPTION_MASTER_KEY
// );

// const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

export default async (req, res) => {
  if (req.method === "POST") {
    const body = req.body;
    const email = req.body.email;

    console.log(body);

    const data = {
      email: email,
      time: Math.floor(Date.now() / 1000),
    };

    // Encrypt
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      process.env.EMAIL_LOGIN_ENCRYPTION_MASTER_KEY
    ).toString();

    const uri = `https://hypr.gq/?x=${encryptedData}`;
    const encodedUri = encodeURI(uri);

    await sendEmailPromise({
      to: email,
      from: '"Hypr Support" <info@hypr.gq>',
      subject: `Your login code for ${email}`,
      message: `<p>Someone (hopefully you) has requested a login code.<p><p><a href="${encodedUri}">Click to login</a></p>`,
      altText: encodedUri,
    });

    res.statusCode = 200;
    res.json({ message: "Email has been sent..." });
  } else {
    res.statusCode = 200;
    res.json({ message: "POST only..." });
  }
};
