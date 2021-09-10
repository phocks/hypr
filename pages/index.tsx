import { useState, useEffect } from "react";
import { useColorMode, Container, Button } from "@chakra-ui/react";

import styles from "../styles/Home.module.scss";

function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Container>Hello world!</Container>
    </div>
  );
}

export default Home;
