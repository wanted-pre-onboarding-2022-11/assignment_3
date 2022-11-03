import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  position: relative;
`;

export const New = styled.div`
  position: absolute;
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  border-radius: 15px;
  padding: 4px 15px;
  background-color: #0094ff;
  top: 7px;
  right: 7px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  margin-bottom: 8px;
`;

export const Info = styled.div`
  font-size: 12px;
  line-height: 15px;
`;

export const Image = styled.img`
  width: 152px;
  height: 80px;
`;
