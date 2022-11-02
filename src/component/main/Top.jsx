import React from "react";
import styled from "styled-components";
const Top = () => {
  return (
    <>
      <TopStyled>전체차량</TopStyled>
    </>
  );
};

const TopStyled = styled.div`
  border-bottom: 1px solid black;
  font-weight: 700;
  font-size: 17px;
  text-align: center;
  padding: 20px 164px;
`;
export default Top;
