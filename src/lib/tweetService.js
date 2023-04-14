import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export const getAllTweets = async () => {
  try {
    const q = query(collection(db, "tweets"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    return data;
  } catch (error) {
    return error;
  }
};

export const postTweet = async (tweet) => {
  try {
    await addDoc(collection(db, "tweets"), tweet);
  } catch (error) {
    return error;
  }
};
