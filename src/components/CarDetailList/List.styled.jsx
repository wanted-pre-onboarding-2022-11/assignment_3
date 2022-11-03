import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListHeader = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT.SIZE.LARGE};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  padding-left: 20px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 20px;
`;

const Name = styled.span`
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  font-size: ${({ theme }) => theme.FONT.SIZE.LARGE};
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

const Contents = styled.span`
  font-size: ${({ theme }) => theme.FONT.SIZE.LARGE};
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export { List, ListHeader, ListItem, Name, Contents };
