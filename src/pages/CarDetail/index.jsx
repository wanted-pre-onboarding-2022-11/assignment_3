import React, { useContext } from "react";
import { CarDataListContext } from "@/contexts/CarDataListContext";
import { useParams } from "react-router-dom";

const CarDetail = () => {
  const { carDataList, isLoading } = useContext(CarDataListContext);
  const { id } = useParams();
  const carData = carDataList.filter((e) => e.id === Number(id))[0];

  if (isLoading) return <div>로딩중...</div>;

  return <div>{carData.attribute.name}</div>;
};

export default CarDetail;
