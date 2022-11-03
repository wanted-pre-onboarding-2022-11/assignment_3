import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, CarDetail } from "@pages";
import ROUTE_PATH from "./routerPaths";
import { Layout } from "@components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path={ROUTE_PATH.BASE} element={<Home />} />
          <Route path={`${ROUTE_PATH.DETAIL}/:id`} element={<CarDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
