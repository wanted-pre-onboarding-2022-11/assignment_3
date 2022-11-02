import React from "react";
import { BrowserRouter, Route, Routes } from "../../node_modules/react-router-dom/dist/index";
import { routes } from "./routePath";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          const { path, element } = route;
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
