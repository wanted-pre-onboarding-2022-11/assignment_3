import React from "react";
import styled from "styled-components";

const CarDesc = ({ car }) => {
  const segment = { C: "소형", D: "중형", E: "대형", SUV: "SUV" };
  const fuelType = { gasoline: "가솔린", ev: "전기", hybrid: "하이브리드" };
  return (
    <div>
      <HeadStyled>차량 정보</HeadStyled>
      <Container>
        <div className="name">차종</div>
        <div> {segment[car.attribute.segment]} </div>
      </Container>
      <Container>
        <div className="name">연료</div>
        <div>{fuelType[car.attribute.fuelType]}</div>
      </Container>
      <Container>
        <div className="name">이용 가능일</div>
        <div>{car.insurance.startDate}</div>
      </Container>
    </div>
  );
};

const HeadStyled = styled.div`
  background-color: #0094ff;
  color: white;
  padding: 13px 0 13px 20px;
  font-size: 17px;
  font-weight: 700;
`;
const Container = styled.div`
  display: flex;
  padding: 13px 19px;
  justify-content: space-between;
  .name {
    font-weight: 700;
    font-size: 17px;
  }
`;

export default CarDesc;
