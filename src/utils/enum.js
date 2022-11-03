const segmentEnum = {
  C: "소형",
  D: "중형",
  E: "대형",
  SUV: "SUV",
};

const fuelEnum = {
  gasoline: "가솔린",
  ev: "전기",
  hybrid: "하이브리드",
};

const segmentArr = ["전체", ...Object.values(segmentEnum)];
const fuelArr = ["전체", ...Object.values(fuelEnum)];

Object.freeze(segmentEnum);
Object.freeze(fuelEnum);

export { segmentEnum, fuelEnum, segmentArr, fuelArr };
