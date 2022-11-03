import React from "react";
import styled from "styled-components";
import CarHeader from "../components/CarHeader";

const CarDetail = () => {
  return (
    <S.DetailContainer>
      <CarHeader />
      <CarDetail />
    </S.DetailContainer>
  );
};

const S = {
  DetailContainer: styled.div``,
};

export default CarDetail;
