import { useState } from "react";
import ChakraContainer from "./components/ChakraContainer";
import { useGetAllTweets, usePostTweet } from "./lib/react-query";
import Context from "./lib/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { useToast } from "@chakra-ui/react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [input, setInput] = useState({
    userName: "",
    content: "",
    error: false,
  });

  const { tweets, isLoading, isError, error } = useGetAllTweets();
  const { isCreating, isCreated, isCreateError, createError, createTweet } =
    usePostTweet();

  const toast = useToast();

  const displayToast = () => {
    return toast({
      position: "top",
      description: "Changed username successfully!",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserNameSubmit = (e) => {
    e.preventDefault();
    setInput((prev) => {
      return {
        ...prev,
        userName: e.target[0].value,
      };
    });
    displayToast();
  };

  const handleInputChange = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
        error: e.target.name === "content" && e.target.value.length > 140,
      };
    });
  };

  const resetInput = () => {
    setInput((prev) => {
      return {
        ...prev,
        content: "",
        error: false,
      };
    });
  };

  const addTweet = () => {
    const newTweet = {
      date: new Date(),
      userName: input.userName ? input.userName : "Anonymous",
      content: input.content,
    };
    createTweet(newTweet);
  };

  const handleTweetSubmit = () => {
    if (!input.content || input.error) return;
    addTweet();
    resetInput();
  };

  return (
    <ChakraContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route
              index
              element={
                <Context.Provider
                  value={{
                    isLoading,
                    isError,
                    input,
                    handleTweetSubmit,
                    handleInputChange,
                    tweets,
                  }}
                >
                  <Home />
                </Context.Provider>
              }
            />
            <Route
              path="profile"
              element={
                <Profile
                  userName={userName}
                  handleUserNameChange={handleUserNameChange}
                  handleUserNameSubmit={handleUserNameSubmit}
                  input={input}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraContainer>
  );
};

export default App;
