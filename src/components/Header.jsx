import React from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import IconBack from "@icons/ICON_Back.svg";
import styled from "styled-components";

const Header = ({ children, isBack }) => {
  const navigate = useNavigate();

  return (
    <SHeader>
      {isBack && <img src={IconBack} alt="IconBack" onClick={() => navigate(-1)} />}
      <span>{children}</span>
    </SHeader>
  );
};

const SHeader = styled.header`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};

  img {
    position: absolute;
    left: 25px;

    cursor: pointer;
  }

  span {
    font-size: 17px;
    font-weight: 700;
  }
`;

export default Header;
