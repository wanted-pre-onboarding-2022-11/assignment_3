import * as S from "@pages/Home/Home.styled";
import Category from "@components/Category/index";
import { useEffect, useState } from "react";
import { useCategoryContext } from "@/contexts/category";
import { getCarList } from "@/apis/index";
import CarItem from "@/components/CarItem/index";
import useFetch from "../../hooks/useFetch";

const categories = [
  {
    id: "all",
    name: "전체",
  },
  {
    id: "C",
    name: "소형",
  },
  {
    id: "D",
    name: "중형",
  },
  {
    id: "E",
    name: "대형",
  },
];

const Home = () => {
  const { fetch, isFetching, data: carList } = useFetch(getCarList);
  const { selectedCategory } = useCategoryContext();
  const [backgroundMsg, setBackgroundMsg] = useState("");

  useEffect(() => {
    const params = selectedCategory !== "all" ? { segment: selectedCategory } : {};
    fetch(params);
  }, [selectedCategory]);

  useEffect(() => {
    if (isFetching) {
      setBackgroundMsg("불러오는 중");
      return;
    }

    if (!carList || carList.length === 0) {
      setBackgroundMsg("차량이 없습니다!");
    } else {
      setBackgroundMsg("");
    }
  }, [isFetching, carList]);

  return (
    <S.Home>
      <Category categories={categories} />
      {!isFetching && carList && carList.map((data) => <CarItem key={data.id} carInfo={data} />)}
      {backgroundMsg !== "" && <S.BackgroundMsg>{backgroundMsg}</S.BackgroundMsg>}
    </S.Home>
  );
};

export default Home;
