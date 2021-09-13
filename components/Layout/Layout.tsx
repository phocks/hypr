import {
  Container,
  Divider,
  Center,
  ButtonGroup,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import Nav from "../Nav";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav />
      <Divider my={8} />
      <main>{children}</main>
      <Divider my={8} />
      
    </Container>
  );
};

export default Layout;
