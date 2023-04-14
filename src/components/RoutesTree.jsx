import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Context from "../lib/Context";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const RoutesTree = () => {
  const { user } = useContext(Context);
  return (
    <Routes>
      <Route index element={user ? <Home /> : <SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default RoutesTree;
