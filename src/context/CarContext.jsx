import { createContext, useState } from "react";

export const CarListContext = createContext({
  carList: [],
  isLoading: true,
  isFetch: [
    { text: "전체", isActive: true, query: "" },
    { text: "대형", isActive: false, query: "?segment=E" },
    { text: "중형", isActive: false, query: "?segment=D" },
    { text: "소형", isActive: false, query: "?segment=C" },
  ],
  handleCarType: () => {},
});

export const CarListContextProvider = ({ children }) => {
  const [isLoading] = useState(true);
  const [carList] = useState([]);
  const [isFetch, setIsFetch] = useState([
    { text: "전체", isActive: true, query: "" },
    { text: "대형", isActive: false, query: "?segment=E" },
    { text: "중형", isActive: false, query: "?segment=D" },
    { text: "소형", isActive: false, query: "?segment=C" },
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
  };

  return (
    <CarListContext.Provider value={{ carList, isLoading, isFetch, handleCarType }}>
      {children}
    </CarListContext.Provider>
  );
};
