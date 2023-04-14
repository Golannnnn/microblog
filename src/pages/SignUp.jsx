import { useState } from "react";
import styles from "./SignUpStyles";
import { FormControl } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { auth } from "../lib/firebase";
import Context from "../lib/Context";
import { useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(Context);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
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
          <h2 {...styles.h2}>Create an account</h2>
          <form onSubmit={handleSignUp}>
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
              Sign up
            </Button>
          </form>
        </>
      )}
    </FormControl>
  );
};

export default SignUp;
