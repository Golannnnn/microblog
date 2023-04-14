import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const useAuth = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user) : setAuthUser(null);
    });

    return () => {
      listen();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { authUser, handleSignOut };
};

export default useAuth;
