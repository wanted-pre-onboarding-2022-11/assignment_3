import { Route, Routes } from "../../node_modules/react-router-dom/dist/index";
import { ROUTH_PATH } from "@routes/routesPath";

import Detail from "@pages/Detail";
import Main from "@pages/Main";
import { CarItemContextProvider } from "@contexts/CarItemContext";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTH_PATH.MAIN} element={<Main />} />
      <Route
        path={ROUTH_PATH.DETAIL}
        element={
          <CarItemContextProvider>
            <Detail />
          </CarItemContextProvider>
        }
      />
    </Routes>
  );
};

export default Router;
