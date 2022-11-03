const convertDate = (startDate) => {
  const newDate = new Date(startDate);
  const weekArr = "월화수목금토일".split("");

  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  const dayOfWeek = weekArr[date];

  return `${month}월 ${date}일 (${dayOfWeek})부터`;
};

export { convertDate };
