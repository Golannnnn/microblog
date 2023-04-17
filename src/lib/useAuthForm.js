import { useState } from "react";

const useAuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
  };
};

export default useAuthForm;
