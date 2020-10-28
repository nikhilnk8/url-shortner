import React, { useContext, useState } from "react";

import * as ANTD from "antd";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Axios from "axios";
import "./LandingPage.scss";

const LandingPage = () => {
  const [shortUrl, setShortUrl] = useState("");

  const GetOrignalUrl = async (short) => {
    try {
      const response = await Axios({
        method: "post",
        url: "https://urlshortnerbackendnikhil.herokuapp.com/findUrl",
        data: { short: shortUrl },
      });
      console.log(response);
      window.open(response.data, "_blank");
      if (response.status !== 200) ANTD.message.error("Something went wrong !");
    } catch (error) {
      ANTD.message.error("Something went wrong !");
    }
  };

  const shortUrlInputHandler = (event) => {
    setShortUrl(event.target.value);
  };
  return (
    <>
      <div className="url">
        <input
          placeholder="Enter a short link"
          onChange={shortUrlInputHandler}
        />
        <button onClick={GetOrignalUrl}>Go</button>
      </div>
      <div className="login__btn">
        <p>Want to create your short link ?</p>
        <div>
          <ANTD.Button>
            <Link to="/login">Login</Link>
          </ANTD.Button>
          <ANTD.Button>Signup</ANTD.Button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
