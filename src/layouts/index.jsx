import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "@layouts/Header/index";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export default Layout;
