import Tweet from "./Tweet";

const TweetsList = ({ tweets }) => {
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
