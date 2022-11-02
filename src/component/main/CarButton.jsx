import React from "react";
import styled from "styled-components";
import { carAPI } from "../../api/api";

const CarButton = ({ setCars }) => {
  return (
    <ButtonDiv>
      <Button
        onClick={() => {
          carAPI.getAllCar().then((res) => setCars(res.payload));
        }}
      >
        전체
      </Button>
      <Button
        onClick={() => {
          carAPI.getECar().then((res) => setCars(res.payload));
        }}
      >
        대형
      </Button>
      <Button
        onClick={() => {
          carAPI.getDCar().then((res) => setCars(res.payload));
        }}
      >
        중형
      </Button>
      <Button
        onClick={() => {
          carAPI.getCCar().then((res) => setCars(res.payload));
        }}
      >
        소형
      </Button>
    </ButtonDiv>
  );
};
const ButtonDiv = styled.div`
  border-bottom: 1px solid black;
  padding: 6px 8px 6px 12px;
`;

const Button = styled.button`
  background-color: #d9d9d9;
  color: black;
  border-radius: 30px;
  width: 62px;
  height: 27px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  margin-right: 6px;
`;
export default CarButton;
