import styles from "./CreateTweetStyles";
import { FormControl } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";

const CreateTweet = () => {
  return (
    <>
      <FormControl {...styles.formControl}>
        <InputGroup {...styles.inputGroup}>
          <Textarea {...styles.textArea} />
        </InputGroup>
        <Button {...styles.button}>Tweet</Button>
        <Badge display={true ? "block" : "none"} {...styles.badge}>
          The tweet can't contain more then 140 chars.
        </Badge>
      </FormControl>
    </>
  );
};
export default CreateTweet;
