import { Button } from "@material-ui/core";
import useSWR from "swr";

const LoginButton = () => {
  const handleLogin = async (event) => {
    console.log("clicked");

    const res = await fetch("/api/login", {
      body: JSON.stringify({
        email: "phocks@gmail.com",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    console.log(result);
  };

  return (
    <Button onClick={handleLogin} variant="outlined">
      Login
    </Button>
  );
};

export default LoginButton;
