import React from "react";
import styled from "styled-components";

const AdditionalProducts = ({ car }) => {
  return (
    <div>
      {car.additionalProducts.length === 0 ? null : <HeadStyled>추가상품</HeadStyled>}

      {car.additionalProducts.map((car, i) => {
        return (
          <Container key={i}>
            <div className="name">{car.name}</div>
            <div>{car.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          </Container>
        );
      })}
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

export default AdditionalProducts;
