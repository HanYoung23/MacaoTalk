import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/auth";
import Home from "../routes/home";
import Profile from "../routes/conversationLits";
import ConversationList from "../routes/conversationLits";
import { fData } from "../fbase";

const AppRouter = ({ refreshUser, isLoggedIn, userObj, isSignedOut }) => {
  useEffect(() => {
    if (userObj === null) {
      return (
        <>
          <Route exact path="/">
            <Auth />
          </Route>
        </>
      );
    }
    writeUserData(
      userObj.uid,
      userObj.displayName,
      userObj.email,
      userObj.photoURL
    );
  }, []);

  const writeUserData = async (userId, name, email, imageUrl) => {
    await fData
      .ref("users/" + userId) //
      .set({
        username: name,
        email: email,
        profile_picture: imageUrl,
      });
  };

  const signOut = (tof) => {
    isSignedOut(tof);
  };

  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              {userObj && <Home userObj={userObj} isSignedOut={signOut} />}
            </Route>
            <Route exact path="/conversation">
              <ConversationList userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;
