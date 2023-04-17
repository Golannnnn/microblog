import { createContext, useContext, useState } from "react";

const InputContext = createContext();

export const useInput = () => {
  return useContext(InputContext);
};

export const InputProvider = ({ children }) => {
  const [input, setInput] = useState({
    content: "",
    error: false,
  });

  const handleInputChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
      error: e.target.name === "content" && e.target.value.length > 140,
    });
  };

  const resetInput = () => {
    setInput({
      content: "",
      error: false,
    });
  };

  const value = {
    input,
    resetInput,
    handleInputChange,
  };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
