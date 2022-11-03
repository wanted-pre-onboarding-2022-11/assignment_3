import React from "react";
import styled from "styled-components";
import { formattedAll } from "@/utils/index";

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
  background-color: ${({ isClicked, theme }) => (isClicked ? theme.color.black : theme.color.gray)};
  color: ${({ isClicked, theme }) => (isClicked ? theme.color.white : theme.color.black)};
  font-weight: 600;
  cursor: pointer;
`;
