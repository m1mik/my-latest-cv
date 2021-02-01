import client from "axios";

const axios = client.create({
  baseURL: "https://my-latest-cv.herokuapp.com",
  withCredentials: true,
  // baseURL: "http://localhost:4000",
});

export default axios;
