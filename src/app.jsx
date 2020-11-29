import React, { useEffect, useState } from "react";
import AppRouter from "./components/appRouter";
import { fAuth, fData } from "./fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    fAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          updateProfile: (args) => user.updateProfile(args),
        });
        writeUserData(
          userObj.uid,
          userObj.displayName,
          userObj.email,
          userObj.photoURL
        );
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
      // refreshUser();
    });
  }, []);

  const writeUserData = (userId, name, email, imageUrl) => {
    fData
      .ref("users/" + userId) //
      .set({
        username: name,
        email: email,
        profile_picture: imageUrl,
      });
  };

  const refreshUser = () => {
    const user = fAuth.currentUser;
    if (user.displayName !== null) {
      setUserObj({
        // displayName: user.displayName,
        // uid: user.uid,
        // photoURL: user.photoURL,
        // updateProfile: (args) => user.updateProfile(args),
      });
    }
  };

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={isLoggedIn}
          userObj={userObj}
        />
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
