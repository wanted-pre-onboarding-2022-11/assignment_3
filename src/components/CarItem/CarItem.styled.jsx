import styled from "styled-components";

export const CarItemContainer = styled.div`
  width: 100%;
  height: 120px;
  padding: 24px 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--black);
  cursor: pointer;
`;

export const LeftItem = styled.div`
  > div:first-child {
    margin-bottom: 8px;
    font-weight: 700;
    line-height: 17px;
  }

  > div:last-child {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }

  > div > p {
    padding: 0;
    margin: 0;
  }
`;

export const RightItem = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 152px;
`;
