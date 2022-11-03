import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Detail = () => {
  const { id } = useParams();
  return (
    <>
      <Header title="차량상세" hasBack />
      {id}
    </>
  );
};

export default Detail;
