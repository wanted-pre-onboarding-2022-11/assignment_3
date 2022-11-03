export const carModel = {
  fuelType: {
    gasoline: "가솔린",
    ev: "전기",
    hybid: "하이브리드",
  },
  segment: {
    C: "소형",
    D: "중형",
    E: "대형",
  },
};

export const getCarSegment = () => {
  return Object.values(carModel.segment);
};

export const getCarFuelType = () => {
  return Object.values(carModel.fuelType);
};
