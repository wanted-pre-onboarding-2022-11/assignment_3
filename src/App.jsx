import Providers from "./context/Providers";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
