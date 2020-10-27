import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import UrlCard from "../UrlCard/UrlCard";
import "./Urls.css";
import { Button } from "@material-ui/core";
import { Form, Modal, Input, message } from "antd";
import * as ANTD from "antd";
import "antd/dist/antd.css";

function Urls() {
  const [urls, setUrls] = useState([]);
  const [modal, setModal] = useState(false);
  const { decodedToken } = useJwt(localStorage.token);
  const userId = decodedToken !== null ? decodedToken.userId : "";

  const [NewURLForm] = ANTD.Form.useForm();

  useEffect(() => {
    getUrls();
    // eslint-disable-next-line
  }, [userId]);

  const getUrls = () => {
    Axios({
      method: "post",
      url: "https://urlshortnerbackendnikhil.herokuapp.com/getUrls",
      data: { user: userId },
    }).then(({ data }) => {
      console.log(data);
      setUrls(data);
    });
  };

  const onFormSubmit = () => {
    getUrls();
    setModal(false);
  };

  const AddUrl = async (values) => {
    let body = { user: userId, ...values, createdOn: Date.now() };
    const response = await Axios({
      method: "post",
      url: "https://urlshortnerbackendnikhil.herokuapp.com/createUrl",
      data: { user: userId, ...body },
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    response.status === 200
      ? message.success("URL Added Successfully")
      : message.error("Something went wrong");
    onFormSubmit();
    console.log(response.data);
  };

  const GeneralModal = () => {
    return (
      <Modal
        title="Add New URL"
        visible={modal}
        onCancel={() => setModal(false)}
        footer={true}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={AddUrl}
          form={NewURLForm}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: " " }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="URL"
            name="orignal"
            rules={[{ required: true, message: " " }]}
          >
            <Input />
          </Form.Item>
          <ANTD.Button type="primary" htmlType="submit">
            Submit
          </ANTD.Button>
        </Form>
      </Modal>
    );
  };
  return (
    <div className="urls">
      <Button
        variant="contained"
        color="primary"
        onClick={() => setModal(true)}
        style={{ marginTop: 20 }}
      >
        Add New URL
      </Button>
      <GeneralModal />

      {urls.length > 0 ? (
        urls.map((url) => {
          return (
            <UrlCard
              key={url._id}
              orignal={url.orignal}
              short={url.short}
              _id={url._id}
              onRefresh={getUrls}
              name={url.name}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Urls;
