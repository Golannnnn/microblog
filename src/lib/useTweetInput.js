import { useState } from "react";
import useToastService from "./useToastService";
const useTweetInput = () => {
  const [input, setInput] = useState({
    userName: "",
    content: "",
    error: false,
  });

  const { displayToast } = useToastService();

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

  const handleUserNameSubmit = (e) => {
    e.preventDefault();
    setInput((prev) => {
      return {
        ...prev,
        userName: e.target[0].value,
      };
    });
    displayToast("UserName set successfully!", "success");
  };

  return { input, handleInputChange, handleUserNameSubmit, resetInput };
};

export default useTweetInput;
