import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/eclone12024/us-central1/api",
  baseURL: "https://api-nqygru2wjq-uc.a.run.app"
});

export { axiosInstance };