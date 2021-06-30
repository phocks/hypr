import { withIronSession } from "next-iron-session";

async function handler(req, res) {
  console.log(req.body)
  const { email } = await req.body;
  // get user from database then:
  req.session.set("user", {
    email: email,
  });
  await req.session.save();
  res.send({ message: "Logged in" });
}

export default withIronSession(handler, {
  password: process.env.IRON_SESSION_KEY,
  cookieName: "hypr_cookie",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
