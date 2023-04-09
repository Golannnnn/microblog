import { NavLink, Outlet } from "react-router-dom";
import styles from "./NavbarStyles";
import { Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Box {...styles.Box}>
        <nav>
          <ul {...styles.ul}>
            <NavLink
              to="/"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "white" : "#6C757D",
                  marginLeft: "20px",
                  marginRight: "40px",
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              style={({ isActive }) =>
                isActive ? styles.active : styles.pending
              }
            >
              Profile
            </NavLink>
          </ul>
        </nav>
      </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
