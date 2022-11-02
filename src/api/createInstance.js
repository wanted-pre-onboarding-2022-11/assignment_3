import axios from "axios";

export const createInstance = ({ url, config }) => {
  return axios.create({
    baseURL: url,
    ...config,
  });
};
