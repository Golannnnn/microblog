import { useState } from "react";
import { useGetAllTweets, usePostTweet } from "./lib/react-query";
import ChakraContainer from "./components/ChakraContainer";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetsList";

const App = () => {
  const [input, setInput] = useState({
    string: "",
    error: false,
  });

  const { tweets, isLoading, isError, error } = useGetAllTweets();
  const { isCreating, isCreated, isCreateError, createError, createTweet } =
    usePostTweet();

  const handleInputChange = (e) => {
    setInput({
      string: e.target.value,
      error: e.target.value.length > 140,
    });
  };

  const resetInput = () => setInput({ string: "", error: false });

  const addTweet = () => {
    const newTweet = {
      date: new Date(),
      userName: "User",
      content: input.string,
    };
    createTweet(newTweet);
  };

  const handleTweetSubmit = () => {
    if (!input.string || input.error) return;
    addTweet();
    resetInput();
  };

  return (
    <ChakraContainer>
      <CreateTweet
        loading={isLoading}
        input={input}
        handleTweetSubmit={handleTweetSubmit}
        handleInputChange={handleInputChange}
      />
      {!isLoading && !isError && <TweetList tweets={tweets} />}
    </ChakraContainer>
  );
};

export default App;
