import styled from "styled-components";

export const CarDetailContainer = styled.div``;

export const CarThumbnail = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 205px;
`;

export const CarHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0;

  > p:first-child {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }

  > p:nth-child(2) {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 20px;
  }

  > p:last-child {
    align-self: flex-end;
    height: 48px;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    padding: 14px 0;
  }
`;

export const CarTitle = styled.div`
  background: var(--blue);
  height: 48px;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  color: var(--white);
  padding: 14px 20px;
`;

export const CarContent = styled.div`
  > div {
    display: flex;
    justify-content: space-between;

    & > p {
      height: 48px;
      padding: 14px 20px;
      font-weight: 400;
      font-size: 17px;
      line-height: 21px;
    }

    & > p:first-child {
      font-weight: 700;
      font-size: 17px;
      line-height: 21px;
    }
  }

  &:last-child {
    margin-bottom: 80px;
  }
`;
