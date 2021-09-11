import "../styles/globals.scss";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";

const colors = {
  initialColorMode: "light",
  useSystemColorMode: false,
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const config: ThemeConfig = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={config}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
