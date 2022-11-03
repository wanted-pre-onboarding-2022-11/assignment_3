import React from "react";
import styled from "styled-components";
import { useTags } from "../hooks/useTags";
import Tag from "./common/Tag";

const Category = ({ setAllCar }) => {
  const { tags, handleClick } = useTags(setAllCar);

  return (
    <S.Category>
      {tags
        ? tags.map((tag) => (
            <Tag key={tag.label} label={tag.label} isActive={tag.isActive} onClick={handleClick} />
          ))
        : null}
    </S.Category>
  );
};

const S = {
  Category: styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.8rem;
    padding: 0.6rem;
    border-top: 1px solid ${({ theme }) => theme.black};
    border-bottom: 1px solid ${({ theme }) => theme.black};
  `,
};
export default Category;
