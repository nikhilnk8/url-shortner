import React, { useContext } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Urls from "./Components/Urls/Urls";
import { TokenContext } from "./Context/TokenContext";

function App() {
  const [decodedToken] = useContext(TokenContext);
  console.log(decodedToken);
  return (
    <div className="App">
      <header className="App-header">
        NI.KHAPP
        <p>{decodedToken == null ? "..." : `Hiii, ${decodedToken.userName}`}</p>
      </header>
      {localStorage.getItem("token") ? <Urls /> : <Login />}
    </div>
  );
}

export default App;
