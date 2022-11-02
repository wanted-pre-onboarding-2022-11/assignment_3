import axios from "axios";

export const carAPI = {
  getAllCar: async () => {
    const response = await axios.get("https://preonboarding.platdev.net/api/cars");
    return response.data;
  },
  getECar: async () => {
    const response = await axios.get("https://preonboarding.platdev.net/api/cars?segment=E");
    return response.data;
  },
  getDCar: async () => {
    const response = await axios.get("https://preonboarding.platdev.net/api/cars?segment=D");
    return response.data;
  },
  getCCar: async () => {
    const response = await axios.get("https://preonboarding.platdev.net/api/cars?segment=C");
    return response.data;
  },
};
