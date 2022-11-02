import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
const Top = () => {
  const navigate = useNavigate();
  return (
    <TopStyled>
      <div className="icon" onClick={() => navigate(-1)}>
        <BiArrowBack />
      </div>
      차량상세
    </TopStyled>
  );
};

const TopStyled = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
  .icon {
    padding: 23px;
  }
`;
export default Top;
