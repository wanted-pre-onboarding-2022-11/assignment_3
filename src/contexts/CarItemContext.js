import { createContext, useCallback, useContext, useState } from "react";
import instance from "@apis/instance";

const CarItemContext = createContext(null);

export const CarItemContextProvider = ({ children }) => {
  const [carItem, setCarItem] = useState({
    car: null,
    isLoading: true,
    isError: false,
  });

  const handleGetCarItem = useCallback(async (id) => {
    try {
      const { data } = await instance.get("/cars");
      const [carItem] = data.payload.filter((item) => item.id === +id);
      setCarItem((prev) => ({ ...prev, car: carItem, isLoading: false }));
    } catch (error) {
      setCarItem((prev) => ({ ...prev, isLoading: false, isError: true }));
    }
  }, []);

  return (
    <CarItemContext.Provider value={{ carItem, handleGetCarItem }}>
      {children}
    </CarItemContext.Provider>
  );
};

export const useCarItemState = () => {
  const state = useContext(CarItemContext);
  if (!state) {
    throw new Error("프로바이더를 찾을 수 없습니다.");
  }
  return state;
};
