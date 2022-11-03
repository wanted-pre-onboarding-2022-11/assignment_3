import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
  max-width: 450px;
  min-width: 360px;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
`;
