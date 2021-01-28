import client from "axios";

const axios = client.create({
  baseURL: process.env.BASE_URL || "http://localhost:4000",
  withCredentials: true,
});

export default axios;
