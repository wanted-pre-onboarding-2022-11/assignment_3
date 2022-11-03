import React from "react";
import styled from "styled-components";

const DetailTitle = ({ title }) => {
  return <Container>{title}</Container>;
};

export default DetailTitle;

const Container = styled.div`
  width: 100%;
  height: 48px;
  background-color: #0094ff;
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
`;
