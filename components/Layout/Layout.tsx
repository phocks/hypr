import { Container, Divider } from "@chakra-ui/react";
import Nav from "../Nav";
import TextInput from "../TextInput";

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav />
      <Divider my={8} />
      <main>{children}</main>
      <Divider my={8} />
      <TextInput />
    </Container>
  );
};

export default Layout;
