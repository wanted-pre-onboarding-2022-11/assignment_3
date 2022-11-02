import React from "react";
import { useCarInfo } from "../contest/CarProvider";

const CarMain = () => {
  const carInfo = useCarInfo();

  return <div>Main!!!!!!!</div>;
};

export default CarMain;
