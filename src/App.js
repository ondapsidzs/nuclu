import { HashRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

import Landing from "./pages/Landing";
import LoginOrCreateAccount from "./pages/LoginOrCreateAccount";
import Main from "./pages/Main";

function App() {
  const [currentUser, setCurrentUser] = useState("User");

  function loggedIn(username) {
    setCurrentUser(username);
  }

  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/login">
        <LoginOrCreateAccount loggedIn={loggedIn} />
      </Route>
      <Route path="/main">
        <Main username={currentUser} loggedIn={loggedIn} />
      </Route>
      <Route path="/welcome">
        <Main />
      </Route>
      <Route path="/profile">
        <Main />
      </Route>
      <Route path="/notifications">
        <Main />
      </Route>
      <Route path="/connections">
        <Main />
      </Route>
      <Route path="/marketplace">
        <Main />
      </Route>
      <Route path="/jobs">
        <Main />
      </Route>
      <Route path="/settings">
        <Main />
      </Route>
    </Router>
  );
}

export default App;
