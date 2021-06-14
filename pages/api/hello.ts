// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const ses = require("node-ses");
const client = ses.createClient({
  key: process.env.SES_KEY,
  secret: process.env.SES_SECRET,
  amazon: "https://email.us-east-2.amazonaws.com",
});

console.log(process.env.DB_HOST);

export default (req, res) => {
  client.sendEmail(
    {
      to: "phocks@gmail.com",
      from: '"Hypr Support" <info@hypr.gq>',
      subject: "Your code",
      message: "Hello there.",
      altText: `Your OTP is: 7463`,
    },
     (err, emailData, emailRes) => {
      console.log(err);

      // TODO: Make this a Promise
      res.statusCode = 200;
      res.json({ name: "Joshua Byrd" });
    }
  );
};
