import React from "react";
import { useParams } from "../../node_modules/react-router-dom/dist/index";

const CarDetail = () => {
  const { id } = useParams();
  return <div>Detail{id}</div>;
};

export default CarDetail;
