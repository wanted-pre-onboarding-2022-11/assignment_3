import React, { useState } from "react";
import { useContext } from "react";
import { useMemo } from "react";

const CarContext = React.createContext({
  car: null,
});

export const useCar = () => useContext(CarContext);

export const CarContextProvider = ({ children }) => {
  const [car, setCar] = useState(null);

  const value = useMemo(
    () => ({
      car,
      setCar,
    }),
    [car],
  );

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};
