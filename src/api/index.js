import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 4000,
});

instance.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const getCar = async (query) => {
  const response = await instance.get("", { params: { segment: query } });
  return response.data.payload;
};
