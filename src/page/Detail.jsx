import AdditionalProducts from "../component/detail/AdditionalProducts";
import CarDesc from "../component/detail/CarDesc";
import CarImage from "../component/detail/CarImage";
import CarName from "../component/detail/CarName";
import Insurance from "../component/detail/Insurance";
import Top from "../component/detail/Top";
import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Top />
      <CarImage />
      <CarName />
      <CarDesc />
      <Insurance />
      <AdditionalProducts />
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  min-width: 360px;
  max-width: 450px;
`;
export default Detail;
