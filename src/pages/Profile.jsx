import {
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "./ProfileStyles";
import { useAuth } from "../lib/AuthContext";
import useToastService from "../lib/useToastService";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const {
    currentUser,
    updateUser,
    userName: currentUserName,
    uploadProfileImage,
    userImg,
  } = useAuth();
  const { displayToast } = useToastService();

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName === currentUserName) {
      displayToast("error", "Username is same as previous one");
      return;
    }
    if (userName.length > 20) {
      displayToast("error", "Username is too long");
      return;
    }
    setLoading(true);
    await updateUser(userName);
    setLoading(false);
    displayToast("success", `Username set to ${userName}`);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    try {
      setLoading(true);
      await uploadProfileImage(file, currentUser);
      displayToast("success", `Profile picture uploaded`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setFile(null);
    }
  };

  return (
    <>
      <FormControl {...styles.formControl}>
        <form onSubmit={handleSubmit}>
          <Flex align="center" mb={5} mt={2}>
            {userImg && <img {...styles.icon} src={userImg} alt="user" />}
            <Text {...styles.Text}>{currentUserName}</Text>
          </Flex>
          <label {...styles.label}>Change username</label>
          <InputGroup {...styles.inputGroup}>
            <Input {...styles.Input} onChange={handleChange} value={userName} />
          </InputGroup>
          <Button {...styles.Button} isDisabled={!userName || loading}>
            Save
          </Button>
        </form>
      </FormControl>
      <FormControl {...styles.formControl}>
        <label {...styles.label}>Upload profile picture</label>
        <InputGroup {...styles.inputGroup}>
          <label {...styles.fileLabel}>
            <input type="file" id="file" onChange={handleFileChange} />
          </label>
        </InputGroup>
        <Button
          {...styles.Button}
          onClick={handleFileUpload}
          isDisabled={!file || loading}
        >
          Upload
        </Button>
      </FormControl>
    </>
  );
};

export default Profile;
