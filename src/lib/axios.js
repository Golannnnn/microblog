import axios from "axios";

const baseUrl =
  "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/";

export const API = axios.create({ baseURL: baseUrl });

export const getAllTweets = async () => {
  const res = await API.get("tweet");
  return res.data;
};

export const postTweet = async (tweet) => {
  const res = await API.post("tweet", tweet);
  return res.data;
};
