import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();
CategoryContext.displayName = "CategoryContext";

const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategoryContext should be used within CategoryContext.Provider");
  }
  return context;
};

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const value = { selectedCategory, setSelectedCategory };
  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};

export { useCategoryContext, CategoryProvider };
