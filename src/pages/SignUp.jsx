import AuthForm from "../components/AuthForm";
import { useAuth } from "../lib/AuthContext";

const SignUp = () => {
  const { signUpWithEmail, createUser } = useAuth();

  return (
    <AuthForm
      handleCreateUser={createUser}
      handleSigning={signUpWithEmail}
      SuccessText="Signed up successfully"
      headerText="Create an account"
      submitBtnText="Sign up"
      signInGoogleBtnText="Sign up with Google"
    />
  );
};

export default SignUp;
