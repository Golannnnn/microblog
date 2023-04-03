import Tweet from "./Tweet";

const TweetsList = ({ tweets }) => {
  const results = tweets.map((tweet) => (
    <Tweet key={tweet.id} date={tweet.date} content={tweet.content} />
  ));

  return <>{results}</>;
};

export default TweetsList;
