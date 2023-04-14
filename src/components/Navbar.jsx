import { NavLink, Outlet } from "react-router-dom";
import styles from "./NavbarStyles";
import { Box } from "@chakra-ui/react";
import AuthDetails from "./AuthDetails";

const Navbar = ({ user }) => {
  return (
    <>
      <Box {...styles.Box}>
        <nav>
          <ul {...styles.ul}>
            <span>
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? styles.active : styles.pending
                }
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
            </span>
            <span>
              {user ? (
                <AuthDetails />
              ) : (
                <>
                  <NavLink
                    to="/signup"
                    style={({ isActive }) =>
                      isActive ? styles.active : styles.pending
                    }
                  >
                    Sign up
                  </NavLink>
                  <NavLink
                    to="/signin"
                    style={({ isActive }) =>
                      isActive ? styles.active : styles.pending
                    }
                  >
                    Sign in
                  </NavLink>
                </>
              )}
            </span>
          </ul>
        </nav>
      </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
