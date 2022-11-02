import React from "react";
import Header from "@/components/Header/index";
import TypeBtnList from "@/components/TypeBtnList/index";

function CarList() {
  return (
    <>
      <Header title="전체차량" isBackBtn={false} />
      <TypeBtnList />
    </>
  );
}

export default CarList;
