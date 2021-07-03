import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>With Iron Session</title>
    </Head>

    <main>
      <div className="container">{children}</div>
    </main>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
