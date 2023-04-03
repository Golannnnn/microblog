import styles from "./CreateTweetStyles";
import { FormControl } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";

const CreateTweet = ({ input, handleTweetSubmit, handleInputChange }) => {
  return (
    <FormControl {...styles.formControl}>
      <InputGroup {...styles.inputGroup}>
        <Textarea
          {...styles.textArea}
          value={input.string}
          onChange={handleInputChange}
        />
      </InputGroup>
      <Button
        {...styles.button}
        isDisabled={!input.string || input.error}
        onClick={handleTweetSubmit}
      >
        Tweet
      </Button>
      <Badge display={input.error ? "block" : "none"} {...styles.badge}>
        The tweet can't contain more than 140 chars.
      </Badge>
    </FormControl>
  );
};
export default CreateTweet;
