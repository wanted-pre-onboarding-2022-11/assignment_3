import React from "react";
import styled from "styled-components";

const Insurance = ({ car }) => {
  return (
    <div>
      <HeadStyled>보험</HeadStyled>
      <Container>
        <div className="name">대인</div>
        <div>{car.insurance[0].description}</div>
      </Container>
      <Container>
        <div className="name">대물</div>
        <div>{car.insurance[1].description}</div>
      </Container>
    </div>
  );
};

const HeadStyled = styled.div`
  background-color: #0094ff;
  color: white;
  padding: 13px 0 13px 20px;
  font-size: 17px;
  font-weight: 700;
`;
const Container = styled.div`
  display: flex;
  padding: 13px 19px;
  justify-content: space-between;
  .name {
    font-weight: 700;
    font-size: 17px;
  }
`;

export default Insurance;
