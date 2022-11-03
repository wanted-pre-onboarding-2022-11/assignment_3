import React, { useContext } from "react";
import { CarDataListContext } from "@/contexts/CarDataListContext";
import { useParams } from "react-router-dom";
import { Notification } from "@components/index";
import {
  CarDetailContainer,
  CarThumbnail,
  CarHeader,
  CarTitle,
  CarContent,
} from "./CarDetail.styled";
import {
  convertFuel,
  convertName,
  convertDate,
  convertMoneyString,
} from "../../utils/convertValue";

const CarDetail = () => {
  const { carDataList, isLoading } = useContext(CarDataListContext);
  const { id } = useParams();
  const carData = carDataList.filter((e) => e.id === Number(id))[0];

  if (isLoading) return <Notification>불러오는 중</Notification>;

  return (
    <CarDetailContainer>
      <CarThumbnail image={carData.attribute.imageUrl}></CarThumbnail>
      <CarHeader>
        <p>{carData.attribute.brand}</p>
        <p>{carData.attribute.name}</p>
        <p>월 {convertMoneyString(carData.amount)} 원</p>
      </CarHeader>
      <CarTitle>차량 정보</CarTitle>
      <CarContent>
        <div>
          <p>차종</p>
          <p>{convertName(carData.attribute.segment)}</p>
        </div>
        <div>
          <p>연료</p>
          <p>{convertFuel(carData.attribute.fuelType)}</p>
        </div>
        <div>
          <p>이용 가능일</p>
          <p>{convertDate(carData.startDate)}</p>
        </div>
      </CarContent>
      <CarTitle>보험</CarTitle>
      <CarContent>
        {carData.insurance.map((e) => (
          <div key={e.name}>
            <p>{e.name}</p>
            <p>{e.description}</p>
          </div>
        ))}
      </CarContent>
      <CarTitle>추가상품</CarTitle>
      <CarContent>
        {carData.additionalProducts.map((e) => (
          <div key={e.name}>
            <p>{e.name}</p>
            <p>{e.amount}</p>
          </div>
        ))}
      </CarContent>
    </CarDetailContainer>
  );
};

export default CarDetail;
