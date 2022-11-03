import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const ColorProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { ColorProvider };
