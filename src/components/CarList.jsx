import React from "react";
import styled from "styled-components";
import { Link } from "../../node_modules/react-router-dom/dist/index";
import CarItem from "./CarItem";
import Message from "./common/Message";

const CarList = ({ carInfo, isLoading }) => {
  if (isLoading) return <Message message="불러오는 중" />;

  return (
    <S.CarListContainer>
      {carInfo.length > 0 ? (
        carInfo.map((car) => {
          const {
            id,
            amount,
            createdAt,
            attribute: { brand, name, segment, fuelType, imageUrl },
          } = car;
          return (
            <Link key={car.id} to={`detail/${id}`}>
              <CarItem
                brand={brand}
                name={name}
                segment={segment}
                fuelType={fuelType}
                amount={amount}
                imageUrl={imageUrl}
                createdAt={createdAt}
              />
            </Link>
          );
        })
      ) : (
        <Message message="차량이 없습니다." />
      )}
    </S.CarListContainer>
  );
};

const S = {
  CarListContainer: styled.ul``,
};

export default CarList;
