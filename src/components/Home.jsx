import CreateTweet from "./CreateTweet";
import TweetsList from "./TweetsList";

const Home = ({
  loading,
  isError,
  input,
  handleTweetSubmit,
  handleInputChange,
  tweets,
}) => {
  return (
    <>
      <CreateTweet
        loading={loading}
        input={input}
        handleTweetSubmit={handleTweetSubmit}
        handleInputChange={handleInputChange}
      />
      {!loading && !isError && <TweetsList tweets={tweets} />}
    </>
  );
};

export default Home;
