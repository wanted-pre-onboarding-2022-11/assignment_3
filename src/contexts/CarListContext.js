import { createContext, useCallback, useContext, useEffect, useState } from "react";
import instance from "@apis/instance";
import { getKeyByValue } from "@utils/function";
import { fuelEnum, segmentEnum } from "@utils/enum";

const CarListContext = createContext(null);

export const CarListContextProvider = ({ children }) => {
  const [carList, setCarList] = useState({
    cars: null,
    isLoading: true,
    isError: false,
  });

  const [category, setCategory] = useState({
    segment: null,
    fuelType: null,
  });

  const handleGetCarList = useCallback(async () => {
    try {
      let data;
      if (!category.segment && !category.fuelType) {
        data = await instance.get("/cars");
      } else {
        const query = Object.keys(category)
          .map((item) => category[item] && `${item}=${category[item]}`)
          .join("&");
        data = await instance.get(`/cars?${query}`);
      }
      setCarList((prev) => ({ ...prev, cars: data.data.payload, isLoading: false }));
    } catch (error) {
      setCarList((prev) => ({ ...prev, isLoading: false, isError: true }));
    }
  }, [category]);

  useEffect(() => {
    handleGetCarList();
  }, [handleGetCarList]);

  const handleClickCategory = (event) => {
    const name = event.target.getAttribute("name");
    const value = event.target.getAttribute("value");

    let newValue;
    if (name === "segment") {
      newValue = getKeyByValue(segmentEnum, value);
    } else {
      newValue = getKeyByValue(fuelEnum, value);
    }

    setCategory((prev) => ({ ...prev, [name]: newValue }));
  };

  return (
    <CarListContext.Provider value={{ carList, category, handleClickCategory }}>
      {children}
    </CarListContext.Provider>
  );
};

export const useCarListState = () => {
  const state = useContext(CarListContext);
  if (!state) {
    throw new Error("프로바이더를 찾을 수 없습니다.");
  }
  return state;
};
