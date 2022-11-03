import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 205px;
`;

export const Container = styled.div`
  padding: 0 20px;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  width: 100%;
  & > div:last-child {
    font-size: 24px;
    margin-bottom: 34px;
  }
`;

export const Price = styled.div`
  font-size: 17px;
  text-align: right;
  margin-bottom: 14px;
`;

export const Section = styled.div`
  height: 48px;
  background-color: #0094ff;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  line-height: 48px;
  padding: 0 20px;
`;

export const Des = styled.div`
  height: 48px;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`;

export const SBox = styled.section`
  height: calc(100vh - 153px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
