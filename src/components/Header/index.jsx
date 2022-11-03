import React from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { Container, BackBtn, Title, SBox } from "./Header.styled";

function Header({ title, isBackBtn }) {
  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      {isBackBtn ? <BackBtn onClick={goToBack} /> : <SBox />}
      <Title>{title}</Title>
      <SBox />
    </Container>
  );
}

export default Header;
