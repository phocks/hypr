import { Input } from "@chakra-ui/react";

function LinkInput({ ...props }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("Submit!");
      }}
    >
      <Input />
    </form>
  );
}

export default LinkInput;
