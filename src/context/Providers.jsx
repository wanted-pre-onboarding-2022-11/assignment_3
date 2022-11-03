import { CarInfoProvider } from "./CarProvider";
import { ColorProvider } from "./ColorProvider";

const Providers = ({ children }) => {
  return (
    <ColorProvider>
      <CarInfoProvider>{children}</CarInfoProvider>
    </ColorProvider>
  );
};

export default Providers;
