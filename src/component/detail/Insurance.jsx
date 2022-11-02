import React from "react";
import styled from "styled-components";

const Insurance = () => {
  return (
    <div>
      <HeadStyled>보험</HeadStyled>
      <Container>
        <div className="name">차종</div>
        <div>차종</div>
      </Container>
      <Container>
        <div className="name">연료</div>
        <div>차종</div>
      </Container>
      <Container>
        <div className="name">이용 가능일</div>
        <div>차종</div>
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
