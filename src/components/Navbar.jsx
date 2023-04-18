import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../lib/AuthContext";
import AuthDetails from "./AuthDetails";
import SearchBar from "./SearchBar";
import styles from "./NavbarStyles";

const Navbar = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <Box {...styles.Box}>
        <Flex
          align="center"
          justify={{
            sm: "center",
            md: "space-between",
            base: "center",
          }}
          flexWrap={{
            sm: "wrap",
            md: "nowrap",
            base: "wrap",
          }}
        >
          <Flex justify="center" align="center">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? styles.active : styles.pending
              }
            >
              <Text
                mr={{
                  sm: 5,
                  md: 10,
                  base: 5,
                }}
                fontSize={{
                  sm: "20px",
                  md: "16px",
                  base: "20px",
                }}
                fontWeight={{
                  sm: "bold",
                  md: "normal",
                  base: "bold",
                }}
                wordBreak="keep-all"
              >
                Home
              </Text>
            </NavLink>
            {currentUser && (
              <NavLink
                to="/profile"
                style={({ isActive }) =>
                  isActive ? styles.active : styles.pending
                }
              >
                <Text
                  mr={2}
                  fontSize={{
                    sm: "20px",
                    md: "16px",
                    base: "20px",
                  }}
                  fontWeight={{
                    sm: "bold",
                    md: "normal",
                    base: "bold",
                  }}
                  wordBreak="keep-all"
                >
                  Profile
                </Text>
              </NavLink>
            )}
          </Flex>
          <Flex align="center" justify="center">
            {currentUser ? (
              <Flex
                justify="center"
                align="center"
                flexWrap={{
                  sm: "wrap",
                  md: "nowrap",
                  base: "wrap",
                }}
                mt={{
                  sm: 4,
                  md: 0,
                  base: 4,
                }}
              >
                <SearchBar />
                <AuthDetails />
              </Flex>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  style={({ isActive }) =>
                    isActive ? styles.active : styles.pending
                  }
                >
                  <Text mr={5}>Sign up</Text>
                </NavLink>
                <NavLink
                  to="/signin"
                  style={({ isActive }) =>
                    isActive ? styles.active : styles.pending
                  }
                >
                  <Text>Sign in</Text>
                </NavLink>
              </>
            )}
          </Flex>
        </Flex>
      </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
