import styled from "styled-components";

const CarHeader = () => {
  return (
    <S.Header>
      <h1>전체 차량</h1>
    </S.Header>
  );
};

const S = {
  Header: styled.div`
    padding: 2rem 16rem;
    text-align: center;
    h1 {
      min-width: 6.4rem;
      font-weight: 700;
      font-size: 17px;
      line-height: 21px;
      color: ${({ theme }) => theme.black};
    }
  `,
};
export default CarHeader;
