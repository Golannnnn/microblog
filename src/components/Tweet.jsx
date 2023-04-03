import styles from "./TweetStyles";
import { Box } from "@chakra-ui/react";

const Tweet = () => {
  return (
    <Box {...styles.Box}>
      <div {...styles.div}>
        <span>Name</span>
        <span>Date</span>
      </div>
      <p {...styles.p}>Some content</p>
    </Box>
  );
};

export default Tweet;
