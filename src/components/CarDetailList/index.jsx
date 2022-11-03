import * as S from "@components/CarDetailList/List.styled";

const CarDetailList = ({ title, contents }) => {
  return (
    <S.List>
      <S.ListHeader>{title}</S.ListHeader>
      <ul>
        {contents.map(({ name, contents }, index) => (
          <S.ListItem key={index}>
            <S.Name>{name}</S.Name>
            <S.Contents>{contents}</S.Contents>
          </S.ListItem>
        ))}
      </ul>
    </S.List>
  );
};

export default CarDetailList;
