import { Button, Divider, FormControl, Input } from "@chakra-ui/react";
import { useAuth } from "../lib/AuthContext";
import useAuthForm from "../lib/useAuthForm";
import useToastService from "../lib/useToastService";
import styles from "./AuthFormStyles";
import { useState } from "react";

const SignIn = ({
  handleSigning,
  SuccessText,
  headerText,
  submitBtnText,
  signInGoogleBtnText,
  handleCreateUser,
}) => {
  const [loading, setLoading] = useState(false);
  const { email, password, handleEmailChange, handlePasswordChange } =
    useAuthForm();
  const { signInWithGoogle, createUser } = useAuth();
  const { displayToast } = useToastService();

  const refineErrorMessage = (error) => {
    const errorMessage = error.message;
    return errorMessage.split("(auth/")[1].split(")")[0].split("-").join(" ");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    handleSigning(email, password)
      .then((userCredential) => {
        if (handleCreateUser) {
          handleCreateUser(userCredential.user);
        }
        displayToast("success", SuccessText);
      })
      .catch((error) => {
        displayToast("error", refineErrorMessage(error));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then((userCredential) => {
        createUser(userCredential.user);
        displayToast("success", "Signed in successfully");
      })
      .catch((error) => {
        displayToast("error", refineErrorMessage(error));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <FormControl {...styles.formControl}>
        <h1 {...styles.h1}>{headerText}</h1>
        {/* <h2 {...styles.h2}>{headerText}</h2> */}
        <form onSubmit={handleSubmit}>
          <Input {...styles.email} onChange={handleEmailChange} value={email} />
          <Input
            {...styles.password}
            onChange={handlePasswordChange}
            value={password}
          />
          <Button {...styles.Button} isDisabled={loading} type="submit">
            {submitBtnText}
          </Button>
        </form>
      </FormControl>
      <Divider {...styles.Divider} />
      <Button
        {...styles.Button}
        isDisabled={loading}
        onClick={handleGoogleSignIn}
      >
        {signInGoogleBtnText}
      </Button>
    </>
  );
};

export default SignIn;
