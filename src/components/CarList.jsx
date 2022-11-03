import React from "react";
import CarItem from "./CarItem";
import Message from "./common/Message";

const CarList = ({ carInfo, isLoading }) => {
  if (isLoading) return <Message message="불러오는 중" />;

  return (
    <>
      {carInfo.length > 0 ? (
        carInfo.map((car) => {
          const {
            attribute: { brand, name, segment, fuelType, imageUrl },
            amount,
            createdAt,
          } = car;
          return (
            <CarItem
              key={car.id}
              brand={brand}
              name={name}
              segment={segment}
              fuelType={fuelType}
              amount={amount}
              imageUrl={imageUrl}
              createdAt={createdAt}
            />
          );
        })
      ) : (
        <Message message="차량이 없습니다." />
      )}
    </>
  );
};

export default CarList;
