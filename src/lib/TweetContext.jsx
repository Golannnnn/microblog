import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  onSnapshot,
  limit,
  startAfter,
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
  const [lastKey, setLastKey] = useState(null);
  const [loadingTweets, setLoadingTweets] = useState(false);
  const [loadingMoreTweets, setLoadingMoreTweets] = useState(false);
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

    return [newTweet, ...prev].sort((a, b) => b.date - a.date);
  };

  const getNextBatch = async (key) => {
    if (key && currentUser && !loadingTweets) {
      try {
        const q = query(
          collection(db, "tweets"),
          orderBy("date", "desc"),
          startAfter(key),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        let tweets = [];
        let lastKey;
        querySnapshot.forEach((doc) => {
          if (tweets.some((tweet) => tweet.id === doc.id)) {
            return;
          } else {
            tweets.push({
              ...doc.data(),
              date: doc.data().date.toDate(),
              id: doc.id,
            });
            lastKey = doc.data().date;
          }
        });
        return { tweets, lastKey };
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleBatches = (key) => {
    if (key && currentUser && !loadingTweets) {
      setLoadingMoreTweets(true);
      getNextBatch(key)
        .then((data) => {
          const filteredTweets = data.tweets.filter(
            (tweet) => !tweets.some((t) => t.id === tweet.id)
          );
          setLastKey(data.lastKey);
          setTweets((prev) => [...prev, ...filteredTweets]);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setLoadingMoreTweets(false);
        });
    }
  };

  useEffect(() => {
    if (!currentUser || loadingTweets) return;
    setLoadingTweets(true);
    const q = query(
      collection(db, "tweets"),
      orderBy("date", "desc"),
      limit(10)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setTweets((prev) => checkForDuplicates(prev, change));
          setLastKey(change.doc.data().date);
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
    handleBatches,
    lastKey,
    loadingMoreTweets,
  };

  return (
    <TweetContext.Provider value={value}>{children}</TweetContext.Provider>
  );
};
