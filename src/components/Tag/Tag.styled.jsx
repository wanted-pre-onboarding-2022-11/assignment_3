import styled, { css, ThemeConsumer } from "styled-components";

const ITEM_TAG_STYLE = css`
  width: 52px;
  height: 22px;
  border-radius: 42px;
  font-size: ${({ theme }) => theme.FONT.SIZE.SMALL};
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

const DEFAULT_TAG_STYLE = css`
  width: 62px;
  height: 27px;
  border-radius: 62px;
  font-size: ${({ theme }) => theme.FONT.SIZE.BASE};
  color: ${({ isSelected, theme }) => (isSelected ? theme.COLORS.WHITE : theme.COLORS.BLACK)};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.COLORS.BLACK : theme.COLORS.GREY};
`;

const TAG_STYLE = {
  small: ITEM_TAG_STYLE,
  default: DEFAULT_TAG_STYLE,
};

const Tag = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  ${({ size = "default" }) => TAG_STYLE[size]}
`;

export { Tag };
