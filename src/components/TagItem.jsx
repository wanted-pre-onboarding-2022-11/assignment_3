import React from "react";
import { COLOR_PALETTE } from "@/styles/constants";
import styled from "styled-components";
import { formattedAll } from "../utils/index";

const TagItem = ({ tag, isClicked, onClick }) => {
  return (
    <TagItemContainer isClicked={isClicked} onClick={onClick}>
      {formattedAll[tag.segment || tag.fuelType]}
    </TagItemContainer>
  );
};

export default TagItem;

export const TagItemContainer = styled.li`
  padding: 4px 16px;
  border-radius: 16px;
  background-color: ${({ isClicked }) => (isClicked ? COLOR_PALETTE.BLACK : COLOR_PALETTE.GRAY)};
  color: ${({ isClicked }) => (isClicked ? "white" : COLOR_PALETTE.BLACK)};
  font-weight: 600;
  cursor: pointer;
`;
