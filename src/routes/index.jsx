import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTE_PATH from "@/routes/routerPaths";
import Layout from "@/layouts";
import Home from "@/pages/Home";
import CarDetail from "../pages/CarDetail/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path={ROUTE_PATH.BASE} element={<Home />} />
          <Route path={`${ROUTE_PATH.DETAIL}/:id`} element={<CarDetail />} />
          <Route path={ROUTE_PATH.NOT_FOUND} element={<div>NOT FOUND</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
