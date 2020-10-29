import React, { useRef, useState } from "react";
import "./UrlCard.css";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopy from "@material-ui/icons/FileCopy";
import { IconButton } from "@material-ui/core";
import { deleteUrl } from "../../store/api";
import * as ANTD from "antd";

function UrlCard({ _id, orignal, short, onRefresh, name }) {
  const shortLinkRef = useRef();

  const DeleteUrl = async () => {
    let response = await deleteUrl(_id);
    console.log(response);
    response.status === 200 ? onRefresh() : alert("Something Went Wrong");
  };
  const CopyText = (short) => {
    navigator.clipboard.writeText(short);
    ANTD.message.success("URL copied to clipboard !");
  };

  return (
    <div className="urlcard">
      <div className="urlcard__links">
        <p>{name}</p>
        <p>{orignal}</p>
        <a href={orignal} rel="noopener noreferrer" target="_blank">
          <p ref={shortLinkRef}>{short}</p>
        </a>
      </div>
      <div className="urlcard__buttons">
        <ANTD.Popconfirm
          onCancel={false}
          onConfirm={DeleteUrl}
          title="Are you sure delete this Url?"
        >
          <IconButton>
            <DeleteIcon style={{ color: "#d64d4d" }} />
          </IconButton>
        </ANTD.Popconfirm>
        <IconButton onClick={() => CopyText(short)}>
          <FileCopy />
        </IconButton>
      </div>
    </div>
  );
}

export default UrlCard;
