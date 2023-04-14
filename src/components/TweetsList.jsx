import Tweet from "./Tweet";
import Context from "../lib/Context";
import { useContext } from "react";

const TweetsList = () => {
  const { user, tweets } = useContext(Context);
  const results =
    user &&
    tweets.map((tweet) => (
      <Tweet
        key={tweet.id}
        userName={tweet.userName}
        date={tweet.date}
        content={tweet.content}
      />
    ));

  return <>{results}</>;
};

export default TweetsList;
