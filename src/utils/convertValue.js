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

export const convertName = (name) => {
  switch (name) {
    case "E":
      return "대형";
    case "D":
      return "중형";
    case "C":
      return "소형";
    case "SUV":
      return "SUV";
    default:
      return "";
  }
};

export const convertFuel = (name) => {
  switch (name) {
    case "gasoline":
      return "가솔린";
    case "ev":
      return "전기";
    default:
      return "";
  }
};

export const convertDate = (date) => {
  const newDate = new Date(date);
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const day = week[newDate.getDay()];
  const temp = newDate.toLocaleDateString().split(".");
  const result = `${temp[1]}월 ${temp[2]}일 (${day}) 부터`;

  return result;
};
