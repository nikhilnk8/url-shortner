import Axios from "axios";
import React, { useState } from "react";
import Urls from "../Urls/Urls";
import "./Home.scss";
import * as ANTD from "antd";
import copy from "copy-to-clipboard";

function Home() {
  const [shortUrl, setShortUrl] = useState("");

  const GetOrignalUrl = async (short) => {
    try {
      const response = await Axios({
        method: "post",
        url: "http://localhost:5000/findUrl",
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
    <div className="home">
      <div className="home__goToLink">
        <input
          placeholder="Enter a short link"
          onChange={shortUrlInputHandler}
        />
        <button onClick={GetOrignalUrl}>Go</button>
      </div>
      {localStorage.token ? <Urls /> : null}
    </div>
  );
}

export default Home;
