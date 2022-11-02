export const convertSegment = (name) => {
  switch (name) {
    case "전체":
      return "All";
    case "대형":
      return "E";
    case "중형":
      return "D";
    case "소형":
      return "C";
    case "SUV":
      return "SUV";
    default:
      return "";
  }
};
