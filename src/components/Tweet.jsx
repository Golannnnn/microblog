import styles from "./TweetStyles";
import format from "date-fns/format";
import { Box } from "@chakra-ui/react";

const Tweet = ({ date, content }) => {
  const formattedDate = format(new Date(date), "dd MMM yyyy HH:mm");
  return (
    <Box {...styles.Box}>
      <div {...styles.div}>
        <span>Name</span>
        <span>{formattedDate}</span>
      </div>
      <p {...styles.p}>{content}</p>
    </Box>
  );
};

export default Tweet;
