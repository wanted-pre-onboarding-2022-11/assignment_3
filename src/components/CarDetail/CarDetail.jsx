import React from "react";
import styled from "styled-components";
import { useLocation } from "../../../node_modules/react-router-dom/dist/index";
import CarAdditionalProducts from "./CarAdditionalProducts";
import CarInfo from "./CarInfo";
import CarInsurance from "./CarInsurance";
import CarMainDetail from "./CarMainDetail";

const CarDetail = () => {
  const {
    state: {
      state: {
        startDate,
        amount,
        attribute: { brand, name, segment, fuelType, imageUrl },
        insurance,
        additionalProducts,
      },
    },
  } = useLocation();

  return (
    <div>
      <S.CarImg>
        <img alt={name} src={imageUrl} />
      </S.CarImg>
      <S.Detail>
        <CarMainDetail name={name} brand={brand} amount={amount} />
        <CarInfo segment={segment} fuelType={fuelType} startDate={startDate} />
        <CarInsurance insurance={insurance} />
        <CarAdditionalProducts additionalProducts={additionalProducts} />
      </S.Detail>
    </div>
  );
};

const S = {
  CarImg: styled.div`
    width: 100%;
    min-height: 20rem;
    display: flex;
    justify-content: center;
    position: relative;
    background-color: ${({ theme }) => theme.color.gray};
    img {
      max-width: 200px;
      width: 100%;
    }
  `,
  Detail: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
export default CarDetail;
