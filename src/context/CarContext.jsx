import { createContext, useCallback, useEffect, useState } from "react";
import { getCar } from "../api/index";

export const CarListContext = createContext({
  carList: [],
  isLoading: true,
  isFetch: [
    { text: "전체", isActive: true, query: "" },
    { text: "대형", isActive: false, query: "E" },
    { text: "중형", isActive: false, query: "D" },
    { text: "소형", isActive: false, query: "C" },
    { text: "SUV", isActive: false, query: "SUV" },
  ],
  selected: "",
  handleCarType: () => {},
  handleCarData: () => {},
});

export const CarListContextProvider = ({ children }) => {
  const [carList, setCarList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState("");
  const [isFetch, setIsFetch] = useState([
    { text: "전체", isActive: true, query: "" },
    { text: "대형", isActive: false, query: "E" },
    { text: "중형", isActive: false, query: "D" },
    { text: "소형", isActive: false, query: "C" },
    { text: "SUV", isActive: false, query: "SUV" },
  ]);

  const handleCarType = (text) => {
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
    const [{ query }] = isFetch.filter((car) => car.text === text);
    setSelected(query);
  };

  const handleCarData = useCallback(async () => {
    try {
      const response = await getCar(selected);
      setCarList(response);
      setIsLoading(false);
    } catch (e) {
      throw new Error(e);
    }
  }, [selected, setCarList]);

  useEffect(() => {
    handleCarData();
  }, [handleCarData]);

  return (
    <CarListContext.Provider value={{ carList, isLoading, isFetch, handleCarType }}>
      {children}
    </CarListContext.Provider>
  );
};
