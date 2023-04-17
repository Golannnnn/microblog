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
    const offsetHeight = document.documentElement.offsetHeight,
      innerHeight = window.innerHeight,
      scrollTop =
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
