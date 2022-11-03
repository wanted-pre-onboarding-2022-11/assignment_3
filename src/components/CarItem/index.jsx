import React from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { convertName } from "@utils/convertValue";
import { CarItemContainer, LeftItem, RightItem } from "./CarItem.styled";
import { convertFuel, convertMoneyString } from "../../utils/convertValue";

const CarItem = ({ id, brand, name, segment, fuelType, imageUrl, amount }) => {
  const navigate = useNavigate();
  const handleTargetPage = (target) => {
    navigate(`/detail/${target}`);
  };

  return (
    <CarItemContainer onClick={() => handleTargetPage(id)}>
      <LeftItem>
        <div>
          <p>{brand}</p>
          <p>{name}</p>
        </div>
        <div>
          <p>
            <span>{convertName(segment)}</span>
            <span> / </span>
            <span>{convertFuel(fuelType)}</span>
          </p>
          <p>월 {convertMoneyString(amount)} 원 부터</p>
        </div>
      </LeftItem>
      <RightItem image={imageUrl} />
    </CarItemContainer>
  );
};

export default CarItem;
