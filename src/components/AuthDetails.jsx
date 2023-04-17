import { Button, Flex, Text } from "@chakra-ui/react";
import { useAuth } from "../lib/AuthContext";
import { auth } from "../lib/firebase";
import styles from "./AuthDetailsStyles";
import useToastService from "../lib/useToastService";

const AuthDetails = () => {
  const { signOut, userName, userImg } = useAuth();
  const { displayToast } = useToastService();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        displayToast("success", "Signed out successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Flex align="center" justify="center">
      {userImg && <img {...styles.icon} src={userImg} alt="user" />}
      <Text {...styles.Text}>{userName}</Text>
      <Button size="sm" onClick={handleSignOut}>
        Sign out
      </Button>
    </Flex>
  );
};

export default AuthDetails;
