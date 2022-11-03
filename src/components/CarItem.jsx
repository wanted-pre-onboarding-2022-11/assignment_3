import React from "react";

import { convertDate } from "@utils/date";
import { fuelEnum, segmentEnum } from "@utils/enum";

import { GSInfoText } from "@styles/styled";
import styled from "styled-components";

const CarItem = ({ carItem }) => {
  const { car, isLoading, isError } = carItem;

  return (
    <>
      {isLoading && <GSInfoText>불러오는중</GSInfoText>}
      {isError && <GSInfoText>에러가 발생했습니다</GSInfoText>}
      {car && (
        <>
          <SCarImage>
            <img src={car.attribute.imageUrl} alt="carItem" />
          </SCarImage>

          <SCarInfo>
            <span>{car.attribute.brand}</span>
            <span>{car.attribute.name}</span>
            <span>월 {car.amount.toLocaleString("ko-KR")}원</span>
          </SCarInfo>

          <SSubTitle>차량정보</SSubTitle>
          <SContent>
            <span>차종</span>
            <span>{segmentEnum[car.attribute.segment]}</span>
          </SContent>
          <SContent>
            <span>연료</span>
            <span>{fuelEnum[car.attribute.fuelType]}</span>
          </SContent>
          <SContent>
            <span>이용 가능일</span>
            <span>{convertDate(car.startDate)}</span>
          </SContent>

          {car.insurance.length !== 0 && (
            <>
              <SSubTitle>보험</SSubTitle>
              {car.insurance.map((item) => (
                <SContent key={item.name}>
                  <span>{item.name}</span>
                  <span>{item.description}</span>
                </SContent>
              ))}
            </>
          )}

          {car.additionalProducts.length !== 0 && (
            <>
              <SSubTitle>추가상품</SSubTitle>
              {car.additionalProducts.map((item) => (
                <SContent key={item.name}>
                  <span>{item.name}</span>
                  <span>월 {item.amount.toLocaleString("ko-KR")}원</span>
                </SContent>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

const SCarImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 205px;

  img {
    width: 100%;
  }
`;

const SCarInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  > span:nth-child(1) {
    font-size: 20px;
    font-weight: 700;
  }

  > span:nth-child(2) {
    font-size: 24px;
    font-weight: 700;
  }

  > span:nth-child(3) {
    height: 48px;
    margin-top: 21px;
    text-align: end;
  }
`;

const SSubTitle = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 48px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.color.blue};

  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;

const SContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 48px;
  padding: 0 20px;

  font-size: 17px;

  > span:nth-child(1) {
    font-weight: 700;
  }
`;

export default CarItem;
