import ChakraContainer from "./components/ChakraContainer";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetsList";

const App = () => {
  return (
    <ChakraContainer>
      <CreateTweet />
      <TweetList />
    </ChakraContainer>
  );
};

export default App;
