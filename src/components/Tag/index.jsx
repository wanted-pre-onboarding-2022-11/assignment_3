import * as S from "@components/Tag/Tag.styled";

const Tag = ({ size = "default", id, name, isSelected, onClick }) => {
  return (
    <S.Tag id={id} size={size} isSelected={isSelected} onClick={onClick}>
      {name}
    </S.Tag>
  );
};

export default Tag;
