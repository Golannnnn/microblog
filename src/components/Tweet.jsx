import styles from "./TweetStyles";
import format from "date-fns/format";
import { Box } from "@chakra-ui/react";

const Tweet = ({ userName, date, content }) => {
  const formattedDate = format(new Date(date), "dd MMM yyyy HH:mm");
  return (
    <Box {...styles.Box}>
      <div {...styles.div}>
        <span>{userName}</span>
        <span>{formattedDate}</span>
      </div>
      <p {...styles.p}>{content}</p>
    </Box>
  );
};

export default Tweet;
