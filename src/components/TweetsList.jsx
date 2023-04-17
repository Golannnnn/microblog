import { useAuth } from "../lib/AuthContext";
import { useTweet } from "../lib/TweetContext";
import Tweet from "./Tweet";

const TweetsList = () => {
  const { currentUser } = useAuth();
  const { tweets, loadingTweets } = useTweet();
  const results =
    currentUser &&
    tweets.map((tweet) => {
      return (
        <Tweet
          key={tweet.id}
          date={tweet.date}
          content={tweet.content}
          userUID={tweet.userUID}
        />
      );
    });

  return <>{!loadingTweets && results}</>;
};

export default TweetsList;
