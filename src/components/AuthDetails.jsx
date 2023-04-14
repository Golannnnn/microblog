import useAuth from "../lib/useAuth";
import styles from "./AuthDetailsStyles";
import { Button } from "@chakra-ui/react";

const AuthDetails = () => {
  const { authUser, handleSignOut } = useAuth();
  return (
    <span {...styles.span}>
      <span {...styles.text}>{authUser?.email}</span>
      <Button size="sm" onClick={handleSignOut}>
        Sign out
      </Button>
    </span>
  );
};

export default AuthDetails;
