import React, { useContext } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Urls from "./Components/Urls/Urls";
import { TokenContext } from "./Context/TokenContext";
import { Button } from "antd";

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
      {localStorage.getItem("token") ? <Urls /> : <Login />}
    </div>
  );
}

export default App;
