import React from "react";
import styled from "styled-components";
import { Link } from "../../../node_modules/react-router-dom/dist/index";
import { isNewItem } from "../../utils/convertDay";

const CarItem = ({ car }) => {
  return (
    <Link to={`detail/${car.id}`}>
      <Container>
        <Box>
          {isNewItem(car.createdAt) && <New>신규</New>}
          <div>
            <b>{car.attribute.brand}</b>
            <br />
            <b>{car.attribute.name}</b>
          </div>
          <div>
            <div>
              {car.attribute.segment} / {car.attribute.fuelType}
            </div>
            <div>월 {car.amount} 원 부터</div>
          </div>
        </Box>
        <Image src={car.attribute.imageUrl} alt={car.attribute.name} />
      </Container>
    </Link>
  );
};
export default CarItem;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Image = styled.img`
  width: 152px;
  height: 80px;
  background-color: #d9d9d9;
`;

const Box = styled.div`
  > div > b {
    font-size: 14px;
  }
  > div:first-child {
    margin-bottom: 8px;
  }
  > div:last-child {
    font-size: 12px;
  }
`;

const New = styled.div`
  position: absolute;
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  border-radius: 15px;
  padding: 4px 15px;
  background-color: #0094ff;
  top: 7px;
  right: 7px;
`;
