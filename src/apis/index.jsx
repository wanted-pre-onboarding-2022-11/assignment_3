import axios from "../../node_modules/axios/index";

const instance = axios.create({
  baseURL: "https://preonboarding.platdev.net",
  timeout: 2000,
});

export const getAllCarData = async () => {
  let res = await instance.get(`/api/cars`);

  return res.data.payload;
};

export const getCarData = async (selectedMenu) => {
  let res = await instance.get(`api/cars?segment=${selectedMenu}`);

  return res.data.payload;
};
