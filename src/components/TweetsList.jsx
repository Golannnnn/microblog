import { useEffect } from "react";
import { useAuth } from "../lib/AuthContext";
import { useTweet } from "../lib/TweetContext";
import Tweet from "./Tweet";

const TweetsList = () => {
  const { currentUser } = useAuth();
  const { tweets, loadingTweets, handleBatches, lastKey } = useTweet();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastKey]);

  const handleScroll = () => {
    const offsetHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    const innerHeight = window.innerHeight;
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (offsetHeight - innerHeight - scrollTop < 1 && lastKey) {
      handleBatches(lastKey);
    }
  };

  const results =
    currentUser &&
    tweets
      .filter(
        (tweet, index, self) =>
          index === self.findIndex((t) => t.id === tweet.id)
      )
      .map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            date={tweet.date}
            content={tweet.content}
            userUID={tweet.userUID}
          />
        );
      });

  return (
    <>
      {!loadingTweets && (
        <>
          {results}
          {/* {lastKey && (
            <button
              onClick={() => handleBatches(lastKey)}
              style={{
                backgroundColor: "white",
              }}
            >
              Load more
            </button>
          )} */}
        </>
      )}
    </>
  );
};

export default TweetsList;
