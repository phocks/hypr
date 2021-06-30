import { withIronSession } from "next-iron-session";

export default withIronSession(
  async (req, res) => {
    // get user from database then:
    req.session.set("user", {
      id: 230,
      admin: true,
    });
    await req.session.save();
    res.send("Logged in");
  },
  {
    password: process.env.IRON_SESSION_KEY,
    cookieName: "hypr_cookie",
    // if your localhost is served on http:// then disable the secure flag
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
