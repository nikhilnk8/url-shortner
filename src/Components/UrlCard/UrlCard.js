import React from "react";
import "./UrlCard.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { deleteUrl } from "../../store/api";

function UrlCard({ _id, orignal, short, onRefresh }) {
  return (
    <div className="urlcard">
      <div className="urlcard__links">
        <p>{orignal}</p>
        <p>{short}</p>
      </div>
      <div className="urlcard__buttons">
        <IconButton
          onClick={() => {
            deleteUrl(_id);
            onRefresh();
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default UrlCard;
