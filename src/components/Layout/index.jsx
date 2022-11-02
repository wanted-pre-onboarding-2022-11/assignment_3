import React from "react";
import { Outlet } from "../../../node_modules/react-router-dom/dist/index";
import { SLayout } from "./Layout.styled";

function Layout() {
  return (
    <SLayout>
      <Outlet />
    </SLayout>
  );
}

export default Layout;
