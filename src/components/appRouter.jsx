import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/auth";
import Home from "../routes/home";
import Profile from "../routes/conversationLits";
import ConversationList from "../routes/conversationLits";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  const login = isLoggedIn;
  return (
    <Router>
      <Switch>
        {login ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
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
