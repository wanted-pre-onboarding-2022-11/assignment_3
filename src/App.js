import { ThemeProvider } from "styled-components";
import Router from "@/routers";
import { theme } from "./styled/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
