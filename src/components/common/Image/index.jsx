import * as S from "@components/common/Image/Image.styled";
const Image = ({ url, size = "default" }) => <S.Image src={url} size={size} />;

export default Image;
