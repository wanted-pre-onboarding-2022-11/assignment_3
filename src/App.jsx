import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import * as CommonStyle from "@styles/common";
import Router from "@/routes/index";
import ContextProvider from "@contexts";

function App() {
  return (
    <ThemeProvider theme={CommonStyle}>
      <GlobalStyle />
      <ContextProvider>
        <Router />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
