export const formattedSegment = {
  C: "소형",
  D: "중형",
  E: "대형",
  SUV: "SUV",
};

export const formattedFuelType = {
  gasoline: "가솔린",
  ev: "전기",
  hybrid: "하이브리드",
};

export const formattedAll = { ...formattedSegment, ...formattedFuelType };

export const formatNumber = (number) => number.toLocaleString("ko-KR");

export const makeQueryString = (queryObj) =>
  Object.entries(queryObj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
