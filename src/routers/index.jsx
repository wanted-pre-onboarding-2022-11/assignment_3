import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Detail } from "@/pages";
import ROUTE_PATH from "./RoutePath.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${ROUTE_PATH.DETAIL}/:id`} element={<Detail />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
