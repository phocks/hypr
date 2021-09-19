import "../styles/globals.scss";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/inconsolata/400.css";
import "@fontsource/inconsolata/700.css";
import theme from "../lib/theme";

const config: ThemeConfig = extendTheme({ ...theme });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={config}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
