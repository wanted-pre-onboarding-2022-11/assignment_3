import React from "react";
import styled from "styled-components";

const SubHeader = ({ title }) => {
  return (
    <S.SubHeader>
      <h3>{title}</h3>
    </S.SubHeader>
  );
};

const S = {
  SubHeader: styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    height: 4.8rem;
    font-weight: 700;
    font-size: 1.7rem;
    background-color: ${({ theme }) => theme.bgColor["tertiary"]};
    color: ${({ theme }) => theme.fontColor["tertiary"]};
  `,
};
export default SubHeader;
