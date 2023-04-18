import AuthForm from "../components/AuthForm";
import { useAuth } from "../lib/AuthContext";

const SignIn = () => {
  const { signInWithEmail } = useAuth();

  return (
    <AuthForm
      handleSigning={signInWithEmail}
      SuccessText="Signed in successfully"
      headerText="Log in to see tweets"
      submitBtnText="Sign in"
      signInGoogleBtnText="Sign in with Google"
    />
  );
};

export default SignIn;
