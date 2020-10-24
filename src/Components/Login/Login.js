import React, { useState } from "react";
import { api_login, get_user_posts } from "../../store/api";
import "./Login.css";
import { Button } from "antd";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const genToken = async () => {
    const got_token = await api_login(username, password);
    window.location.reload();

    console.log(got_token);
  };
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
          Log In
        </Button>
      </div>
    </div>
  );
}

export default Login;
