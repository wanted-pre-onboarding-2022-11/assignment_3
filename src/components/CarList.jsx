import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import CarItem from "./CarItem";
import carApi from "../apis/car";
import usePromise from "../hooks/usePromise";
import { useMemo } from "react";
import { useCar } from "@/contexts/carContext";

const CarList = () => {
  const { setCar } = useCar();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fuelType = useMemo(() => searchParams.get("fuelType"), [searchParams]);
  const segment = useMemo(() => searchParams.get("segment"), [searchParams]);
  const query = {
    fuelType,
    segment,
  };

  const handleClickCarList = (car) => {
    setCar(car);
    navigate("detail");
  };

  const [loading, cars, error] = usePromise(() => {
    return carApi.getCars(query);
  }, [fuelType, segment]);

  if (loading) {
    return <TextBox>불러오는 중</TextBox>;
  }

  if (error) {
    return <TextBox>차량을 불러오지 못했습니다. 다시 시도해주세요.</TextBox>;
  }

  if (!cars || cars.length === 0) {
    return <TextBox>차량이 없습니다.</TextBox>;
  }

  return (
    <>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} onClick={handleClickCarList.bind(this, car)} />
      ))}
    </>
  );
};

export default CarList;

const TextBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
