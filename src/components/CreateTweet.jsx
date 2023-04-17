import {
  Badge,
  Button,
  FormControl,
  InputGroup,
  Spinner,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useInput } from "../lib/InputContext";
import { useTweet } from "../lib/TweetContext";
import styles from "./CreateTweetStyles";

const CreateTweet = () => {
  const { loadingTweets, currentUser, postTweet } = useTweet();
  const { input, handleInputChange, resetInput } = useInput();

  const addTweet = async () => {
    const newTweet = {
      date: new Date(),
      content: input.content,
      userUID: currentUser.uid,
      id: nanoid(),
    };
    await postTweet(newTweet);
  };

  const handleTweetSubmit = () => {
    if (!input.content || input.error) return;
    addTweet();
    resetInput();
  };

  const mobile = useBreakpointValue({ sm: true, md: false, base: true });

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
          isDisabled={!input.content || input.error || loadingTweets}
          onClick={handleTweetSubmit}
        >
          Tweet
        </Button>
        <Badge display={input.error ? "block" : "none"} {...styles.badge}>
          {mobile
            ? "Can't be more than 140 chars."
            : "The tweet can't contain more than 140 chars."}
        </Badge>
      </FormControl>
      {loadingTweets && (
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
