import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const LayoutNavBar = styled.div`
  position: relative;
`;

export const PrevButton = styled.div`
  position: absolute;
  top: 20px;
  left: 18px;
  cursor: pointer;
`;

export const LayoutHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-weight: 700;
  font-size: 17px;
  margin: 0;
  border-bottom: 1px solid var(--black);
`;

export const LayoutContent = styled.div`
  min-height: 75vh;
  height: 100%;
  background: rosybrown;
`;
