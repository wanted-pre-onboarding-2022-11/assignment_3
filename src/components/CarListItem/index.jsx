import React from "react";
import { Container, Title, Info, Image } from "./CarListItem.styled";
function CarListItem({ car }) {
  return (
    <Container>
      <div>
        <Title>
          {car.attribute.brand}
          <br />
          {car.attribute.name}
        </Title>
        <Info>
          {car.attribute.segment} / {car.attribute.fuelType}
          <br />월 {car.amount} 원 부터
        </Info>
      </div>
      <Image src={car.attribute.imageUrl} alt={car.attribute.name}></Image>
    </Container>
  );
}

export default CarListItem;
