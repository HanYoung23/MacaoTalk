import React, { useEffect, useState } from "react";
import AppRouter from "./components/appRouter";
import { fAuth } from "./fbase";

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
          // updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
      // refreshUser();
    });
  }, []);

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

  const signOut = (tof) => {
    setIsLoggedIn(tof);
    console.log(tof);
  };

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={isLoggedIn}
          isSignedOut={signOut}
          userObj={userObj}
        />
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
