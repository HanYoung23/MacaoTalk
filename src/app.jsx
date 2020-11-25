import React, { useState } from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useParams,
} from "react-router-dom";
import Home from "./routes/home";
import Auth from "./routes/auth";
import Profile from "./routes/profile";
import { fAuth } from "./fbase";

function App() {
  const [address, setAddress] = useState("");

  return (
    <Router>
      <div>
        {/* <nav>
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
        </nav> */}
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

// <Switch>
// <Route path="/:id" children={<Child />} />
// </Switch>

// function Child() {
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

export default App;
