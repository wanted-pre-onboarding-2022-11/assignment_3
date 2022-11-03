import React from "react";
import styled from "styled-components";

const Message = ({ message }) => {
  return (
    <S.Container>
      <h1>{message}</h1>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    text-align: center;
    h1 {
      font-weight: 700;
      font-size: 1.7rem;
    }
  `,
};

export default Message;
