import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Context from "./lib/Context";
import { auth } from "./lib/firebase";
import useTweetInput from "./lib/useTweetInput";
import { getAllTweets, postTweet } from "./lib/tweetService";
import ChakraContainer from "./components/ChakraContainer";
import Navbar from "./components/Navbar";
import RoutesTree from "./components/RoutesTree";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(localStorage.getItem("signedin"));
  const { input, handleInputChange, handleUserNameSubmit, resetInput } =
    useTweetInput();

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);
      const data = await getAllTweets();
      const tweetObj = data.map((tweet) => {
        return {
          ...tweet,
          date: tweet.date.toDate(),
        };
      });
      setTweets(tweetObj);
      setLoading(false);
    };

    user && fetchTweets();
  }, [user]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        localStorage.setItem("signedin", "true");
      } else {
        setUser(null);
        localStorage.removeItem("signedin");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const addTweet = async () => {
    const newTweet = {
      date: new Date(),
      userName: input.userName || "Anonymous",
      content: input.content,
      id: nanoid(),
    };
    await postTweet(newTweet);
  };

  const handleTweetSubmit = () => {
    if (!input.content || input.error) return;
    addTweet();
    resetInput();
  };

  const contextValues = {
    user,
    loading,
    input,
    handleTweetSubmit,
    handleInputChange,
    tweets,
    userName,
    handleUserNameChange,
    handleUserNameSubmit,
  };

  return (
    <ChakraContainer>
      <Navbar user={user} />
      <Context.Provider value={contextValues}>
        <RoutesTree />
      </Context.Provider>
    </ChakraContainer>
  );
};

export default App;
