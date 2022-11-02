import { createContext, useState } from "react";
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

  const handleCarData = async () => {
    const response = await getCar(selected);
    setIsLoading(false);
    return response;
  };

  return (
    <CarListContext.Provider value={{ isLoading, isFetch, handleCarType, handleCarData }}>
      {children}
    </CarListContext.Provider>
  );
};
