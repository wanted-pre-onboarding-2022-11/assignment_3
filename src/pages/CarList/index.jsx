import React from "react";
import Header from "@/components/Header/index";
import TypeBtnList from "@/components/TypeBtnList/index";
import { CarListContextProvider } from "../../context/CarContext";

function CarList() {
  return (
    <CarListContextProvider>
      <Header title="전체차량" isBackBtn={false} />
      <TypeBtnList />
    </CarListContextProvider>
  );
}

export default CarList;
