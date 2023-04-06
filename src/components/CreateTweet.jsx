import styles from "./CreateTweetStyles";
import { FormControl } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

const CreateTweet = ({
  input,
  handleTweetSubmit,
  handleInputChange,
  loading,
}) => {
  return (
    <>
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
          isDisabled={!input.string || input.error || loading}
          onClick={handleTweetSubmit}
        >
          Tweet
        </Button>
        <Badge display={input.error ? "block" : "none"} {...styles.badge}>
          The tweet can't contain more than 140 chars.
        </Badge>
      </FormControl>
      {loading && (
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
