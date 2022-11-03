import React from "react";
import Header from "../components/Header";
import { useCar } from "@/contexts/carContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const { car } = useCar();

  useEffect(() => {
    if (!car) {
      navigate("/");
    }
  }, [car, navigate]);

  if (!car) {
    return;
  }

  return (
    <>
      <Header title="차량상세" hasBack />
      <img src={car.attribute.imageUrl} alt={car.attribute.name} />
      <span>브랜드 : {car.attribute.brand}</span>
      <div>{car.attribute.name}</div>
      <div>{car.amount}</div>
      <div>{car.segment}</div>
    </>
  );
};

export default Detail;
