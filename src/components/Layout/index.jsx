import React from "react";
import { Outlet } from "../../../node_modules/react-router-dom/dist/index";
import { CarListContextProvider } from "../../context/CarContext";
import { SLayout } from "./Layout.styled";

function Layout() {
  return (
    <CarListContextProvider>
      <SLayout>
        <Outlet />
      </SLayout>
    </CarListContextProvider>
  );
}

export default Layout;
