import withSession from "../../lib/session";

export default withSession(async (req, res) => {
  const user = req.session.get("user");
  console.log("User", user)

  if (user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      isLoggedIn: true,
      ...user,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
});

// import { withIronSession } from "next-iron-session";

// function handler(req, res, session) {
//   const user = req.session.get("user");
//   res.send({ user });
// }

// export default withIronSession(handler, {
//   password: process.env.IRON_SESSION_KEY,
//   cookieName: "hypr_cookie",
//   // if your localhost is served on http:// then disable the secure flag
//   cookieOptions: {
//     secure: process.env.NODE_ENV === "production",
//   },
// });
