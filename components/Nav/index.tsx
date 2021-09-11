import {
  useColorMode,
  Container,
  Button,
  SimpleGrid,
  Box,
  Heading,
  Flex,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align={"center"}>
      <Box>
        <Heading>hypr</Heading>
      </Box>
      <Spacer />
      <Box>
        <IconButton
        aria-label="Toggle dark mode"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          variant="ghost"
        />
      </Box>
    </Flex>
  );
}

export default Nav;
