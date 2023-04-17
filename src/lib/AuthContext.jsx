import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db, storage } from "./firebase";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [userName, setUserName] = useState("");
  const [userImg, setUserImg] = useState("");
  const [loadingUser, setLoadingUser] = useState(true);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = () => {
    return auth.signOut();
  };

  const createUser = async (user) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      try {
        await setDoc(docRef, {
          name: user.email,
          photoUrl: await getDefaultImg(),
        });
        setUserName(user.email);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const updateUser = async (input) => {
    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        name: input,
      });
      setUserName(input);
    } catch (err) {
      console.error(err);
    }
  };

  const updateProfileImg = async (url) => {
    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        photoUrl: url,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getUser = async (userUID) => {
    try {
      const docRef = doc(db, "users", userUID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return "Anonymous";
      }
    } catch (err) {
      return "Anonymous";
    }
  };

  // const getUserImg = async () => {
  //   const user = await getUser(currentUser.uid);
  //   return user.photoUrl;
  // };

  const getDefaultImg = async () => {
    const imageRef = ref(storage, "Default_pfp.svg");
    const url = await getDownloadURL(imageRef);
    return url;
  };

  const uploadProfileImage = async (file, currentUser) => {
    try {
      const fileRef = ref(storage, currentUser.uid + ".png");
      const cloudRef = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(cloudRef.ref);
      const dbRef = await updateProfileImg(url);
      setUserImg(url);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        getUser(user.uid)
          .then((data) => {
            setUserName(data.name);
            if (data.photoUrl) {
              setUserImg(data.photoUrl);
            } else {
              getDefaultImg().then((url) => setUserImg(url));
            }
          })
          .then(() => getDefaultImg());
        setLoadingUser(false);
      } else {
        setCurrentUser(null);
        setLoadingUser(false);
      }
    });

    return unsubscribe;
  }, []);

  const values = {
    currentUser,
    userName,
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    signOut,
    createUser,
    updateUser,
    getUser,
    uploadProfileImage,
    userImg,
  };

  return (
    <AuthContext.Provider value={values}>
      {!loadingUser && children}
    </AuthContext.Provider>
  );
};
