import React from "react";
import styled from "styled-components";
import { carModel } from "../utils/carModel";
import New from "./common/New";

const inDay = (date) => {
  const today = new Date();
  const day = new Date(date);
  return today.getFullYear() === day.getFullYear() && today.getDate() >= day.getDate();
};

const CarItem = ({ brand, name, segment, fuelType, amount, imageUrl, createdAt }) => {
  return (
    <S.CarItemContainer>
      <S.CarInfo>
        <strong>{brand}</strong>
        <strong>{name}</strong>
        <p>{`${segment} / ${carModel.fuelType[fuelType]}`}</p>
        <p>월 {amount} 부터</p>
      </S.CarInfo>
      <S.CarImg>
        {<img src={imageUrl} alt={`${name}사진`} />} {inDay(createdAt) ? <New /> : null}
      </S.CarImg>
    </S.CarItemContainer>
  );
};

const S = {
  arImgDiv: styled.div`
    width: 200px;
    img {
      max-width: 200px;
      width: 100%;
    }
  `,
  CarItemContainer: styled.div`
    width: 100%;
    height: 120px;
    color: ${({ theme }) => theme.black};
    border-bottom: 1px solid ${({ theme }) => theme.black};
    padding: 1.25em 1.55em;
    display: flex;
    justify-content: space-between;
  `,
  CarInfo: styled.div``,
  CarImg: styled.div`
    position: relative;
    width: 20rem;
    background-color: ${({ theme }) => theme.color.gray};
    img {
      max-width: 200px;
      width: 100%;
    }
  `,
};

export default CarItem;
