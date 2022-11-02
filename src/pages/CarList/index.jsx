import React from "react";
import Header from "@/components/Header/index";
import TypeBtnList from "@/components/TypeBtnList/index";
import { CarListContextProvider } from "../../context/CarContext";
import CarListItem from "../../components/CarListItem/index";

function Home() {
  return (
    <CarListContextProvider>
      <Header title="전체차량" isBackBtn={false} />
      <TypeBtnList />
      <CarListItem />
    </CarListContextProvider>
  );
}

export default Home;
