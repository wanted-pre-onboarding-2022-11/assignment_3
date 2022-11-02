import React, { useContext } from "react";
import TypeBtn from "@/components/TypeBtn/index";
import { Container } from "./TypeBtn.styled";
import { CarListContext } from "../../context/CarContext";

function TypeBtnList() {
  const { handleCarType, isFetch } = useContext(CarListContext);
  const handleCar = (_text) => {
    handleCarType(_text);
  };
  return (
    <Container>
      {isFetch.map((carType) => {
        return (
          <TypeBtn
            key={carType.text}
            text={carType.text}
            isActive={carType.isActive}
            handleCar={handleCar}
          />
        );
      })}
    </Container>
  );
}

export default TypeBtnList;
