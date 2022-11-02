import React from "react";
import { BrowserRouter, Route, Routes } from "../../node_modules/react-router-dom/dist/index";
import Home from "@/pages/CarList/index";
import { ROUTER_PATH } from "./rotuerPath";
import CarDetail from "@/pages/CarDetail/index";
import NotFound from "@/pages/NotFound/index";
import Layout from "@/components/Layout/index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={ROUTER_PATH.BASE} element={<Home />} />
          <Route path={`${ROUTER_PATH.DETAIL}/:id`} element={<CarDetail />} />
          <Route path={ROUTER_PATH.NOTFOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
