import { Button } from "@components";
import { useContext } from "react";
import { FilterListContext } from "../../contexts/FilterListContext";
import { CarFilterContainer } from "./CarFilter.styled";

const CarFilter = () => {
  const { filterList } = useContext(FilterListContext);

  return (
    <CarFilterContainer>
      <div>
        {filterList.map((e, i) => (
          <Button key={e.name} isSelected={e.isSelected}>
            {e.name}
          </Button>
        ))}
      </div>
    </CarFilterContainer>
  );
};

export default CarFilter;
