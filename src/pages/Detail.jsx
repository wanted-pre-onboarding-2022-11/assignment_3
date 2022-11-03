import React, { useEffect } from "react";
import { useParams } from "../../node_modules/react-router-dom/dist/index";
import Header from "@components/Header";
import Layout from "@components/Layout";

import { useCarItemState } from "@contexts/CarItemContext";

import CarItem from "../components/CarItem";

const Detail = () => {
  const { id } = useParams();
  const { carItem, handleGetCarItem } = useCarItemState();

  useEffect(() => {
    handleGetCarItem(id);
  }, [id, handleGetCarItem]);

  return (
    <Layout>
      <Header isBack>차량상세</Header>

      <CarItem carItem={carItem} />
    </Layout>
  );
};

export default Detail;
