import styled from "styled-components";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import icon from "../../assets/icons/iconBack.png";
const CarDetailHeader = () => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.BackButon onClick={() => navigate(-1)}>
        <img src={icon} alt="back_button" />
      </S.BackButon>
      <h1>차량상세</h1>
    </S.Header>
  );
};

const S = {
  Header: styled.div`
    padding: 2rem 15rem;
    text-align: center;
    position: relative;
    h1 {
      min-width: 6.4rem;
      max-height: 6rem;
      font-weight: 700;
      font-size: 17px;
      line-height: 21px;
      color: ${({ theme }) => theme.black};
    }
  `,
  BackButon: styled.button`
    position: absolute;
    left: 5%;
  `,
};
export default CarDetailHeader;
