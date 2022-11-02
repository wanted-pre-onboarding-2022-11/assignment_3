import { ThemeProvider } from "styled-components";

const theme = {
  black: "#000000",
  gray: "#d9d9d9",
  blue: "#0094ff",
};

const ColorProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { ColorProvider };
