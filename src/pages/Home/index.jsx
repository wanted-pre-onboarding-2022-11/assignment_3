import React from "react";
import Header from "@/components/Header/index";
import TypeBtnList from "@/components/TypeBtnList/index";
import CarList from "@/components/CarList/index";
import { CarListContextProvider } from "@/context/CarContext";

function Home() {
  return (
    <CarListContextProvider>
      <Header title="전체차량" isBackBtn={false} />
      <TypeBtnList />
      <CarList />
    </CarListContextProvider>
  );
}

export default Home;
