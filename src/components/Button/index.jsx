import { useContext } from "react";
import { FilterListContext } from "../../contexts/FilterListContext";
import { ButtonContainer } from "./Button.styled";

const Button = ({ isSelected, children }) => {
  const { handleSelectFilter } = useContext(FilterListContext);

  const handleButtonClick = () => {
    handleSelectFilter(children);
  };

  return (
    <ButtonContainer isSelected={isSelected} onClick={handleButtonClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
