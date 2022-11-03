import React from "react";
import styled from "styled-components";

const CarInfo = ({ segment, fuelType, startDate }) => {
  return (
    <S.CarInfo>
      <h3>차량정보</h3>
      <div>
        <span>
          <strong>차종</strong>
          <p>{segment}</p>
        </span>
        <span>
          <strong>연료</strong>
          <p>{fuelType}</p>
        </span>
        <span>
          <strong>이용가능일</strong>
          <p>{startDate}</p>
        </span>
      </div>
    </S.CarInfo>
  );
};

const S = {
  CarInfo: styled.div``,
};
export default CarInfo;
