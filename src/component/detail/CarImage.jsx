import React from "react";
import styled from "styled-components";

const CarImage = ({ car }) => {
  return <ImageStyled alt="car" src={car.attribute.imageUrl}></ImageStyled>;
};

const ImageStyled = styled.img`
  height: 205px;
  background-color: #d9d9d9; ;
`;
export default CarImage;
