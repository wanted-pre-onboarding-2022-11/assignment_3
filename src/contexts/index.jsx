import { CarInfoProvider } from "@contexts/carInfo";
import { CategoryProvider } from "@contexts/category";

const ContextProvider = ({ children }) => (
  <CategoryProvider>
    <CarInfoProvider>{children}</CarInfoProvider>
  </CategoryProvider>
);

export default ContextProvider;
