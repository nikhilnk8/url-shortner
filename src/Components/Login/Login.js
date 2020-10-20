import React, { useState } from "react";
import { api_login, get_user_posts } from "../../store/api";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const genToken = async () => {
    const got_token = await api_login(username, password);
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
        <input type="button" value="login" onClick={genToken} />
      </div>
      <button onClick={get_user_posts}>get urls</button>
    </div>
  );
}

export default Login;
