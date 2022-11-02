import Api from "./core";

class CarApi extends Api {
  async getCars(query = {}) {
    const response = await this.baseInstance("/cars/", { params: query });
    return response.data.payload;
  }
}

const carApi = new CarApi();

export default carApi;
