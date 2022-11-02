import axios from "axios";
const instance = axios.create({
  baseURL: "https://preonboarding.platdev.net/api/cars",
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

export const getAllType = async () => {
  const response = await instance.get("");
  return response.data;
};
