import "../styles/globals.css";
import "@fontsource/roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
