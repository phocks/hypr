import React from "react";
import useUser from "../lib/useUser";
// import useEvents from "../lib/useEvents";
import Layout from "../components/Layout";

const SgProfile = () => {
  const { user } = useUser({ redirectTo: "/login" });
  // const { events, loadingEvents } = useEvents(user);

  if (!user?.isLoggedIn) {
    return <Layout>loading...</Layout>;
  }

  return (
    <Layout>
      User...
    </Layout>
  );
};

function githubUrl(login) {
  return `https://api.github.com/users/${login}`;
}

export default SgProfile;
