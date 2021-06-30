import { Button } from "@material-ui/core";
import useSWR from "swr";

const LoginButton = () => {
  const fetcher = (args) => fetch(args).then((res) => res.json());
  
  const { data, error } = useSWR("/api/login", fetcher);
  console.log(data);
  

  const handleLogin = (event) => {
    console.log("clicked");
    
  };

  return (
    <Button onClick={handleLogin} variant="outlined">
      Login
    </Button>
  );
};

export default LoginButton;
