import { createContext, useContext, useState } from "react";

const CarInfoContext = createContext();
CarInfoContext.displayName = "CarInfoContext";

const useCarInfoContext = () => {
  const context = useContext(CarInfoContext);
  if (!context) {
    throw new Error("useCarInfoContext should be used within CarInfoContext.Provider");
  }
  return context;
};

const CarInfoProvider = ({ children }) => {
  const [selectedCarInfo, setSelectedCarInfo] = useState();
  const value = { selectedCarInfo, setSelectedCarInfo };
  return <CarInfoContext.Provider value={value}>{children}</CarInfoContext.Provider>;
};

export { useCarInfoContext, CarInfoProvider };
