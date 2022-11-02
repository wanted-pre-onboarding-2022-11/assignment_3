import React from "react";
import { BrowserRouter, Route, Routes } from "../../node_modules/react-router-dom/dist/index";
import CarList from "@/pages/CarList/index";
import { ROUTER_PATH } from "./rotuerPath";
import CarDetail from "@/pages/CarDetail/index";
import NotFound from "@/pages/NotFound/index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={ROUTER_PATH.BASE} element={<CarList />} />
        <Route index path={`${ROUTER_PATH.DETAIL}/id`} element={<CarDetail />} />
        <Route index path={ROUTER_PATH.NOTFOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
