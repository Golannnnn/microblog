import styles from "./ProfileStyles";
import { FormControl } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const Profile = ({
  userName,
  handleUserNameSubmit,
  handleUserNameChange,
  input,
}) => {
  return (
    <FormControl {...styles.formControl}>
      <form onSubmit={handleUserNameSubmit}>
        <h2 {...styles.h2}>Profile</h2>
        <label {...styles.label}>User Name</label>
        <InputGroup {...styles.inputGroup}>
          <Input
            {...styles.Input}
            onChange={handleUserNameChange}
            defaultValue={input.userName ? input.userName : ""}
          />
        </InputGroup>
        <Button {...styles.Button} isDisabled={!userName}>
          Save
        </Button>
      </form>
    </FormControl>
  );
};

export default Profile;
