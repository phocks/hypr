import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: "Inconsolata",
    body: "Inconsolata",
  },
};

const theme = extendTheme({ ...config });
export default theme;
