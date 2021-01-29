import client from "axios";

const axios = client.create({
  baseURL: "https://my-latest-cv.herokuapp.com",
  withCredentials: true,
});

export default axios;
