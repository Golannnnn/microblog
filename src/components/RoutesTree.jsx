import { Route, Routes } from "react-router-dom";
import { useAuth } from "../lib/AuthContext";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NoPage from "./NoPage";

const RoutesTree = () => {
  const { currentUser } = useAuth();
  return (
    <Routes>
      <Route index element={currentUser ? <Home /> : <SignUp />} />
      <Route path="/profile" element={currentUser ? <Profile /> : <SignUp />} />
      <Route path="/signup" element={currentUser ? <Home /> : <SignUp />} />
      <Route path="/signin" element={currentUser ? <Home /> : <SignIn />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default RoutesTree;
