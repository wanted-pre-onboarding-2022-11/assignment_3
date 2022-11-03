import React from "react";
import { useCarListState } from "@contexts/CarListContext";

import Header from "@components/Header";
import CarList from "@components/CarList";
import Layout from "@components/Layout";
import Nav from "@components/Nav";

const Main = () => {
  const { carList, handleClickCategory } = useCarListState();

  return (
    <Layout>
      <Header>전체차량</Header>

      <Nav handleClickCategory={handleClickCategory} />

      <CarList carList={carList} />
    </Layout>
  );
};

export default Main;
