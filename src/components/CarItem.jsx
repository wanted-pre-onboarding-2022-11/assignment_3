import React from "react";
import { COLOR_PALETTE, FONT_SIZE } from "@/styles/constants";
import { formattedFuelType, formatNumber, formattedSegment } from "@/utils";
import styled from "styled-components";

const CarItem = ({ car }) => {
  return (
    <Container>
      <CarInfo>
        <CarInfoTitle>
          <h3>{car.attribute.brand}</h3>
          <h4>{car.attribute.name}</h4>
        </CarInfoTitle>
        <Text>
          {formattedSegment[car.attribute.segment]} / {formattedFuelType[car.attribute.fuelType]}
        </Text>
        <Text>월 {formatNumber(car.amount)} 원 부터</Text>
      </CarInfo>
      <img width="30%" src={car.attribute.imageUrl} alt={car.attribute.name} />
    </Container>
  );
};

export default CarItem;

const Container = styled.li`
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR_PALETTE.BACKGROUND_HOVER};
  }
`;

const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CarInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Text = styled.span`
  font-size: ${FONT_SIZE.SMALL};
`;
