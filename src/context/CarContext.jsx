import { createContext, useCallback, useState } from "react";
import { getCar } from "../api/index";

export const CarListContext = createContext({
  carList: [],
  isLoading: true,
  isFetch: [
    { text: "전체", isActive: true, query: "" },
    { text: "대형", isActive: false, query: "E" },
    { text: "중형", isActive: false, query: "D" },
    { text: "소형", isActive: false, query: "C" },
  ],
  handleCarType: () => {},
  handleCarData: () => {},
});

export const CarListContextProvider = ({ children }) => {
  const [carList, setCarList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetch, setIsFetch] = useState([
    { text: "전체", isActive: true, query: "" },
    { text: "대형", isActive: false, query: "E" },
    { text: "중형", isActive: false, query: "D" },
    { text: "소형", isActive: false, query: "C" },
  ]);

  const handleCarData = async (_text) => {
    setIsLoading(true);
    const [{ query }] = isFetch.filter((item) => item.text === _text);
    const response = await getCar(query);
    setCarList(response);
    setIsLoading(false);
  };

  const handleCarType = (text) => {
    handleCarData(text);
    setIsFetch((prev) =>
      prev.map((item) => {
        if (item.text !== text) {
          item.isActive = false;
        } else {
          item.isActive = true;
        }
        return item;
      }),
    );
  };

  return (
    <CarListContext.Provider value={{ carList, isLoading, isFetch, handleCarType, handleCarData }}>
      {children}
    </CarListContext.Provider>
  );
};
