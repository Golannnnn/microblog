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
    <Flex align="center" justify="center" wordBreak="keep-all" ml={3}>
      <Flex
        display={{
          sm: "none",
          md: "flex",
          base: "none",
        }}
      >
        {userImg && <img {...styles.icon} src={userImg} alt="user" />}
      </Flex>
      <Text {...styles.Text}>{userName}</Text>
      <Button bg="tomato" size="md" onClick={handleSignOut} w={100}>
        Sign out
      </Button>
    </Flex>
  );
};

export default AuthDetails;
