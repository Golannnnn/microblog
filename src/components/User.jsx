import { Box } from "@chakra-ui/react";
import styles from "./UserStyles";

const User = ({ name, photoUrl, checked }) => {
  return (
    <Box
      {...styles.Box}
      style={{
        backgroundColor: checked ? "#59626d" : "#343A40",
      }}
    >
      <div {...styles.div}>
        <span {...styles.iconWrapper}>
          <img {...styles.icon} src={photoUrl} alt="user" />
          <span
            style={{
              color: checked ? "white" : "#6C757D",
            }}
          >
            {name}
          </span>
        </span>
      </div>
    </Box>
  );
};

export default User;
