import React from "react";
import styled from "styled-components";

const Button = ({ label, onClick, color = "primary" }) => {
  return (
    <ButtonContainer onClick={onClick} color={color}>
      <label> {label}</label>
    </ButtonContainer>
  );
};

export const ButtonContainer = styled.button`
  padding: 0.5em 1.8em;
  color: ${({ theme, color }) => theme.fontColor[color]};
  background-color: ${({ theme, color }) => theme.bgColor[color]};
  border-radius: 62px;
  width: 100%;
  min-width: 6.2rem;
  min-height: 27px;
  font-size: 1.4rem;
  text-align: center;
  box-sizing: border-box;
`;

export default Button;
