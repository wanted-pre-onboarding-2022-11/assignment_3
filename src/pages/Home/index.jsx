import React from "react";
import Header from "@/components/Header/index";
import TypeBtnList from "@/components/TypeBtnList/index";
import CarList from "@/components/CarList/index";

function Home() {
  return (
    <>
      <Header title="전체차량" isBackBtn={false} />
      <TypeBtnList />
      <CarList />
    </>
  );
}

export default Home;
