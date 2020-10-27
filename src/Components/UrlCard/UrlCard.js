import React from "react";
import "./UrlCard.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { deleteUrl } from "../../store/api";

function UrlCard({ _id, orignal, short, onRefresh, name }) {
  const DeleteUrl = async () => {
    let response = await deleteUrl(_id);
    console.log(response);
    response.status === 200 ? onRefresh() : alert("Something Went Wrong");
  };

  return (
    <div className="urlcard">
      <div className="urlcard__links">
        <p>{name}</p>
        <p>{orignal}</p>
        <p>{short}</p>
      </div>
      <div className="urlcard__buttons">
        <IconButton onClick={DeleteUrl}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default UrlCard;
