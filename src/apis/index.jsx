import axios from "../../node_modules/axios/index";

const instance = axios.create({
  baseURL: "https://preonboarding.platdev.net/api/cars",
  timeout: 2000,
});

export const getCarData = async (selectedMenu) => {
  const res = await instance.get(``, { params: { segment: selectedMenu } });

  return res.data.payload;
};
