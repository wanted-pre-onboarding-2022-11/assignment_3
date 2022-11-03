import React, { useContext } from "react";
import { CarListContext } from "@/context/CarContext";
import { Container, SBox } from "./CarList.styled";
import CarListItem from "../CarListItem/index";

function CarList() {
  const { carList, isLoading } = useContext(CarListContext);

  return (
    <Container>
      {isLoading ? (
        <SBox>불러오는 중</SBox>
      ) : carList?.length === 0 ? (
        <SBox>차량이 없습니다.</SBox>
      ) : (
        carList?.map((car) => <CarListItem key={car.id} car={car} />)
      )}
    </Container>
  );
}

export default CarList;
