import styled, { css } from "styled-components";

const CarDetail = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  width: 450px;
`;

const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 206px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 92px;
  padding: 0 20px;
`;

const MAIN_TITLE_STYLE = css`
  font-size: ${({ theme }) => theme.FONT.SIZE.X_LARGE};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  text-align: left;
`;

const SUB_TITLE_STYLE = css`
  font-size: ${({ theme }) => theme.FONT.SIZE.LARGE};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  text-align: left;
`;

const AMOUNT_TITLE_STYLE = css`
  font-size: ${({ theme }) => theme.FONT.SIZE.LARGE};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
  text-align: right;
  padding: 13px 20px 13px 0;
`;

const titleStyle = {
  main: MAIN_TITLE_STYLE,
  sub: SUB_TITLE_STYLE,
  amount: AMOUNT_TITLE_STYLE,
};

const Title = styled.span`
  width: 100%;
  ${({ type }) => titleStyle[type]}
`;

export { CarDetail, Thumbnail, TitleWrapper, Title };
