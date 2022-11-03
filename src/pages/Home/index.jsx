import React, { useMemo } from "react";
import { TagList } from "@/components/index";
import Header from "../../components/Header/index";
import { useCars } from "../../context/CarDataListContext";
import { useSearchParams } from "../../../node_modules/react-router-dom/dist/index";
import CarItem from "../../components/CarItem/index";

const Home = () => {
  const { carDataList } = useCars();
  const [searchParams] = useSearchParams();
  const fuelType = useMemo(() => searchParams.get("fuelType"), [searchParams]);
  const segment = useMemo(() => searchParams.get("segment"), [searchParams]);

  const filterdList = carDataList.filter((car) => {
    if (
      segment &&
      fuelType &&
      car.attribute.segment === segment &&
      car.attribute.fuelType === fuelType
    ) {
      return true;
    }
    if (!fuelType && segment && car.attribute.segment === segment) {
      return true;
    }
    if (!segment && fuelType && car.attribute.fuelType === fuelType) {
      return true;
    }
    return false;
  });

  if (!fuelType && !segment) {
    return (
      <>
        <Header title="전체차량" />
        <TagList />
        {carDataList.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </>
    );
  }

  return (
    <>
      <Header title="전체차량" />
      <TagList />
      {filterdList.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </>
  );
};

export default Home;
