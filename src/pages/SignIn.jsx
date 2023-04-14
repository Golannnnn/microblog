import { useState } from "react";
import styles from "./SignInStyles";
import { FormControl } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { auth } from "../lib/firebase";
import Context from "../lib/Context";
import { useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(Context);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FormControl {...styles.formControl}>
      {user ? (
        <h2 {...styles.h2}>You are already logged in</h2>
      ) : (
        <>
          <h2 {...styles.h2}>Log in to your account</h2>
          <form onSubmit={handleSignIn}>
            <Input
              {...styles.email}
              onChange={handleEmailChange}
              value={email}
            />
            <Input
              {...styles.password}
              onChange={handlePasswordChange}
              value={password}
            />
            <Button {...styles.Button} isDisabled={false}>
              Sign in
            </Button>
          </form>
        </>
      )}
    </FormControl>
  );
};

export default SignIn;
