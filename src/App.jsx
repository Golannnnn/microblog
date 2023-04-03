import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ChakraContainer from "./components/ChakraContainer";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetsList";
import { useToast } from "@chakra-ui/react";

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [input, setInput] = useState({
    string: "",
    error: false,
  });

  const toast = useToast();

  const displayToast = () => {
    return toast({
      position: "top",
      description: "Tweet posted.",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };

  const handleInputChange = (e) => {
    setInput({
      string: e.target.value,
      error: e.target.value.length > 140,
    });
  };

  const resetInput = () => setInput({ string: "", error: false });

  const addTweet = () => {
    const newTweet = {
      id: nanoid(),
      date: new Date(),
      content: input.string,
    };
    setTweets([newTweet, ...tweets]);
    resetInput();
  };

  const handleTweetSubmit = () => {
    if (!input.string || input.error) return;
    addTweet();
    displayToast();
  };

  return (
    <ChakraContainer>
      <CreateTweet
        input={input}
        handleTweetSubmit={handleTweetSubmit}
        handleInputChange={handleInputChange}
      />
      <TweetList tweets={tweets} />
    </ChakraContainer>
  );
};

export default App;
