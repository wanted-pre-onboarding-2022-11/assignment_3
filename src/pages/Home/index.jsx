import React, { useContext } from "react";
import { CarItem, Notification } from "@components/index";
import { CarDataListContext } from "../../contexts/CarDataListContext";

const Home = () => {
  const { carDataList, isLoading } = useContext(CarDataListContext);

  if (isLoading) return <Notification>불러오는 중</Notification>;

  return (
    <>
      {carDataList.map((e) => (
        <CarItem
          key={e.id}
          id={e.id}
          brand={e.attribute.brand}
          name={e.attribute.name}
          segment={e.attribute.segment}
          fuelType={e.attribute.fuelType}
          imageUrl={e.attribute.imageUrl}
          amount={e.amount}
        />
      ))}
      {!carDataList.length && <Notification>차량이 없습니다.</Notification>}
    </>
  );
};

export default Home;
