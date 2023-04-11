import styles from "./CreateTweetStyles";
import { FormControl } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import Context from "../lib/Context";
import { useContext } from "react";

const CreateTweet = () => {
  const { input, handleTweetSubmit, handleInputChange, isLoading } =
    useContext(Context);
  return (
    <>
      <FormControl {...styles.formControl}>
        <InputGroup {...styles.inputGroup}>
          <Textarea
            {...styles.textArea}
            value={input.content}
            onChange={handleInputChange}
          />
        </InputGroup>
        <Button
          {...styles.button}
          isDisabled={!input.content || input.error || isLoading}
          onClick={handleTweetSubmit}
        >
          Tweet
        </Button>
        <Badge display={input.error ? "block" : "none"} {...styles.badge}>
          The tweet can't contain more than 140 chars.
        </Badge>
      </FormControl>
      {isLoading && (
        <Spinner
          margin={4}
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </>
  );
};
export default CreateTweet;
