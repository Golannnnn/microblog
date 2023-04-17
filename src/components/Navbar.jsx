import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../lib/AuthContext";
import AuthDetails from "./AuthDetails";
import styles from "./NavbarStyles";

const Navbar = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <Box {...styles.Box}>
        <Flex align="center" justify="space-between">
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
              >
                Home
              </Text>
            </NavLink>
            <NavLink
              to="/profile"
              style={({ isActive }) =>
                isActive ? styles.active : styles.pending
              }
            >
              <Text mr={1}>Profile</Text>
            </NavLink>
          </Flex>
          <Flex align="center" justify="center">
            {currentUser ? (
              <AuthDetails />
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
