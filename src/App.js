import React, { useContext } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Urls from "./Components/Urls/Urls";
import { TokenContext } from "./Context/TokenContext";
import { Button } from "antd";
import Home from "./Components/Home/Home";

function App() {
  const [decodedToken] = useContext(TokenContext);

  const LogOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="headingTitles">
          <p> NI.KHAPP</p>
          <p>
            {decodedToken == null ? null : `Hiii, ${decodedToken.userName}`}
          </p>
        </div>

        <div className="logout">
          {decodedToken == null ? null : (
            <Button type="primary" onClick={LogOut}>
              Log Out
            </Button>
          )}
        </div>
      </header>
      <Home />
    </div>
  );
}

export default App;
