import React, { useContext } from "react";
import Header from "@/components/Header/index";
import { useParams } from "../../../node_modules/react-router-dom/dist/index";
import { CarListContext } from "../../context/CarContext";
import { Image, Container, Title, Price, Section, Des, SBox } from "./CarDetail.styled";
import { convertDay } from "../../utils/index";
import { Helmet } from "react-helmet";

function CarDetail() {
  const { id } = useParams();
  const { carList } = useContext(CarListContext);
  const [carDetail] = carList.filter((item) => item.id === +id);
  return (
    <>
      <Helmet
        meta={[
          {
            property: "og:title",
            content: `${carDetail.attribute.brand} / ${carDetail.attribute.name}`,
          },
          { property: "og:description", content: `${carDetail.amount}` },
          { property: "og:image", content: `${carDetail.attribute.imageUrl}` },
        ]}
      />
      {!carDetail ? (
        <>
          <Header title="차량상세" isBackBtn={true} />
          <SBox>불러오는 중</SBox>
        </>
      ) : (
        <div>
          <Header title="차량상세" isBackBtn={true} />
          <Image src={carDetail.attribute.imageUrl} />
          <Container>
            <Title>
              <div>{carDetail.attribute.brand}</div>
              <div>{carDetail.attribute.name}</div>
            </Title>
            <Price>월 {carDetail.amount}원</Price>
          </Container>
          <Section>차량정보</Section>
          <Des>
            <strong>차종</strong>
            <span>{carDetail.attribute.segment}</span>
          </Des>
          <Des>
            <strong>연료</strong>
            <span>{carDetail.attribute.fuelType}</span>
          </Des>
          <Des>
            <strong>이용 가능일</strong>
            <span>{convertDay(carDetail.startDate)}</span>
          </Des>
          <Section>보험</Section>
          {carDetail.insurance.map((item) => (
            <Des key={item.name}>
              <strong>{item.name}</strong>
              <span>{item.description}</span>
            </Des>
          ))}
          {carDetail.additionalProducts.length === 0 ? (
            <></>
          ) : (
            <>
              <Section>추가상품</Section>
              <>
                {carDetail.additionalProducts.map((item) => {
                  return (
                    <Des key={item.name}>
                      <strong>{item.name}</strong>
                      <span>{item.amount}원</span>
                    </Des>
                  );
                })}
              </>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default CarDetail;
