import axios from "../../node_modules/axios/index";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default instance;
