import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./routes/home";
import Auth from "./routes/auth";
import Profile from "./routes/profile";

function App() {
  const [address, setAddress] = useState("");

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Auth</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Auth
              address={(address) => {
                setAddress(address);
              }}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
