import { useEffect, useState } from "react";
import { useAuth } from "../lib/AuthContext";
import { useTweet } from "../lib/TweetContext";
import Tweet from "./Tweet";
import { Spinner, Checkbox, Box } from "@chakra-ui/react";
import User from "./User";
import { nanoid } from "nanoid";

const TweetsList = () => {
  const [checked, setChecked] = useState(false);
  const { currentUser } = useAuth();
  const {
    tweets,
    loadingTweets,
    handleBatches,
    lastKey,
    loadingMoreTweets,
    filteredTweets,
    noTweets,
    tweetsOrUsers,
    filteredUsers,
    allUsers,
  } = useTweet();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastKey]);

  console.log(tweetsOrUsers, filteredUsers);

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

  const NoDuplicateTweets =
    noTweets || filteredTweets.length > 0
      ? filteredTweets.filter(
          (tweet, index, self) =>
            index === self.findIndex((t) => t.id === tweet.id)
        )
      : tweets.filter(
          (tweet, index, self) =>
            index === self.findIndex((t) => t.id === tweet.id)
        );

  let results;

  if (currentUser) {
    results = !checked
      ? NoDuplicateTweets.map((tweet) => {
          return (
            <Tweet
              checked={checked}
              key={tweet.id}
              date={tweet.date}
              content={tweet.content}
              userUID={tweet.userUID}
            />
          );
        })
      : NoDuplicateTweets.filter(
          (tweet) => tweet.userUID === currentUser.uid
        ).map((tweet) => {
          return (
            <Tweet
              checked={checked}
              key={tweet.id}
              date={tweet.date}
              content={tweet.content}
              userUID={tweet.userUID}
            />
          );
        });
  }

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const userResults =
    noTweets || filteredUsers.length > 0
      ? filteredUsers.map((user) => {
          return (
            <User
              key={nanoid()}
              name={user.name}
              photoUrl={user.photoUrl}
              checked={checked}
            />
          );
        })
      : allUsers.map((user) => {
          return (
            <User
              key={nanoid()}
              name={user.name}
              photoUrl={user.photoUrl}
              checked={checked}
            />
          );
        });

  return (
    <>
      {!loadingTweets && (
        <>
          <Box
            width={{
              base: "100%",
              sm: "100%",
              md: "500px",
            }}
          >
            {tweetsOrUsers === "tweets" && (
              <Checkbox
                onChange={handleCheckboxChange}
                size="sm"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "blue.500",
                  borderRadius: "10px",
                  padding: "10px",
                  margin: "5px 0 5px 0",
                }}
              >
                {checked ? "Show all tweets" : "Show only your tweets"}
              </Checkbox>
            )}
          </Box>
          {tweetsOrUsers === "tweets" ? results : userResults}
          {loadingMoreTweets && (
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
      )}
    </>
  );
};

export default TweetsList;
