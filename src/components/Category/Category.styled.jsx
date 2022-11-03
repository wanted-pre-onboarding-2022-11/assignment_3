import styled from "styled-components";

const Category = styled.ul`
  display: flex;
  width: 100%;
  height: 40px;
  overflow-x: scroll;
  gap: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
`;

const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Category, CategoryItem };
