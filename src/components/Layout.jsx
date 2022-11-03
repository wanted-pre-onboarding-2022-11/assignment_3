import React from "react";
import styled from "styled-components";
import { Outlet } from "../../node_modules/react-router-dom/dist/index";

const Layout = () => {
  return (
    <Wrraper>
      <Outlet />
    </Wrraper>
  );
};

const Wrraper = styled.div`
  width: 100%;
  max-width: 450px;
`;
export default Layout;
