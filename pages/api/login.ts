// import fetchJson from "../../lib/fetchJson";
import withSession from "../../lib/session";

export default withSession(async (req, res) => {
  const { username } = await req.body;
  console.log(username)
  // const url = `https://api.github.com/users/${username}`;

  try {
    // we check that the user exists on GitHub and store some data in session
    // const { login, avatar_url: avatarUrl } = await fetchJson(url);
    const user = { isLoggedIn: true };
    req.session.set("user", user);
    await req.session.save();
    res.json(user);
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});

// import { withIronSession } from "next-iron-session";

// async function handler(req, res) {
//   console.log(req.body);
//   const { email } = await req.body;
//   // get user from database then:
//   req.session.set("user", {
//     email: email,
//   });
//   await req.session.save();
//   res.send({ message: "Logged in" });
// }

// export default withIronSession(handler, {
//   password: process.env.IRON_SESSION_KEY,
//   cookieName: "hypr_cookie",
//   // if your localhost is served on http:// then disable the secure flag
//   cookieOptions: {
//     secure: process.env.NODE_ENV === "production",
//   },
// });
