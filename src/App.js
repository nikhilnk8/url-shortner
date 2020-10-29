import React, { useContext, useState } from "react";
import "./App.scss";
// import Login from "./Components/Login/Login";
// import Urls from "./Components/Urls/Urls";
import { TokenContext } from "./Context/TokenContext";
import * as ANTD from "antd";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  const [decodedToken] = useContext(TokenContext);

  const LogOut = () => {
    localStorage.clear();
    window.location.replace("http://localhost:3000/");
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="headingTitles">
            <p> NI.KHAPP</p>
            {decodedToken !== null ? (
              <ANTD.Button onClick={LogOut}>logout</ANTD.Button>
            ) : null}
          </div>
        </header>
      </div>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/:username" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
