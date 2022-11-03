import React from "react";
import Header from "../components/Header";
import { useCar } from "@/contexts/carContext";

const Detail = () => {
  const { car } = useCar();
  //console.log(car);
  return (
    <>
      <Header title="차량상세" hasBack />
      {car.attribute.name}
    </>
  );
};

export default Detail;
