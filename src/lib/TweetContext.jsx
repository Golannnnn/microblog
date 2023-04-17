import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { db } from "./firebase";

const TweetContext = createContext();

export const useTweet = () => {
  return useContext(TweetContext);
};

export const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const [loadingTweets, setLoadingTweets] = useState(false);
  const { currentUser } = useAuth();

  const getAllTweets = async () => {
    const q = query(collection(db, "tweets"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  };

  const postTweet = async (tweet) => {
    await addDoc(collection(db, "tweets"), tweet);
  };

  const checkForDuplicates = (prev, change) => {
    const duplicates = prev.filter((tweet) => tweet.id === change.doc.id);
    if (duplicates.length > 0) {
      return prev;
    }
    const newTweet = {
      ...change.doc.data(),
      date: change.doc.data().date.toDate(),
      id: change.doc.id,
    };
    return [newTweet, ...prev];
  };

  useEffect(() => {
    setLoadingTweets(true);
    const q = query(collection(db, "tweets"), orderBy("date", "asc"));
    if (!currentUser) return;
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setTweets((prev) => checkForDuplicates(prev, change));
        }
      });
      setLoadingTweets(false);
    });
    return unsubscribe;
  }, [currentUser]);

  const value = {
    tweets,
    loadingTweets,
    currentUser,
    postTweet,
  };

  return (
    <TweetContext.Provider value={value}>{children}</TweetContext.Provider>
  );
};
