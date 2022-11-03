import React from "react";
import styled from "styled-components";
import { useParams } from "../../../node_modules/react-router-dom/dist/index";
import DetailDes from "../../components/DetailDes/index";
import DetailTitle from "../../components/DetailTitle/index";
import Header from "../../components/Header/index";
import { useCars } from "../../context/CarDataListContext";
import { newDate } from "../../utils/convertDay";

const Detail = () => {
  const { carDataList } = useCars();
  const { id } = useParams();
  const carData = carDataList.filter((e) => e.id === Number(id))[0];
  if (!carData) {
    return;
  }

  return (
    <>
      <Header title="상세차량" hasBack />
      <Image src={carData.attribute.imageUrl} alt={carData.attribute.name} />
      <BrandBox>
        <div>{carData.attribute.brand}</div>
        <div>{carData.attribute.name}</div>
        <div>월 {carData.amount} 원</div>
      </BrandBox>
      <DetailTitle title="차량정보" />
      <>
        <DetailDes title="차종" des={carData.attribute.segment} />
        <DetailDes title="연료" des={carData.attribute.fuelType} />
        <DetailDes title="이용 가능일" des={newDate(carData.startDate)} />
      </>
      <DetailTitle title="보험" />
      {carData.insurance.map((item) => (
        <DetailDes key={item.name} title={item.name} des={item.description} />
      ))}
      {carData.additionalProducts.length === 0 ? (
        <></>
      ) : (
        <>
          <DetailTitle title="추가상품" />
          <>
            {carData.additionalProducts.map((item) => {
              return <DetailDes key={item.name} title={item.name} des={`${item.amount}원`} />;
            })}
          </>
        </>
      )}
    </>
  );
};

export default Detail;

const Image = styled.img`
  width: 100%;
  height: 205px;
  background-color: #d9d9d9;
`;

const BrandBox = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 24px;
  font-weight: 800;
  > div:first-child {
    font-size: 20px;
  }
  > div:last-child {
    font-size: 17px;
    font-weight: 400;
    text-align: right;
  }
`;
