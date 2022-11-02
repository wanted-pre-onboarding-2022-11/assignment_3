import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LayoutHeader } from "@components/Layout/Layout.styled";
import { CarFilter } from "@components";

const Layout = ({ childeren }) => {
  const { pathname } = useLocation();

  return (
    <>
      <LayoutHeader>전체차량</LayoutHeader>
      {pathname === "/" ? <CarFilter /> : <></>}
      {childeren || <Outlet />}
    </>
  );
};

export default Layout;
