import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 12px 6px;
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid #000;

  &::-webkit-scrollbar {
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
  }

  &::-webkit-scrollbar-track {
    background-color: #d9d9d9;
  }

  > div {
    flex-shrink: 0;
    margin-right: 6px;
  }

  > div :last-child {
    margin-right: 0;
  }
`;
