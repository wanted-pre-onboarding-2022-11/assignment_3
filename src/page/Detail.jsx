import AdditionalProducts from "../component/detail/AdditionalProducts";
import CarDesc from "../component/detail/CarDesc";
import CarImage from "../component/detail/CarImage";
import CarName from "../component/detail/CarName";
import Insurance from "../component/detail/Insurance";
import Top from "../component/detail/Top";
import React from "react";
import styled from "styled-components";
import { useLocation } from "../../node_modules/react-router-dom/dist/index";

const Detail = () => {
  const location = useLocation();
  const car = location.state.car;
  console.log(car);

  return (
    <Container>
      <Top />
      <CarImage car={car} />
      <CarName car={car} />
      <CarDesc car={car} />
      <Insurance car={car} />
      <AdditionalProducts car={car} />
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  min-width: 360px;
  max-width: 450px;
`;
export default Detail;
