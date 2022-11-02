import Top from "../component/main/Top";
import CarButton from "../component/main/CarButton";
import Car from "../component/main/Car";
import None from "../component/main/None";
import { useEffect, useState } from "react";
import { carAPI } from "../api/api";

import React from "react";
import styled from "styled-components";
const Main = () => {
  const [cars, setCars] = useState();

  useEffect(() => {
    carAPI.getAllCar().then((res) => {
      setCars(res.payload);
    });
  }, []);

  return (
    <Container>
      <Top />
      <CarButton setCars={setCars} cars={cars} />
      {cars?.length === 0 ? (
        <None />
      ) : (
        cars?.map((car) => {
          return <Car key={car.id} car={car} />;
        })
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  min-width: 360px;
  max-width: 450px;
`;
export default Main;
