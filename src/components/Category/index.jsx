import * as S from "@components/Category/Category.styled";
import Tag from "@components/Tag";
import { useCategoryContext } from "@contexts/category";

const Category = ({ categories }) => {
  const { selectedCategory, setSelectedCategory } = useCategoryContext();

  const handleClick = ({ target }) => {
    setSelectedCategory(target.id);
  };

  return (
    <S.Category>
      {categories.map(({ id, name }) => (
        <S.CategoryItem key={id}>
          <Tag id={id} name={name} isSelected={id === selectedCategory} onClick={handleClick} />
        </S.CategoryItem>
      ))}
    </S.Category>
  );
};

export default Category;
