import React from "react";
import styled from "styled-components";
import { formatAmout } from "../../utils/formatAmount";

const CarMainDetail = ({ brand, name, amount }) => {
  return (
    <S.MainDetail>
      <strong>{brand}</strong>
      <strong>{name}</strong>
      <S.AmountContainer>
        <p>월 {formatAmout(amount)} 원</p>
      </S.AmountContainer>
    </S.MainDetail>
  );
};

const S = {
  MainDetail: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    font-size: inherit;
    padding: 2rem;
    strong {
      font-weight: 700;
      font-size: 1.4rem;
    }
    > :first-child {
      font-size: 2rem;
    }

    > :nth-child(2) {
      font-size: 2.4rem;
      margin-bottom: 0.8rem;
    }
  `,

  AmountContainer: styled.span`
    text-align: right;
    font-weight: 400;
    font-size: 1.7rem;
  `,
};

export default CarMainDetail;
