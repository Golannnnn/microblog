import Tweet from "./Tweet";
import Context from "../lib/Context";
import { useContext } from "react";

const TweetsList = () => {
  const { tweets } = useContext(Context);
  const results = tweets.map((tweet) => (
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
