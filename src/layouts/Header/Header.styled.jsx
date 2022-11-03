import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 360px;
  width: 450px;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT.SIZE.LARGE};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

const IconWrapper = styled.div`
  position: absolute;
  z-index: 10;
  left: 20px;
`;

export { Header, Title, IconWrapper };
