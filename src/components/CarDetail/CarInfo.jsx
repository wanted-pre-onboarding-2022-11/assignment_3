import React from "react";
import styled from "styled-components";
import DetailInfo from "../common/DetailInfo";
import SubHeader from "../common/SubHeader";

//TODO: utls로 분리
const day = ["월", "화", "수", "목", "금", "토", "일"];
const startDateFormat = (stringDate) => {
  const date = new Date(stringDate);
  return `${date.getMonth() + 1} 월 ${date.getDate()}일 (${day[date.getDay()]}) 부터 `;
};

const CarInfo = ({ segment, fuelType, startDate }) => {
  return (
    <S.CarInfo>
      <SubHeader title="차량정보" />
      <DetailInfo name="차종" description={segment} />
      <DetailInfo name="연료" description={fuelType} />
      <DetailInfo name="이용가능일" description={startDateFormat(startDate)} />
    </S.CarInfo>
  );
};

const S = {
  CarInfo: styled.div``,
};
export default CarInfo;
