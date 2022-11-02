import React, { useContext, useState } from "react";

export const FilterListContext = React.createContext({
  filterList: [
    { name: "전체", isSelected: true },
    { name: "대형", isSelected: false },
    { name: "중형", isSelected: false },
    { name: "소형", isSelected: false },
    { name: "SUV", isSelected: false },
  ],
  selectedMenu: "All",
  handleSelectFilter: () => {},
});

export const FilterListContextProvider = ({ children }) => {
  const { filterList, selectedMenu } = useContext(FilterListContext);
  const [newFilterList, setNewFilterList] = useState(filterList);
  const [newSelectedMenu, setNewSelectedMenu] = useState(selectedMenu);

  const handleSelectFilter = (target) => {
    setNewSelectedMenu(target);
    setNewFilterList((prev) =>
      prev.map((e) => {
        e.isSelected = e.name === target;
        return e;
      }),
    );
  };

  return (
    <FilterListContext.Provider
      value={{ filterList: newFilterList, selectedMenu: newSelectedMenu, handleSelectFilter }}
    >
      {children}
    </FilterListContext.Provider>
  );
};
