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
          aria-label="Search database"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
      </Box>
    </Flex>
  );
}

export default Nav;
