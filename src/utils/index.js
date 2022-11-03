export const convertDay = (date) => {
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const weeks = WEEKDAY[newDate.getDay()];
  return `${month}월 ${day}일 (${weeks}) 부터`;
};
