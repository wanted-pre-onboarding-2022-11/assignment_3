import Providers from "./context/Providers";
import AppRouter from "./routes/AppRouter";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <AppRouter />
    </Providers>
  );
}

export default App;
