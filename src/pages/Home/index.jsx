import React from "react";
import { TagList } from "@/components/index";
import Header from "../../components/Header/index";

const Home = () => {
  return (
    <>
      <Header title="전체차량" />
      <TagList />
    </>
  );
};

export default Home;
