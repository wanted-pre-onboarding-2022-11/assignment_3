import React from "react";
import styled from "styled-components";

const CarName = () => {
  return (
    <Container>
      <div className="brand">brand</div>
      <div className="name">name</div>
      <div className="price"> 월원</div>
    </Container>
  );
};
const Container = styled.div`
  padding: 20px;
  .brand {
    font-size: 20px;
    font-weight: 700;
  }
  .name {
    font-size: 24px;
    margin-bottom: 34px;
    font-weight: 700;
  }
  .price {
    text-align: end;
    padding: 2px;
  }
`;

export default CarName;
