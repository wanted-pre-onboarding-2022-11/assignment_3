import { ThemeProvider } from "styled-components";
import Router from "@/routers";
import { theme } from "./styled/theme";
import Layout from "./components/Layout/index";
import { CarDataListContextProvider } from "./context/CarDataListContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CarDataListContextProvider>
        <Layout>
          <Router />
        </Layout>
      </CarDataListContextProvider>
    </ThemeProvider>
  );
}

export default App;
