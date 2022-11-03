import React, { useContext, useEffect, useState } from "react";
import { getCarData } from "@apis";
import { FilterListContext } from "./FilterListContext";
import { convertSegment } from "@utils/convertValue";

export const CarDataListContext = React.createContext({
  carDataList: [],
});

export const CarDataListContextProvider = ({ children }) => {
  const { selectedMenu, filterList } = useContext(FilterListContext);
  const [carDataList, setCarDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleCarDataList = async () => {
      const segment = convertSegment(selectedMenu);

      setIsLoading(true);
      setCarDataList(await getCarData(segment === "All" ? "" : segment));
      setIsLoading(false);
    };

    handleCarDataList();
  }, [selectedMenu, filterList]);

  return (
    <CarDataListContext.Provider value={{ carDataList, isLoading }}>
      {children}
    </CarDataListContext.Provider>
  );
};
