import React, { useState } from "react";
import styled from "styled-components";
import { carAPI } from "../../api/api";

const CarButton = ({ setCars, setLoading }) => {
  const [all, setAll] = useState(true);
  const [E, setE] = useState(false);
  const [D, setD] = useState(false);
  const [C, setC] = useState(false);
  return (
    <ButtonDiv>
      <button
        className={all ? "selected-button" : "button"}
        onClick={() => {
          setLoading(true);
          setAll(true);
          setE(false);
          setD(false);
          setC(false);
          carAPI.getAllCar().then((res) => {
            setLoading(false);
            setCars(res.payload);
          });
        }}
      >
        전체
      </button>
      <button
        className={E ? "selected-button" : "button"}
        onClick={() => {
          setLoading(true);
          setAll(false);
          setE(true);
          setD(false);
          setC(false);
          carAPI.getECar().then((res) => {
            setLoading(false);
            setCars(res.payload);
          });
        }}
      >
        대형
      </button>
      <button
        className={D ? "selected-button" : "button"}
        onClick={() => {
          setLoading(true);
          setAll(false);
          setE(false);
          setD(true);
          setC(false);
          carAPI.getDCar().then((res) => {
            setLoading(false);
            setCars(res.payload);
          });
        }}
      >
        중형
      </button>
      <button
        className={C ? "selected-button" : "button"}
        onClick={() => {
          setLoading(true);
          setAll(false);
          setE(false);
          setD(false);
          setC(true);
          carAPI.getCCar().then((res) => {
            setLoading(false);
            setCars(res.payload);
          });
        }}
      >
        소형
      </button>
    </ButtonDiv>
  );
};
const ButtonDiv = styled.div`
  border-bottom: 1px solid black;
  padding: 6px 8px 6px 12px;
  .button {
    background-color: #d9d9d9;
    color: black;
    border-radius: 30px;
    width: 62px;
    height: 27px;
    font-weight: 700;
    font-size: 14px;
    border: none;
    margin-right: 6px;
  }
  .selected-button {
    background-color: black;
    color: white;
    border-radius: 30px;
    width: 62px;
    height: 27px;
    font-weight: 700;
    font-size: 14px;
    border: none;
    margin-right: 6px;
  }
`;

export default CarButton;
