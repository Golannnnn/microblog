import { useState } from "react";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Select,
  Flex,
} from "@chakra-ui/react";
import { useTweet } from "../lib/TweetContext";

const SearchBar = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const {
    tweetsOrUsers,
    handleTweetsOrUsers,
    handleSearchChange,
    handleSearch,
  } = useTweet();

  console.log("tweetsOrUsers", tweetsOrUsers);

  return (
    <Flex wrap="nowrap">
      <Select
        size="md"
        maxWidth={110}
        // width={270}
        mr={2}
        sx={{
          background: "white",
        }}
        onChange={handleTweetsOrUsers}
        value={tweetsOrUsers}
      >
        <option value="tweets">Tweets</option>
        <option value="users">Users</option>
      </Select>
      <InputGroup size="md">
        <Input
          // pr="4.5rem"
          type="Search"
          placeholder="Search"
          color="white"
          onChange={handleSearch}
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchBar;
