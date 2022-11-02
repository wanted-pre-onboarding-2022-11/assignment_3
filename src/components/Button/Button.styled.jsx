import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 62px;
  height: 27px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 62px;
  border: none;
  outline: none;
  color: ${(props) => (props.isSelected ? "var(--white)" : "var(--black)")};
  background: ${(props) => (props.isSelected ? "var(--black)" : "var(--gray)")};
  position: relative;
  cursor: pointer;

  &:last-child:after {
    content: "";
    display: block;
    position: absolute;
    right: -12px;
    top: 0;
    width: 12px;
    height: 100%;
  }
`;
