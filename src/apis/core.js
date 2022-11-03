import axios from "axios";

const { REACT_APP_ALTIMOBILITY_API_END_POINT } = process.env;

const createInstance = (url, config = {}) => {
  return axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
    timeout: 2000,
  });
};

export default class Api {
  API_END_POINT = REACT_APP_ALTIMOBILITY_API_END_POINT;
  constructor() {
    const instance = createInstance(this.API_END_POINT);
    this.baseInstance = instance;
  }
}
