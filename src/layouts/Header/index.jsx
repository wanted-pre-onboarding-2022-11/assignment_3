import * as S from "@layouts/Header/Header.styled";
import Icon from "@/components/common/Icon/index";
import { useLocation, useNavigate } from "react-router-dom";
import ROUTE_PATH from "@/routes/routerPaths";

const TITLE = {
  HOME: "전체차량",
  DETAIL: "차량상세",
};

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === ROUTE_PATH.BASE;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${ROUTE_PATH.BASE}`);
  };

  return (
    <S.Header>
      {!isHome && (
        <S.IconWrapper onClick={handleClick}>
          <Icon iconName="back" />
        </S.IconWrapper>
      )}
      <S.Title>{isHome ? TITLE.HOME : TITLE.DETAIL}</S.Title>
    </S.Header>
  );
};

export default Header;
