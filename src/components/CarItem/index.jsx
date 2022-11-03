import { useNavigate } from "react-router-dom";

import ROUTE_PATH from "@/routes/routerPaths";
import Image from "@components/common/Image";
import * as S from "@components/CarItem/CarItem.styled";
import { useCarInfoContext } from "@contexts/carInfo";

const CarItem = ({ carInfo }) => {
  const navigate = useNavigate();
  const { setSelectedCarInfo } = useCarInfoContext();

  const { id, amount, attribute } = carInfo;
  const { brand, name, segment, imageUrl, fuelType } = attribute;

  const handleClick = () => {
    setSelectedCarInfo(carInfo);
    navigate(`${ROUTE_PATH.DETAIL}/${id}`);
  };

  const isNew = false;

  return (
    <S.CarItem onClick={handleClick}>
      <S.CarInfo>
        <S.Title>
          <span>{brand}</span>
          <span>{name}</span>
        </S.Title>
        <S.Contents>
          <span>{`${segment} / ${fuelType}`}</span>
          <span>{`월 ${amount.toLocaleString()} 원 부터`}</span>
        </S.Contents>
      </S.CarInfo>
      <Image url={imageUrl} />
      {isNew && <S.Badge name="신규" size="small" />}
    </S.CarItem>
  );
};

export default CarItem;
