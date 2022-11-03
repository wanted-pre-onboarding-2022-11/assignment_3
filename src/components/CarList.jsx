import React from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import { fuelEnum, segmentEnum } from "@/utils/enum";
import { GSInfoText } from "@styles/styled";
import styled from "styled-components";

const CarList = ({ carList }) => {
  const navigate = useNavigate();
  const { cars, isLoading, isError } = carList;

  const handleClickCarItem = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <SCarListContainer>
      {isLoading && <GSInfoText>불러오는중</GSInfoText>}
      {isError && <GSInfoText>에러가 발생했습니다</GSInfoText>}
      {cars?.length === 0 && <GSInfoText>차량이 없습니다.</GSInfoText>}

      {cars?.map((car) => (
        <SCarItem key={car.id} onClick={() => handleClickCarItem(car.id)}>
          <div>
            <SCarName>
              <span>{car.attribute.brand}</span>
              <span>{car.attribute.name}</span>
            </SCarName>
            <SCarInfo>
              <span>
                {segmentEnum[car.attribute.segment]} / {fuelEnum[car.attribute.fuelType]}
              </span>
              <span>월 {car.amount.toLocaleString("ko-KR")}원 부터</span>
            </SCarInfo>
          </div>

          <div>
            <img src={car.attribute.imageUrl} alt={car.attribute.name} />
          </div>
        </SCarItem>
      ))}
    </SCarListContainer>
  );
};

const SCarListContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const SCarItem = styled.div`
  display: flex;
  justify-content: space-between;

  height: 120px;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};

  cursor: pointer;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > div:nth-child(2) {
    width: 152px;

    img {
      width: 100%;
    }
  }
`;

const SCarName = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

const SCarInfo = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 12px;
  line-height: 15px;
`;

export default CarList;
