// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ses from "node-ses";

const client = ses.createClient({
  key: process.env.SES_KEY,
  secret: process.env.SES_SECRET,
  amazon: "https://email.us-east-2.amazonaws.com",
});

export default (req, res) => {
  client.sendEmail(
    {
      to: "phocks@gmail.com",
      from: '"Hypr Support" <info@hypr.gq>',
      subject: "Your code",
      message: `Your OTP is: 7463`,
      // altText: `Your OTP is: 7463`,
    },
    function (err, data, res) {
      console.log(err);
    }
  );

  res.statusCode = 200;
  res.json({ name: "Joshua Byrd" });
};
