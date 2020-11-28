import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/auth";
import Home from "../routes/home";
import Profile from "../routes/profile";
import Navigation from "./navigation";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  const login = isLoggedIn;
  return (
    <Router>
      {login && <Navigation userObj={userObj} />}
      <Switch>
        {login ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
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
