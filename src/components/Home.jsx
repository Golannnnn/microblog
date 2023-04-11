import CreateTweet from "./CreateTweet";
import TweetsList from "./TweetsList";
import Context from "../lib/Context";
import { useContext } from "react";

const Home = () => {
  const { isLoading, isError } = useContext(Context);
  return (
    <>
      <CreateTweet />
      {!isLoading && !isError && <TweetsList />}
    </>
  );
};

export default Home;
