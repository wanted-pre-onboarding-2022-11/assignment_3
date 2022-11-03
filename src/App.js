import { ThemeProvider } from "styled-components";
import Router from "@/routers";
import { theme } from "./styled/theme";
import Layout from "./components/Layout/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
