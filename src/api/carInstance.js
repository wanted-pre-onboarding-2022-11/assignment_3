import { CAR_API_URL, CAR_FUELTYPE } from "./constant";
import { createInstance } from "./createInstance";

const BASE_URL = "https://preonboarding.platdev.net/api";

class carInstance {
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

  getSegmentCars({ segment }) {
    return this.#instance.get(this.#API.cars, {
      params: {
        segment,
      },
    });
  }

  getSmallCars() {
    return this.getSegmentCars({ segment: this.#segment.small });
  }

  getMediumCars() {
    return this.getSegmentCars({ segment: this.#segment.medium });
  }

  getLargeCars() {
    return this.getSegmentCars({ segment: this.#segment.large });
  }

  getSuvCars() {
    return this.getSegmentCars({ segment: this.#segment.suv });
  }
}

export default new carInstance();
