import React from "react";
import styled from "styled-components";
import CarDetail from "../components/CarDetail/CarDetail";
import CarDetailHeader from "../components/CarDetail/CarDetailHeader";

const CarDetailPage = () => {
  return (
    <S.DetailContainer>
      <CarDetailHeader />
      <CarDetail />
    </S.DetailContainer>
  );
};

const S = {
  DetailContainer: styled.div``,
};

export default CarDetailPage;
