import React, { useContext, useEffect, useState } from "react";
import { getCar } from "@/api";

export const CarDataListContext = React.createContext({
  carDataList: [],
});

export const useCars = () => {
  return useContext(CarDataListContext);
};

export const CarDataListContextProvider = ({ children }) => {
  const [carDataList, setCarDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleCarDataList = async () => {
      setIsLoading(true);
      setCarDataList(await getCar());
      setIsLoading(false);
    };

    handleCarDataList();
  }, []);

  return (
    <CarDataListContext.Provider value={{ carDataList, isLoading }}>
      {children}
    </CarDataListContext.Provider>
  );
};
