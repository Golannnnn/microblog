import { Box } from "@chakra-ui/react";
import format from "date-fns/format";
import { useEffect, useState } from "react";
import { useAuth } from "../lib/AuthContext";
import styles from "./TweetStyles";

const Tweet = ({ date, content, userUID }) => {
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
    <Box {...styles.Box}>
      <div {...styles.div}>
        <span {...styles.iconWrapper}>
          {icon && <img {...styles.icon} src={icon} alt="user" />}
          <span>{name}</span>
        </span>
        <span>{formattedDate}</span>
      </div>
      <p {...styles.p}>{content}</p>
    </Box>
  );
};

export default Tweet;
