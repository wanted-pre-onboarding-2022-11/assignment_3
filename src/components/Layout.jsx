import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <SLayout>{children}</SLayout>;
};

const SLayout = styled.div`
  @media screen and (min-width: 450px) {
    width: 450px;
  }

  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  min-width: 360px;
  width: 100%;
  height: 100%;
`;

export default Layout;
