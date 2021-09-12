import { Input, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const LinkInput = ({ ...props }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("Submit!");
      }}
    >
      <Input my={2} />
      <Button type="submit" rightIcon={<ArrowForwardIcon />}>
        Submit
      </Button>
    </form>
  );
};

export default LinkInput;
