import React from "react";
import styled from "styled-components";

const DetailDes = ({ title, des }) => {
  console.log(title, des);
  return (
    <Container>
      <b>{title}</b>
      <div>{des}</div>
    </Container>
  );
};

export default DetailDes;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
