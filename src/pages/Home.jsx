import CreateTweet from "../components/CreateTweet";
import TweetsList from "../components/TweetsList";
import Context from "../lib/Context";
import { useContext } from "react";

const Home = () => {
  const { loading } = useContext(Context);
  return (
    <>
      <CreateTweet />
      {!loading && <TweetsList />}
    </>
  );
};

export default Home;
