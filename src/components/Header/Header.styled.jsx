import styled from "styled-components";

export const Container = styled.header`
  height: 60px;
  border-bottom: 1px solid #000;
  width: 100%;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackBtn = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(/asset/images/ICON_Back.png);
`;

export const SBox = styled.div`
  width: 24px;
  height: 24px;
  visibility: hidden;
`;

export const Title = styled.h2`
  font-size: 17px;
`;
