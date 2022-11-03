import React from "react";
import styled from "styled-components";

const CarMainDetail = ({ brand, name, amount }) => {
  return (
    <S.MainDetail>
      <strong>{brand}</strong>
      <strong>{name}</strong>
      <p>월 {amount} 원</p>
    </S.MainDetail>
  );
};

const S = {
  MainDetail: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    font-size: inherit;
    strong {
      font-weight: 700;
      font-size: 1.4rem;
    }
    > :nth-child(2) {
      margin-bottom: 0.8rem;
    }
  `,
};

export default CarMainDetail;
