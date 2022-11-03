import { CAR_API_URL, CAR_FUELTYPE, CAR_SEGMENT } from "./constant";
import { createInstance } from "./createInstance";

const BASE_URL = "https://preonboarding.platdev.net/api";

class carAPI {
  #API;
  #instance;
  #fuelType;
  #segment;

  constructor() {
    this.#instance = createInstance({
      url: BASE_URL,
      config: {
        timeout: 3000,
      },
    });
    this.#API = CAR_API_URL;
    this.#fuelType = CAR_FUELTYPE;
    this.#segment = CAR_SEGMENT;
  }

  getAllCar() {
    return this.#instance.get(this.#API.cars);
  }

  getFuelTypeSegmentCars({ fuelType, segment }) {
    return this.#instance.get(this.#API.cars, {
      params: {
        fuelType,
        segment,
      },
    });
  }

  getFuelTypeCars({ fuleType }) {
    return this.#instance.get(this.#API.cars, {
      params: {
        fuleType,
      },
    });
  }

  async getSegmentCars({ segment }) {
    return this.#instance.get(this.#API.cars, {
      params: {
        segment,
      },
    });
  }

  async getSmallCars() {
    return this.getSegmentCars({ segment: this.#segment.small });
  }

  async getMediumCars() {
    return this.getSegmentCars({ segment: this.#segment.medium });
  }

  async getLargeCars() {
    return this.getSegmentCars({ segment: this.#segment.large });
  }

  async getSuvCars() {
    return this.getSegmentCars({ segment: this.#segment.suv });
  }
}

export default new carAPI();
