import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import UrlCard from "../UrlCard/UrlCard";
import "./Urls.css";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import Modal from "react-bootstrap/Modal";

function Urls() {
  const [urls, setUrls] = useState([]);
  const { decodedToken } = useJwt(localStorage.token);
  const userId = decodedToken !== null ? decodedToken.userId : "";
  useEffect(() => {
    getUrls();
  }, [userId]);

  const getUrls = () => {
    Axios({
      method: "post",
      url: "http://localhost:5000/getUrls",
      data: { user: userId },
    }).then(({ data }) => {
      setUrls(data);
      // console.log(data);
    });
  };

  return (
    <div className="urls">
      <Modal show centered>
        <form>
          <InputLabel htmlFor="my-input">Add new URL</InputLabel>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" required />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">URL</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" required />
          </FormControl>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </form>
      </Modal>

      {urls.length > 0 ? (
        urls.map((url) => {
          return (
            <UrlCard
              key={url._id}
              orignal={url.orignal}
              short={url.short}
              _id={url._id}
              onRefresh={getUrls}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default Urls;
