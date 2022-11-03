import styled from "styled-components";
import Tag from "@components/Tag";

const CarItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 390px;
  height: 120px;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  cursor: pointer;
`;

const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.FONT.SIZE.BASE};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.FONT.SIZE.SMALL};
`;

const Badge = styled(Tag)`
  position: absolute;
  z-index: 10;
`;

export { CarItem, CarInfo, Title, Contents, Badge };
