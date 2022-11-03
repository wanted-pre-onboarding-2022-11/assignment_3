import React from "react";
import styled from "styled-components";

const CarName = ({ car }) => {
  return (
    <Container>
      <div className="brand">{car.attribute.brand}</div>
      <div className="name">{car.attribute.name}</div>
      <div className="price">
        월 {car.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
      </div>
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
