import { useCarInfoContext } from "../../contexts/carInfo";
import * as S from "@pages/CarDetail/CarDetail.styled";
import Image from "../../components/common/Image/index";
import { FUEL_TYPE, SEGMENT } from "../../constants/carInfo";
import CarDetailList from "../../components/CarDetailList";

const CarDetail = () => {
  const { selectedCarInfo: carInfo } = useCarInfoContext();
  const { amount } = carInfo;
  const { brand, name, imageUrl } = carInfo.attribute;
  const carContents = createCarContents(carInfo);

  return (
    <S.CarDetail>
      <S.Thumbnail>
        <Image url={imageUrl} size="big" />
      </S.Thumbnail>
      <S.TitleWrapper>
        <S.Title type="sub">{brand}</S.Title>
        <S.Title type="main">{name}</S.Title>
        <S.Title type="amount">{`월 ${amount.toLocaleString()}원`}</S.Title>
      </S.TitleWrapper>
      {Object.keys(carContents).map((title) => (
        <CarDetailList title={title} contents={carContents[title]} />
      ))}
    </S.CarDetail>
  );
};

const createCarContents = (carInfo) => {
  const { startDate, insurance, additionalProducts } = carInfo;
  const { segment, fuelType } = carInfo.attribute;

  const carContents = {
    "차량 정보": [
      { name: "차종", contents: SEGMENT[segment] },
      { name: "연료", contents: FUEL_TYPE[fuelType] },
      { name: "이용 가능일", contents: startDate },
    ],
  };

  if (insurance && insurance.length > 0) {
    carContents["보험"] = insurance.map(({ name, description }) => ({
      name,
      contents: description,
    }));
  }

  if (additionalProducts && additionalProducts.length > 0) {
    carContents["추가 상품"] = additionalProducts.map(({ name, amount }) => ({
      name,
      contents: `월 ${amount.toLocaleString()}원`,
    }));
  }

  return carContents;
};

export default CarDetail;
