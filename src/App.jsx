import { CarInfoProvider } from "./context/CarProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <CarInfoProvider>
      <AppRouter />
    </CarInfoProvider>
  );
}

export default App;
