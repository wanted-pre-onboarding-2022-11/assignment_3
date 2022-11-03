import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  LayoutContainer,
  LayoutNavBar,
  PrevButton,
  LayoutHeader,
} from "@components/Layout/Layout.styled";
import { CarFilter } from "@components";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";

const Layout = ({ childeren }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <LayoutContainer>
      <LayoutNavBar>
        {pathname === "/" ? (
          <>
            <LayoutHeader>전체차량</LayoutHeader>
            <CarFilter />
          </>
        ) : (
          <>
            <PrevButton onClick={() => navigate(-1)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 19L5 12L12 5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </PrevButton>
            <LayoutHeader>차량상세</LayoutHeader>
          </>
        )}
        {childeren || <Outlet />}
      </LayoutNavBar>
    </LayoutContainer>
  );
};

export default Layout;
