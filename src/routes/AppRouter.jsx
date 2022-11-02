import React from "react";
import { BrowserRouter, Route, Routes } from "../../node_modules/react-router-dom/dist/index";
import Layout from "../components/Layout";
import { routes } from "./routePath";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => {
            const { path, element } = route;
            return <Route key={path} path={path} element={element} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
