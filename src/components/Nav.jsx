import React from "react";
import { segmentArr, fuelArr } from "@utils/enum";
import styled from "styled-components";

const Nav = ({ handleClickCategory }) => {
  return (
    <SNav>
      <ul>
        {segmentArr.map((segment) => (
          <SButton key={segment} name="segment" value={segment} onClick={handleClickCategory}>
            {segment}
          </SButton>
        ))}
      </ul>

      <ul>
        {fuelArr.map((fuel) => (
          <SButton key={fuel} name="fuelType" value={fuel} onClick={handleClickCategory}>
            {fuel}
          </SButton>
        ))}
      </ul>
    </SNav>
  );
};

const SNav = styled.nav`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${({ theme }) => theme.color.black};

  ul {
    display: flex;
    gap: 8px;
    padding: 6px 12px;
  }
`;

const SButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 18px;
  background-color: ${({ theme }) => theme.color.gray};

  border-radius: 999px;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
`;

export default Nav;
