import React from "react";
import { Link } from "../../../node_modules/react-router-dom/dist/index";
import { Container, Title, Info, Image } from "./CarListItem.styled";
function CarListItem({ car }) {
  return (
    <Link to={`/detail/${car.id}`}>
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
    </Link>
  );
}

export default CarListItem;
