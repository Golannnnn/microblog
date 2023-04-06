import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllTweets, postTweet } from "./axios";
import { useToast } from "@chakra-ui/react";

export const useGetAllTweets = () => {
  const {
    data: tweets,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tweets"],
    queryFn: () => getAllTweets(),
    select: (data) => data.tweets,
  });

  return { tweets, isLoading, isError, error };
};

export const usePostTweet = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const displayToast = (status, message = "Tweet posted.") => {
    return toast({
      position: "top",
      description: message,
      status: status,
      duration: 1500,
      isClosable: true,
    });
  };

  const {
    isLoading: isCreating,
    isSuccess: isCreated,
    isError: isCreateError,
    error: createError,
    mutate: createTweet,
  } = useMutation({
    mutationFn: (tweet) => postTweet(tweet),
    onSuccess: () => {
      queryClient.invalidateQueries(["tweets"]);
      displayToast("success");
    },
    onError: (error) => {
      displayToast("error", error.response.data.message);
    },
  });

  return { isCreating, isCreated, isCreateError, createError, createTweet };
};
