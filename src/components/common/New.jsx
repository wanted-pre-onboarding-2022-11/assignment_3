import React from "react";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

const New = () => {
  return (
    <S.New color={"tertiary"}>
      <label>신규</label>
    </S.New>
  );
};

const S = {
  New: styled(ButtonContainer)`
    max-width: 5.2rem;
    max-height: 2.2rem;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(0%, -50%);
    padding: 0.4rem 0.3rem;
  `,
};

export default New;
