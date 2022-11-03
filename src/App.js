import React from "react";
import Router from "@routes";
import { FilterListContextProvider } from "@/contexts/FilterListContext";
import { CarDataListContextProvider } from "./contexts/CarDataListContext";

function App() {
  return (
    <FilterListContextProvider>
      <CarDataListContextProvider>
        <Router />
      </CarDataListContextProvider>
    </FilterListContextProvider>
  );
}

export default App;
