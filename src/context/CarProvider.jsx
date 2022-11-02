import { createContext, useContext, useEffect, useMemo, useState } from "react";
import carAPI from "../api/carAPI";

const CarInfoValueContext = createContext(null);
const CarInfoActionContext = createContext(null);

const useCarInfo = () => {
  const value = useContext(CarInfoValueContext);
  if (value === null) {
    throw new Error("useCarInfo should be used within TodosProvider");
  }
  return value;
};

const useCarInfoActions = () => {
  const value = useContext(CarInfoActionContext);
  if (value === null) {
    throw new Error("useCarInfoActions should be used within TodosProvider");
  }
  return value;
};

const CarInfoProvider = ({ children }) => {
  const [carInfo, setCarInfo] = useState([]);
  const actions = useMemo(
    () => ({
      async getAllCar() {
        const {
          data: { payload },
        } = await carAPI.getAllCar();
        setCarInfo(payload);
      },
    }),
    [],
  );

  useEffect(() => {
    actions.getAllCar();
  }, [actions]);
  return (
    <CarInfoValueContext.Provider value={carInfo}>
      <CarInfoActionContext.Provider value={actions}>{children}</CarInfoActionContext.Provider>
    </CarInfoValueContext.Provider>
  );
};

export { useCarInfo, useCarInfoActions, CarInfoProvider };
