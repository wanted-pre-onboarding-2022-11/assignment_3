import styled from "styled-components";

const Home = styled.div`
  min-width: 360px;
  width: 450px;
  height: 100%;
`;

const BackgroundMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  font-size: ${({ theme }) => theme.FONT.SIZE.LARGE};
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export { Home, BackgroundMsg };
