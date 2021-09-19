import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: "Inconsolata",
    body: "Inconsolata",
  },
  // brand: {
  //   900: "#1a365d",
  //   800: "#153e75",
  //   700: "#2a69ac",
  // },
};

const theme = extendTheme({ ...config });
export default theme;
