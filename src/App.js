import Router from "@routes/Router";
import { CarListContextProvider } from "@contexts/CarListContext";
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
import { theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <CarListContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </CarListContextProvider>
  );
}

export default App;
