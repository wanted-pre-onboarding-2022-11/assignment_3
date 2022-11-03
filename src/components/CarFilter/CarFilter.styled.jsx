import styled from "styled-components";

export const CarFilterContainer = styled.div`
  height: 100%;
  overflow: auto;
  border-bottom: 1px solid var(--black);

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  > div {
    display: grid;
    height: 40px;
    padding: 0 12px;
    grid-template-columns: repeat(auto-fill, 62px);
    gap: 8px;
    align-items: center;
    grid-auto-flow: column;
  }
`;
