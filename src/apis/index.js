import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 2000,
});

export const getCarList = async (params) => {
  const response = await instance.get("/cars", { params });
  return response;
};
