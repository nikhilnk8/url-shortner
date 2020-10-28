import axios from "axios";

// login hit point
export const api_login = async (username, password) => {
  try {
    console.log(username);
    console.log(password);
    const response = await axios({
      method: "POST",
      url: "http://urlshortnerbackendnikhil.herokuapp.com/auth/login",
      data: { username: username, password: password },
    });
    console.log(response.data);
    localStorage.setItem("token", response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// get user urls
export const get_user_posts = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "http://urlshortnerbackendnikhil.herokuapp.com/createUrl",
      data: {},
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(response.data);
    // return response.data;
  } catch (error) {
    console.log("err");
    console.log(error.message);
  }
};

// get single user urls
export const get_single_user_url = async (userId) => {
  try {
    console.log("-call--");
    // if (!userId) return;
    const response = await axios({
      method: "post",
      url: "http://urlshortnerbackendnikhil.herokuapp.com/getUrls",
      data: { user: userId },
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
// delete url
export const deleteUrl = async (urlId) => {
  try {
    console.log("-call--");
    if (!urlId) return;
    const response = await axios({
      method: "delete",
      url: "http://urlshortnerbackendnikhil.herokuapp.com/deleteUrl",
      data: { _id: urlId },
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    // console.log(response.data);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
