import React from "react";
import styled from "styled-components";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";

const Car = ({ car }) => {
  const segment = { C: "소형", D: "중형", E: "대형", SUV: "SUV" };
  const fuelType = { gasoline: "가솔린", ev: "전기", hybrid: "하이브리드" };

  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate(`/detail/:${car.id}`);
      }}
    >
      <ContentDiv>
        <span className="bold">{car.attribute.brand}</span>
        <span className="bold" id="name">
          {car.attribute.name}
        </span>
        <span className="basic">
          {segment[car.attribute.segment]} / {fuelType[car.attribute.fuelType]}
        </span>
        <span className="basic">
          월 {car.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 부터
        </span>
      </ContentDiv>
      <CarImg alt="img" src={car.attribute.imageUrl} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 19px;
  border-bottom: 1px solid black;
  justify-content: space-between;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  .bold {
    font-size: 14px;
    font-weight: 700;
  }
  #name {
    margin-bottom: 8px;
  }
  .basic {
    font-weight: 500;
    font-size: 12px;
  }
`;

const CarImg = styled.img`
  width: 152px;
  height: 80px;
  background-color: #d9d9d9;
`;
export default Car;
