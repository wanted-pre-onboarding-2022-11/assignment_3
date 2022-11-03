import React from "react";
import { TagList } from "@/components/index";
import Header from "../../components/Header/index";
import { useCars } from "../../context/CarDataListContext";

const Home = () => {
  const { carDataList } = useCars();
  console.log("carDataList", carDataList);
  return (
    <>
      <Header title="전체차량" />
      <TagList />
    </>
  );
};

export default Home;
