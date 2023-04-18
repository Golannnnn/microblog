import { Box } from "@chakra-ui/react";
import format from "date-fns/format";
import { useEffect, useState } from "react";
import { useAuth } from "../lib/AuthContext";
import styles from "./TweetStyles";

const Tweet = ({ date, content, userUID, checked }) => {
  const { getUser } = useAuth();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const formattedDate = format(new Date(date), "dd/MM/yy HH:mm");

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(userUID);
      setIcon(data.photoUrl || "");
      setName(data.name || "Anonymous");
    };
    fetchUser();
  }, []);

  return (
    <Box
      {...styles.Box}
      style={{
        backgroundColor: checked ? "#59626d" : "#343A40",
      }}
    >
      <div {...styles.div}>
        <span {...styles.iconWrapper}>
          {icon && <img {...styles.icon} src={icon} alt="user" />}
          <span
            style={{
              color: checked ? "white" : "#6C757D",
            }}
          >
            {name}
          </span>
        </span>
        <span
          style={{
            color: checked ? "white" : "#6C757D",
          }}
        >
          {formattedDate}
        </span>
      </div>
      <p {...styles.p}>{content}</p>
    </Box>
  );
};

export default Tweet;
