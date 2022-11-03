import React from "react";
import styled from "styled-components";

const DetailInfo = ({ name, description }) => {
  return (
    <S.Info>
      <span>
        <strong>{name}</strong>
        <p>{description}</p>
      </span>
    </S.Info>
  );
};

const S = {
  Info: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1.2rem 2rem;
    span {
      display: flex;
      justify-content: space-between;
    }
    strong {
      font-weight: 700;
      font-size: 1.7rem;
    }
    p {
      font-weight: 400;
      font-size: 1.7rem;
    }
  `,
};
export default DetailInfo;
