import React, { useState } from "react";
import { api_login } from "../../store/api";
import "./Login.css";
import { Button } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useJwt } from "react-jwt";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { decodedToken } = useJwt(localStorage.token);

  const genToken = async () => {
    const got_token = await api_login(username, password);
    console.log(got_token);
  };
  console.log(decodedToken);
  return (
    <div className="login">
      <div className="login__form">
        <h1>Log In</h1>
        <input
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        <input
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="password"
        />
        <Button
          type="primary"
          style={{ width: "20%", alignSelf: "center", marginBottom: 10 }}
          onClick={genToken}
        >
          {decodedToken !== null ? (
            <Redirect to={`/${decodedToken.userName}`} />
          ) : null}
          Log In
        </Button>
      </div>
    </div>
  );
}

export default Login;
